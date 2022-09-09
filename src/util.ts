export function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

export function getIntegersFromString(str) {
  return parseInt(str.match(/\d+/g).join(''));
}