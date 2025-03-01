import type { KindleLocation, KindleState } from "./type";

export function getElementByXpath(path: string) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

export function getIntegersFromString(str: string) {
  return parseInt(str.match(/\d+/g).join(""));
}

export function getKindleLocation(url: string): KindleLocation {
  if (url.includes("asin") || url.includes("manga")) {
    return "book";
  } else if (url.includes("kindle-library")) {
    return "library";
  } else if (url.includes("notebook")) {
    return "notebook";
  }
}

export function isKindleStateEqual(
  a: KindleState | undefined,
  b: KindleState | undefined
) {
  if (a === undefined && b === undefined) {
    return true;
  } else if (a === undefined || b === undefined) {
    return false;
  }
  return JSON.stringify(a) === JSON.stringify(b);
}
