
import type { KindleActivity } from "./interfaces";

export {};

let activity: KindleActivity | undefined;

const updateActivity = () => { chrome.tabs.query({}, function (tabs) {
    const allKindleTabs = tabs.filter((tab) =>
      tab.url.includes("read.amazon.com")
    );

    if (allKindleTabs.length === 0) {
      activity = undefined;
      return;
    }

    const kindleTab =
      allKindleTabs.find((tab) => tab.active) ||
      allKindleTabs.find((tab) => tab.url.includes("asin")) ||
      allKindleTabs[0];
    var text:string;

    if (kindleTab.url.includes("asin")) {
      activity = { location: "book" };
    } else if (kindleTab.url.includes("kindle-library")) {
      activity = { location: "library" };
    } else if (kindleTab.url.includes("notebook")) {
      activity = { location: "notebook" };
    } 

    chrome.tabs.sendMessage(
      kindleTab.id,
      {location: activity.location },
      (response) => {
        activity = { ...response, ...activity };
      }
    );
  });
};

setInterval(() => {
  updateActivity();

  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activity),
  });

}, 1000);
