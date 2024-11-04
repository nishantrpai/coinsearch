// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Check if chrome.runtime is available
if (chrome && chrome.runtime) {
  // A generic onclick callback function.
  chrome.contextMenus.onClicked.addListener(genericOnClick);

  // A generic onclick callback function.
  function genericOnClick(info) {
    if (info.menuItemId === "checkCoinMarketCap" && info.selectionText) {
      const word = info.selectionText.toLowerCase().replace(/\s+/g, '-');
      chrome.tabs.create({ url: `https://coinmarketcap.com/currencies/${word}` });
    } else if (info.menuItemId === "checkXTwitter" && info.selectionText) {
      const word = encodeURIComponent(info.selectionText);
      chrome.tabs.create({ url: `https://x.com/search?q=$${word}&src=typed_query&f=top` });
    } else if (info.menuItemId === "checkDexScreener" && info.selectionText) {
      const word = encodeURIComponent(info.selectionText);
      chrome.tabs.create({ url: `https://dexscreener.com/search?q=${word}` });
    } else {
      console.log('Standard context menu item clicked.');
    }
  }

  chrome.runtime.onInstalled.addListener(function () {
    // Create context menu items
    chrome.contextMenus.create({
      id: "checkCoinMarketCap",
      title: "Check '%s' on CoinMarketCap",
      contexts: ["all"]
    });

    chrome.contextMenus.create({
      id: "checkXTwitter",
      title: "Check '%s' on X (Twitter)",
      contexts: ["all"]
    });

    chrome.contextMenus.create({
      id: "checkDexScreener",
      title: "Check '%s' on DexScreener",
      contexts: ["all"]
    });
  });
} else {
  console.error('Chrome runtime is not available. This script may be running in an unsupported context.');
}