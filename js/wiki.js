import "./shell.js";
import { FACTIONS } from "./data.js";
import { esc } from "./util.js";

const auctioneer = {
  id: "auctioneer",
  name: "Auctioneer",
  title: "Floor burner",
  kicker: "Special Character · 1/1 sample",
  head: "assets/gifs/Auctioneer.gif",
  onRecord: "Auctions 1/1 Special Characters and uses the proceeds to sweep and burn the GLHFers floor. Docs put the burn count at 420, which this mockup uses as its baseline.",
  lore: [
    "Sample lore: The gavel drops on Sundays in this lobby. The portrait is the Auctioneer gif from the media kit.",
  ],
  link: "burn.html",
  linkLabel: "Burn tracker",
};

const cards = [
  ...FACTIONS.filter((faction) => faction.id !== "gigus").map((faction) => ({
    ...faction,
    kicker: "Master · 1/1 sample",
    link: `factions.html#${faction.id}`,
    linkLabel: "Faction hall",
  })),
  auctioneer,
  {
    ...FACTIONS.find((faction) => faction.id === "gigus"),
    kicker: "Creator · lore, not a 1/1",
    link: "factions.html#gigus",
    linkLabel: "Gigus lore hall",
  },
];

document.getElementById("wiki-grid").innerHTML = cards.map((card) => `
  <article class="wiki-card" id="${card.id}">
    <img class="portrait" src="${card.head}" alt="${esc(card.name)} portrait">
    <p class="kicker">${esc(card.kicker)}</p>
    <h2>${esc(card.name)}</h2>
    <p>${esc(card.onRecord)}</p>
    ${card.lore.map((line) => `<p>${esc(line)}</p>`).join("")}
    <p><span class="sample-pill">Sample</span></p>
    <p><a href="${card.link}">${esc(card.linkLabel)}</a></p>
  </article>`).join("");

if (location.hash) {
  document.querySelector(location.hash)?.scrollIntoView();
}
