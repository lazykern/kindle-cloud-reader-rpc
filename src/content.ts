import {  getElementByXpath } from "./util";
import type { PlasmoContentScript } from "plasmo";

export const config: PlasmoContentScript = {
  matches: ["*://read.amazon.com/*"],
};

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.location === "book") {
    const bookTitle =
      document.body.getElementsByClassName("title-default")[0].textContent;
    const footerTitle =
      document.body.getElementsByClassName("footer-title")[0].textContent;
    const pageInfoList = footerTitle.match(/\d+/g);
    const currentPage = pageInfoList[0];
    const totalPages = pageInfoList[1];

    sendResponse({ bookTitle, currentPage, totalPages });
  } else if (msg.location === "notebook") {
    const bookTitle = getElementByXpath(
      '//*[@id="annotation-scroller"]/div/div[1]/div[2]/h3'
    ).textContent;
    const highlightCount = getElementByXpath(
      '//*[@id="kp-notebook-highlights-count"]'
    ).textContent;
    const noteCount = getElementByXpath(
      '//*[@id="kp-notebook-notes-count"]'
    ).textContent;

    sendResponse({ bookTitle, highlightCount, noteCount });
  }
});
