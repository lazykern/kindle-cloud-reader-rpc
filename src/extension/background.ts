export {};
import type { Presence } from "discord-rpc";
import { getKindleLocation, isPresenceEqual } from "./util";

var currentActivity: Presence | undefined;


const fetchActivity = (activity: Presence | undefined) => {

  if (activity === undefined) {
    fetch("http://localhost:1231/", {
      method: "DELETE",
      mode: "cors",
    });
  }
  const payload = JSON.stringify(activity);

  const payloadSize = payload.length.toString();

  console.debug(payload);

  try {
    fetch("http://localhost:1231/", {
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
      return undefined;
    }

    const kindleTab =
      allKindleTabs.find((tab) => tab.active) ||
      allKindleTabs.find((tab) => tab.url.includes("asin")) ||
      allKindleTabs[0];

    const location = getKindleLocation(kindleTab.url);

    chrome.tabs.sendMessage(
      kindleTab.id,
      { location: location },
      (response) => {
        if (isPresenceEqual(response, currentActivity))  return;
        currentActivity = response;
        fetchActivity(currentActivity);
      }
    );
  });
};

setInterval(() => {
  updateActivity();
}, 5000);
