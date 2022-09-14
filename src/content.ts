import { getElementByXpath } from "./util";
import type { BookState, LibraryState, NotebookState } from "./type";

export const getLibraryState = (): LibraryState => {
  var view: LibraryState["view"] = "all";
  const url = new URL(document.URL);
  const resourceType = url.searchParams.get("resourceType")
  if (resourceType === "EBOOK") {
    view = "books";
  } else if (resourceType === "COMICS") {
    view = "comics";
  } else if (resourceType === "EBOOK_SAMPLE") {
    view = "samples";
  }

  return { location: "library", view };
};

export const getNotebookState = (): NotebookState => {
  const bookTitle = getElementByXpath(
    '//*[@id="annotation-scroller"]/div/div[1]/div[2]/h3'
  ).textContent;
  const highlightCountText = getElementByXpath(
    '//*[@id="kp-notebook-highlights-count"]'
  ).textContent;
  const noteCountText = getElementByXpath(
    '//*[@id="kp-notebook-notes-count"]'
  ).textContent;

  const highlightCount =
    highlightCountText === "--" ? undefined : parseInt(highlightCountText);
  const noteCount =
    noteCountText === "--" ? undefined : parseInt(noteCountText);

  return { location: "notebook", bookTitle, highlightCount, noteCount };
};

export const getBookState = (): BookState => {
  const bookTitle =
    document.body.getElementsByClassName("title-default")[0].textContent;
  const footerTitle =
    document.body.getElementsByClassName("footer-title")[0].textContent;
  const pageInfoList = footerTitle.match(/\d+/g);
  const currentPage = parseInt(pageInfoList[0]);
  const totalPages = parseInt(pageInfoList[1]);

  return { location: "book", bookTitle, currentPage, totalPages };
};

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.location === "library") {
    sendResponse(getLibraryState());
  } else if (msg.location === "notebook") {
    sendResponse(getNotebookState());
  } else if (msg.location === "book") {
    sendResponse(getBookState());
  }
});
