import { getKindleLocation, isKindleStateEqual } from './util';
import type {
  KindleState,
} from "./type";
export {};

var currentState: KindleState | undefined;
var clearFlag = false;

const fetchState = (state: KindleState | undefined) => {

  if (state === undefined) {
    clearActivity(true);
  }

  const payload = JSON.stringify(state);

  const payloadSize = payload.length.toString();

  console.debug(payload);

  try {
    fetch("http://localhost:1232/", {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Length": payloadSize },
      body: payload,
    });
  } catch (error) {
    console.error(`Error updating activity for payload: ${payload}`);
    console.error(error);
  }
};

const updateActivity = () => {
  chrome.tabs.query({}, function (tabs) {
    const allKindleTabs = tabs.filter((tab) =>
      tab.url.includes("read.amazon.com")
    );

    if (allKindleTabs.length === 0) {
      clearActivity(false);
      return;
    }

    const tabConditions = [
        (tab) => tab.active,
        (tab) => tab.url.includes("asin"),
        (tab) => tab.url.includes("manga"),
    ];

    const kindleTab = allKindleTabs.find((tab) => 
        tabConditions.some((condition) => condition(tab))
    ) || allKindleTabs[0];

    const location = getKindleLocation(kindleTab.url);

    chrome.tabs.sendMessage(
      kindleTab.id,
      { location: location },
      (response) => {
        if (isKindleStateEqual(response, currentState)) return;
        currentState = response;
        fetchState(currentState);
        clearFlag = false;
      }
    );
  });
};

const clearActivity = (force:boolean) => {
  if (clearFlag && !force) return;
  clearFlag = true;
    fetch("http://localhost:1232/", {
      method: "DELETE",
      mode: "cors",
    });
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab === undefined) return;
  updateActivity();
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  updateActivity();
});

setInterval(() => {
  updateActivity();
}, 5000);
