import { BASE_BURN } from "./data.js";

let extra = 0;
const listeners = new Set();

function emit() {
  const value = BASE_BURN + extra;
  listeners.forEach((fn) => fn(value, extra));
}

setInterval(() => {
  extra += 1;
  emit();
}, 8000);

export function onBurn(fn) {
  listeners.add(fn);
  fn(BASE_BURN + extra, extra);
  return () => listeners.delete(fn);
}
