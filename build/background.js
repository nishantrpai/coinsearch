chrome&&chrome.runtime?(chrome.contextMenus.onClicked.addListener((function(e){if("checkCoinMarketCap"===e.menuItemId&&e.selectionText){const t=e.selectionText.toLowerCase().replace(/\s+/g,"-");chrome.tabs.create({url:`https://coinmarketcap.com/currencies/${t}`})}else if("checkXTwitter"===e.menuItemId&&e.selectionText){const t=encodeURIComponent(e.selectionText);chrome.tabs.create({url:`https://x.com/search?q=$${t}&src=typed_query&f=top`})}else console.log("Standard context menu item clicked.")})),chrome.runtime.onInstalled.addListener((function(){chrome.contextMenus.create({id:"checkCoinMarketCap",title:"Check '%s' on CoinMarketCap",contexts:["all"]}),chrome.contextMenus.create({id:"checkXTwitter",title:"Check '%s' on X (Twitter)",contexts:["all"]})}))):console.error("Chrome runtime is not available. This script may be running in an unsupported context.");