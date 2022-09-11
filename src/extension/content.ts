import { getElementByXpath } from "./util";
import type { BookInfo, LibraryInfo, NotebookInfo } from "./interface";
import type { Presence } from "discord-rpc";

export const parseLibrary = (): LibraryInfo => {
  var viewing: LibraryInfo["viewing"] = "all";
  if (document.URL.includes("EBOOK")) viewing = "books";
  else if (document.URL.includes("COMIC")) viewing = "comics";
  else if (document.URL.includes("SAMPLE")) viewing = "samples";

  return { viewing };
};

export const parseNotebook = (): NotebookInfo => {
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
  return { bookTitle, highlightCount, noteCount };
};

export const parseBook = (): BookInfo => {
  const bookTitle =
    document.body.getElementsByClassName("title-default")[0].textContent;
  const footerTitle =
    document.body.getElementsByClassName("footer-title")[0].textContent;
  const pageInfoList = footerTitle.match(/\d+/g);
  const currentPage = parseInt(pageInfoList[0]);
  const totalPages = parseInt(pageInfoList[1]);

  return { bookTitle, currentPage, totalPages };
};

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  var activity: Presence;

  activity = {
    largeImageKey: "kindle",
    largeImageText: "Kindle",
    instance: false,
  };

  if (msg.location === "library") {
    activity.details = "Browsing library";

    activity.state = "Viewing";
    const libraryInfo = parseLibrary();
    if (libraryInfo.viewing === "books") {
      activity.state += " books ";
    } else if (libraryInfo.viewing === "comics") {
      activity.state += " comics ";
    } else if (libraryInfo.viewing === "samples") {
      activity.state += " samples ";
    } else {
      activity.state += " all books";
    }
  } else if (msg.location === "notebook") {
    const notebookInfo = parseNotebook();

    activity.details = "Viewing notebook";

    activity.state = notebookInfo.bookTitle;
  } else if (msg.location === "book") {
    const bookInfo = parseBook();

    activity.details = "Reading a book";

    if (bookInfo.currentPage && bookInfo.totalPages) {
      activity.details += ` | Page ${bookInfo.currentPage} of ${bookInfo.totalPages}`;
    }

    if (bookInfo.bookTitle) {
      activity.state = bookInfo.bookTitle;
    }
  }
  sendResponse(activity);
});
