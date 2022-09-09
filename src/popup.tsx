import React from "react";
import { useEffect, useState } from "react";

function IndexPopup() {
  const [data, setData] = useState("");

  const [currentUrl, setCurrentUrl] = useState("");

  const updateCurrentUrl: () => Promise<void> = async (): Promise<void> => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    setCurrentUrl(tab.url);
  };

  useEffect(() => {
    updateCurrentUrl();
  }, [currentUrl]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
      }}
    >
      <a>omg</a>
    </div>
  );
}

export default IndexPopup;
