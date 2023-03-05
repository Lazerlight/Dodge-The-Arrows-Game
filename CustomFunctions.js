export function getProperty(el, property) {
  return parseFloat(getComputedStyle(el).getPropertyValue(property));
}

export function setProperty(el, porperty, value) {
  el.style.setProperty(porperty, value);
}

export function incProperty(el, property, inc) {
  setProperty(el, property, getProperty(el, property) + inc);
}
