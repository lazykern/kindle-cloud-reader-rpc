import pkg from "body-parser";
import { Client, Presence } from "discord-rpc";
import express from "express";
import type { KindleActivity } from "~interfaces";

const { json, urlencoded } = pkg;

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

const clientId = "1017128628066209813";
const rpc = new Client({ transport: "ipc" });

const startTimestamp = new Date();

const updatePresence = (
  client: Client,
  activity: KindleActivity | undefined
) => {
  console.log(activity);
  if (activity === undefined || Object.keys(activity).length === 0) {
    client.clearActivity();
    return;
  }

  var presence: Presence = {
    largeImageKey: "kindle",
    largeImageText: "Kindle",
    startTimestamp: startTimestamp,
    instance: false,
  };

  if (activity.location == "library") {
    presence.details = "Browsing library";
  } else if (activity.location == "notebook") {
    presence.details = "Browsing Notes and Highlights";

    if (activity.bookTitle) {
      presence.state = activity.bookTitle;
    }
  } else if (activity.location == "book") {
    presence.details = "Reading a book";

    if (activity.currentPage && activity.totalPages) {
      presence.details += ` | Page ${activity.currentPage}/${activity.totalPages}`;
    }

    if (activity.bookTitle) {
      presence.state = activity.bookTitle;
    }
  }

  client.setActivity(presence);
};

rpc.on("ready", () => {
  setInterval(async () => {
    console.log("Updating presence");
    app.post("/", (req, res) => {
      updatePresence(rpc, req.body);
    });
  }, 5000);

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});
rpc.login({ clientId }).catch(console.error);
