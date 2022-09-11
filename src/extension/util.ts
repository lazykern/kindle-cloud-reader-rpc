import type { Presence } from 'discord-rpc';
import type { KindleLocation } from './interface';

export function getElementByXpath(path:string) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

export function getIntegersFromString(str:string) {
  return parseInt(str.match(/\d+/g).join(''));
}

export function getKindleLocation(url:string) : KindleLocation {
    if (url.includes("asin")) {
      return "book";
    } else if (url.includes("kindle-library")) {
      return "library";
    } else if (url.includes("notebook")) {
      return "notebook";
    }
}

export function isPresenceEqual(a:Presence, b:Presence) {
  if (a === undefined && b === undefined) {
    return true;
  } else if (a === undefined || b === undefined) {
    return false;
  }
  return a.details === b.details && a.state === b.state;
}