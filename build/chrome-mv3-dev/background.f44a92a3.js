// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"i0mOg":[function(require,module,exports) {
"use strict";
var HMR_HOST = "localhost";
var HMR_PORT = "1815";
/* global chrome, browser, addEventListener, fetch, Response, HMR_HOST, HMR_PORT */ var env = typeof chrome == "undefined" ? browser : chrome;
env.runtime.onMessage.addListener(function(msg) {
    if (msg.__parcel_hmr_reload__) env.runtime.reload();
});
if (env.runtime.getManifest().manifest_version == 3) {
    var proxyLoc = env.runtime.getURL("/__parcel_hmr_proxy__?url=");
    addEventListener("fetch", function(evt) {
        var url = evt.request.url;
        if (url.startsWith(proxyLoc)) {
            url = new URL(decodeURIComponent(url.slice(proxyLoc.length)));
            if (url.hostname == HMR_HOST && url.port == HMR_PORT) evt.respondWith(fetch(url).then(function(res) {
                return new Response(res.body, {
                    headers: {
                        "Content-Type": res.headers.get("Content-Type")
                    }
                });
            }));
        }
    });
}

},{}],"kuZRA":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = 1815;
var HMR_SECURE = false;
var HMR_ENV_HASH = "210281caf8d4160d";
module.bundle.HMR_BUNDLE_ID = "a20dd8eef44a92a3";
var h = function(t, e) {
    return h = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(n, o) {
        n.__proto__ = o;
    } || function(n, o) {
        for(var r in o)o.hasOwnProperty(r) && (n[r] = o[r]);
    }, h(t, e);
};
function d(t, e) {
    h(t, e);
    function n() {
        this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n);
}
function v(t) {
    var e = typeof Symbol == "function" && t[Symbol.iterator], n = 0;
    return e ? e.call(t) : {
        next: function() {
            return t && n >= t.length && (t = void 0), {
                value: t && t[n++],
                done: !t
            };
        }
    };
}
function E(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) return t;
    var o = n.call(t), r, i = [], s;
    try {
        for(; (e === void 0 || e-- > 0) && !(r = o.next()).done;)i.push(r.value);
    } catch (u) {
        s = {
            error: u
        };
    } finally{
        try {
            r && !r.done && (n = o.return) && n.call(o);
        } finally{
            if (s) throw s.error;
        }
    }
    return i;
}
function w() {
    for(var t = [], e = 0; e < arguments.length; e++)t = t.concat(E(arguments[e]));
    return t;
}
var y = function() {
    function t(e, n) {
        this.target = n, this.type = e;
    }
    return t;
}(), O = function(t) {
    d(e, t);
    function e(n, o) {
        var r = t.call(this, "error", o) || this;
        return r.message = n.message, r.error = n, r;
    }
    return e;
}(y), C = function(t) {
    d(e, t);
    function e(n, o, r) {
        n === void 0 && (n = 1e3), o === void 0 && (o = "");
        var i = t.call(this, "close", r) || this;
        return i.wasClean = !0, i.code = n, i.reason = o, i;
    }
    return e;
}(y);
var T = function() {
    if (typeof WebSocket < "u") return WebSocket;
}, L = function(t) {
    return typeof t < "u" && !!t && t.CLOSING === 2;
}, a = {
    maxReconnectionDelay: 1e4,
    minReconnectionDelay: 1e3 + Math.random() * 4e3,
    minUptime: 5e3,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4e3,
    maxRetries: 1 / 0,
    maxEnqueuedMessages: 1 / 0,
    startClosed: !1,
    debug: !1
}, S = function() {
    function t(e, n, o) {
        var r = this;
        o === void 0 && (o = {}), this._listeners = {
            error: [],
            message: [],
            open: [],
            close: []
        }, this._retryCount = -1, this._shouldReconnect = !0, this._connectLock = !1, this._binaryType = "blob", this._closeCalled = !1, this._messageQueue = [], this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this._handleOpen = function(i) {
            r._debug("open event");
            var s = r._options.minUptime, u = s === void 0 ? a.minUptime : s;
            clearTimeout(r._connectTimeout), r._uptimeTimeout = setTimeout(function() {
                return r._acceptOpen();
            }, u), r._ws.binaryType = r._binaryType, r._messageQueue.forEach(function(c) {
                return r._ws.send(c);
            }), r._messageQueue = [], r.onopen && r.onopen(i), r._listeners.open.forEach(function(c) {
                return r._callEventListener(i, c);
            });
        }, this._handleMessage = function(i) {
            r._debug("message event"), r.onmessage && r.onmessage(i), r._listeners.message.forEach(function(s) {
                return r._callEventListener(i, s);
            });
        }, this._handleError = function(i) {
            r._debug("error event", i.message), r._disconnect(void 0, i.message === "TIMEOUT" ? "timeout" : void 0), r.onerror && r.onerror(i), r._debug("exec error listeners"), r._listeners.error.forEach(function(s) {
                return r._callEventListener(i, s);
            }), r._connect();
        }, this._handleClose = function(i) {
            r._debug("close event"), r._clearTimeouts(), r._shouldReconnect && r._connect(), r.onclose && r.onclose(i), r._listeners.close.forEach(function(s) {
                return r._callEventListener(i, s);
            });
        }, this._url = e, this._protocols = n, this._options = o, this._options.startClosed && (this._shouldReconnect = !1), this._connect();
    }
    return Object.defineProperty(t, "CONNECTING", {
        get: function() {
            return 0;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "OPEN", {
        get: function() {
            return 1;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "CLOSING", {
        get: function() {
            return 2;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "CLOSED", {
        get: function() {
            return 3;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "CONNECTING", {
        get: function() {
            return t.CONNECTING;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "OPEN", {
        get: function() {
            return t.OPEN;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "CLOSING", {
        get: function() {
            return t.CLOSING;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "CLOSED", {
        get: function() {
            return t.CLOSED;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "binaryType", {
        get: function() {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function(e) {
            this._binaryType = e, this._ws && (this._ws.binaryType = e);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "retryCount", {
        get: function() {
            return Math.max(this._retryCount, 0);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bufferedAmount", {
        get: function() {
            var e = this._messageQueue.reduce(function(n, o) {
                return typeof o == "string" ? n += o.length : o instanceof Blob ? n += o.size : n += o.byteLength, n;
            }, 0);
            return e + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "extensions", {
        get: function() {
            return this._ws ? this._ws.extensions : "";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "protocol", {
        get: function() {
            return this._ws ? this._ws.protocol : "";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "readyState", {
        get: function() {
            return this._ws ? this._ws.readyState : this._options.startClosed ? t.CLOSED : t.CONNECTING;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "url", {
        get: function() {
            return this._ws ? this._ws.url : "";
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.close = function(e, n) {
        if (e === void 0 && (e = 1e3), this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), !this._ws) {
            this._debug("close enqueued: no ws instance");
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug("close: already closed");
            return;
        }
        this._ws.close(e, n);
    }, t.prototype.reconnect = function(e, n) {
        this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, !this._ws || this._ws.readyState === this.CLOSED ? this._connect() : (this._disconnect(e, n), this._connect());
    }, t.prototype.send = function(e) {
        if (this._ws && this._ws.readyState === this.OPEN) this._debug("send", e), this._ws.send(e);
        else {
            var n = this._options.maxEnqueuedMessages, o = n === void 0 ? a.maxEnqueuedMessages : n;
            this._messageQueue.length < o && (this._debug("enqueue", e), this._messageQueue.push(e));
        }
    }, t.prototype.addEventListener = function(e, n) {
        this._listeners[e] && this._listeners[e].push(n);
    }, t.prototype.dispatchEvent = function(e) {
        var n, o, r = this._listeners[e.type];
        if (r) try {
            for(var i = v(r), s = i.next(); !s.done; s = i.next()){
                var u = s.value;
                this._callEventListener(e, u);
            }
        } catch (c) {
            n = {
                error: c
            };
        } finally{
            try {
                s && !s.done && (o = i.return) && o.call(i);
            } finally{
                if (n) throw n.error;
            }
        }
        return !0;
    }, t.prototype.removeEventListener = function(e, n) {
        this._listeners[e] && (this._listeners[e] = this._listeners[e].filter(function(o) {
            return o !== n;
        }));
    }, t.prototype._debug = function() {
        for(var e = [], n = 0; n < arguments.length; n++)e[n] = arguments[n];
        this._options.debug && console.log.apply(console, w([
            "RWS>"
        ], e));
    }, t.prototype._getNextDelay = function() {
        var e = this._options, n = e.reconnectionDelayGrowFactor, o = n === void 0 ? a.reconnectionDelayGrowFactor : n, r = e.minReconnectionDelay, i = r === void 0 ? a.minReconnectionDelay : r, s = e.maxReconnectionDelay, u = s === void 0 ? a.maxReconnectionDelay : s, c = 0;
        return this._retryCount > 0 && (c = i * Math.pow(o, this._retryCount - 1), c > u && (c = u)), this._debug("next delay", c), c;
    }, t.prototype._wait = function() {
        var e = this;
        return new Promise(function(n) {
            setTimeout(n, e._getNextDelay());
        });
    }, t.prototype._getNextUrl = function(e) {
        if (typeof e == "string") return Promise.resolve(e);
        if (typeof e == "function") {
            var n = e();
            if (typeof n == "string") return Promise.resolve(n);
            if (n.then) return n;
        }
        throw Error("Invalid URL");
    }, t.prototype._connect = function() {
        var e = this;
        if (!(this._connectLock || !this._shouldReconnect)) {
            this._connectLock = !0;
            var n = this._options, o = n.maxRetries, r = o === void 0 ? a.maxRetries : o, i = n.connectionTimeout, s = i === void 0 ? a.connectionTimeout : i, u = n.WebSocket, c = u === void 0 ? T() : u;
            if (this._retryCount >= r) {
                this._debug("max retries reached", this._retryCount, ">=", r);
                return;
            }
            if (this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), !L(c)) throw Error("No valid WebSocket class provided");
            this._wait().then(function() {
                return e._getNextUrl(e._url);
            }).then(function(f) {
                e._closeCalled || (e._debug("connect", {
                    url: f,
                    protocols: e._protocols
                }), e._ws = e._protocols ? new c(f, e._protocols) : new c(f), e._ws.binaryType = e._binaryType, e._connectLock = !1, e._addListeners(), e._connectTimeout = setTimeout(function() {
                    return e._handleTimeout();
                }, s));
            });
        }
    }, t.prototype._handleTimeout = function() {
        this._debug("timeout event"), this._handleError(new O(Error("TIMEOUT"), this));
    }, t.prototype._disconnect = function(e, n) {
        if (e === void 0 && (e = 1e3), this._clearTimeouts(), !!this._ws) {
            this._removeListeners();
            try {
                this._ws.close(e, n), this._handleClose(new C(e, n, this));
            } catch  {}
        }
    }, t.prototype._acceptOpen = function() {
        this._debug("accept open"), this._retryCount = 0;
    }, t.prototype._callEventListener = function(e, n) {
        "handleEvent" in n ? n.handleEvent(e) : n(e);
    }, t.prototype._removeListeners = function() {
        !this._ws || (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError));
    }, t.prototype._addListeners = function() {
        !this._ws || (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError));
    }, t.prototype._clearTimeouts = function() {
        clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
    }, t;
}(), m = S;
function R() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function x() {
    return HMR_PORT || location.port;
}
var g = module.bundle.parent;
(!g || !g.isParcelRequire) && typeof WebSocket < "u" && (_ = R(), p = x(), b = HMR_SECURE || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(_) ? "wss" : "ws", l = new m(b + "://" + _ + (p ? ":" + p : "") + "/"), chrome.runtime.lastError && location.reload(), l.onmessage = async function(t) {
    if (!!chrome.runtime.id) {
        var e = JSON.parse(t.data);
        if (e.type === "update" && (e.assets.filter((n)=>n.type === "json").length > 0 ? chrome && chrome.runtime && typeof chrome.runtime.reload == "function" ? chrome.runtime.reload() : (chrome.runtime.sendMessage({
            __parcel_hmr_reload__: !0
        }), location.reload()) : !!location && typeof location.reload == "function" ? location.reload() : chrome.runtime.reload()), e.type === "error") for (let n of e.diagnostics.ansi){
            let o = n.codeframe ? n.codeframe : n.stack;
            console.error("\uD83D\uDFE1 [plasmo/parcel-runtime]: " + n.message + `
` + o + `

` + n.hints.join(`
`));
        }
    }
}, l.onerror = function(t) {
    console.error(t.message);
}, l.onclose = function(t) {
    console.warn("\uD83D\uDFE1 [plasmo/parcel-runtime]: Connection to the HMR server was lost, trying to reconnect...");
});
var _, p, b, l; /*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */  /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ 

},{}],"cOfSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let activity;
const updateActivity = ()=>{
    chrome.tabs.query({}, function(tabs) {
        const allKindleTabs = tabs.filter((tab)=>tab.url.includes("read.amazon.com"));
        if (allKindleTabs.length === 0) {
            activity = undefined;
            return;
        }
        const kindleTab = allKindleTabs.find((tab)=>tab.active) || allKindleTabs.find((tab)=>tab.url.includes("asin")) || allKindleTabs[0];
        var text;
        if (kindleTab.url.includes("asin")) activity = {
            location: "book"
        };
        else if (kindleTab.url.includes("kindle-library")) activity = {
            location: "library"
        };
        else if (kindleTab.url.includes("notebook")) activity = {
            location: "notebook"
        };
        chrome.tabs.sendMessage(kindleTab.id, {
            location: activity.location
        }, (response)=>{
            activity = {
                ...response,
                ...activity
            };
        });
    });
};
setInterval(()=>{
    updateActivity();
    console.log(activity);
    fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activity)
    });
}, 5000);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hCtEe"}],"hCtEe":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["i0mOg","kuZRA","cOfSa"], "cOfSa", "parcelRequirea654")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsU0FBUyxDQUFDLEdBQUU7UUFBQyxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUM7S0FBQztJQUFBLENBQUMsQ0FBQyxTQUFTLEdBQUMsQ0FBQyxLQUFHLElBQUksR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUEsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFBLEFBQUM7Q0FBQztBQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUFDLElBQUksQ0FBQyxHQUFDLE9BQU8sTUFBTSxJQUFFLFVBQVUsSUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEFBQUM7SUFBQSxPQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDO1FBQUMsSUFBSSxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBRyxDQUFBLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQSxBQUFDLEVBQUM7Z0JBQUMsS0FBSyxFQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUFDLENBQUE7U0FBQztLQUFDLENBQUE7Q0FBQztBQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLENBQUMsR0FBQyxPQUFPLE1BQU0sSUFBRSxVQUFVLElBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQUFBQztJQUFBLElBQUcsQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFBQSxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsQUFBQztJQUFBLElBQUc7UUFBQyxNQUFLLEFBQUMsQ0FBQSxDQUFDLEtBQUcsS0FBSyxDQUFDLElBQUUsQ0FBQyxFQUFFLEdBQUUsQ0FBQyxDQUFBLElBQUcsQ0FBQyxBQUFDLENBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FBQyxDQUFBLE9BQU0sQ0FBQyxFQUFDO1FBQUMsQ0FBQyxHQUFDO1lBQUMsS0FBSyxFQUFDLENBQUM7U0FBQztLQUFDLFFBQU87UUFBQyxJQUFHO1lBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRyxDQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FBQyxRQUFPO1lBQUMsSUFBRyxDQUFDLEVBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFBO1NBQUM7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUM7QUFBQSxTQUFTLENBQUMsR0FBRTtJQUFDLElBQUksSUFBSSxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxPQUFPLENBQUMsQ0FBQTtDQUFDO0FBQUEsSUFBSSxDQUFDLEdBQUMsV0FBVTtJQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQUFBQztRQUFBLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQTtLQUFDO0lBQUEsT0FBTyxDQUFDLENBQUE7Q0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsSUFBRyxDQUFBLENBQUMsR0FBQyxHQUFHLENBQUEsQUFBQyxFQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsSUFBRyxDQUFBLENBQUMsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDO1FBQUEsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQUFBQztRQUFBLE9BQU8sQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUE7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUMsQ0FBQyxDQUFDLENBQUMsQUFBQztBQUFBLElBQUksQ0FBQyxHQUFDLFdBQVU7SUFBQyxJQUFHLE9BQU8sU0FBUyxHQUFDLEdBQUcsRUFBQyxPQUFPLFNBQVMsQ0FBQTtDQUFDLEVBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxFQUFDO0lBQUMsT0FBTyxPQUFPLENBQUMsR0FB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QyxDQUFDLEVBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUcsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7S0FBQztJQUFBLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLFlBQVksRUFBQztRQUFDLEdBQUcsRUFBQyxXQUFVO1lBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFBO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsTUFBTSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQztRQUFDLEdBQUcsRUFBQyxXQUFVO1lBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFBO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQTtTQUFDO1FBQUMsR0FBRyxFQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsSUFBRyxDQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQSxBQUFDO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7Z0JBQUMsT0FBTyxPQUFPLENBQUMsSUFBRSxRQUFRLEdBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxZQUFZLElBQUksR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLElBQUksR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7YUFBQyxFQUFDLENBQUMsQ0FBQyxBQUFDO1lBQUEsT0FBTyxDQUFDLEdBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFVLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUcsQ0FBQyxLQUFHLEtBQUssQ0FBQyxJQUFHLENBQUEsQ0FBQyxHQUFDLEdBQUcsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUFBLE9BQU07U0FBQztRQUFBLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUFBLE9BQU07U0FBQztRQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRSxDQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQSxBQUFDO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxTQUFTLENBQUMsRUFBQztRQUFDLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBRyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUk7WUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFDLENBQUMsR0FBQyxDQUFDLEtBQUcsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLG1CQUFtQixHQUFDLENBQUMsQUFBQztZQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRyxDQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUM7U0FBQztLQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxBQUFDO1FBQUEsSUFBRyxDQUFDLEVBQUMsSUFBRztZQUFDLElBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQUFBQztnQkFBQSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUFDO1NBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztZQUFDLENBQUMsR0FBQztnQkFBQyxLQUFLLEVBQUMsQ0FBQzthQUFDO1NBQUMsUUFBTztZQUFDLElBQUc7Z0JBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRyxDQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFBQyxRQUFPO2dCQUFDLElBQUcsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQTthQUFDO1NBQUM7UUFBQSxPQUFNLENBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQUMsT0FBTyxDQUFDLEtBQUcsQ0FBQyxDQUFBO1NBQUMsQ0FBQyxDQUFBLEFBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFdBQVU7UUFBQyxJQUFJLElBQUksQ0FBQyxHQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTTtTQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFDLFdBQVU7UUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsMkJBQTJCLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsMkJBQTJCLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEFBQUM7UUFBQSxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxJQUFHLENBQUEsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLElBQUcsQ0FBQSxDQUFDLEdBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxXQUFVO1FBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxBQUFDO1FBQUEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztZQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxTQUFTLENBQUMsRUFBQztRQUFDLElBQUcsT0FBTyxDQUFDLElBQUUsUUFBUSxFQUFDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFBLElBQUcsT0FBTyxDQUFDLElBQUUsVUFBVSxFQUFDO1lBQUMsSUFBSSxDQUFDLEdBQUMsQ0FB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QUMsR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQUFBQztBQUFDLENBQUEsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFBLElBQUcsT0FBTyxTQUFTLEdBQUMsR0FBRyxJQUFHLENBQUEsQ0FBQyxHQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsVUFBVSxJQUFFLFFBQVEsQ0FBQyxRQUFRLEtBQUcsUUFBUSxJQUFFLENBQUMsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsS0FBSyxHQUFDLENBQUMsR0FBRSxDQUFBLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQSxHQUFFLEdBQUcsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLGVBQWUsQ0FBQyxFQUFDO0lBQUMsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUM7UUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQUFBQztRQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksS0FBRyxRQUFRLElBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsR0FBRSxDQUFDLENBQUMsSUFBSSxLQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUMsTUFBTSxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBRSxVQUFVLEdBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRSxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQUMs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LENBQUMsQ0FBQzthQUNwQjtTQUNGLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDO0NBQ2IsQ0FBQztBQUVGLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7UUFDcEMsVUFBVSxFQUFFLElBQUk7UUFDaEIsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDLENBQUM7Q0FDSixDQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLXdlYmV4dGVuc2lvbi9saWIvcnVudGltZS1iOWI1ZjEwY2E1YmQ3MzRiLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYTdjNzMzYTE4NzE0ZGRkYS5qcyIsInNyYy9iYWNrZ3JvdW5kLnRzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAnMTgxNSc7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBjaHJvbWUsIGJyb3dzZXIsIGFkZEV2ZW50TGlzdGVuZXIsIGZldGNoLCBSZXNwb25zZSwgSE1SX0hPU1QsIEhNUl9QT1JUICovXG52YXIgZW52ID0gdHlwZW9mIGNocm9tZSA9PSAndW5kZWZpbmVkJyA/IGJyb3dzZXIgOiBjaHJvbWU7XG5lbnYucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG1zZykge1xuICBpZiAobXNnLl9fcGFyY2VsX2htcl9yZWxvYWRfXykge1xuICAgIGVudi5ydW50aW1lLnJlbG9hZCgpO1xuICB9XG59KTtcblxuaWYgKGVudi5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzKSB7XG4gIHZhciBwcm94eUxvYyA9IGVudi5ydW50aW1lLmdldFVSTCgnL19fcGFyY2VsX2htcl9wcm94eV9fP3VybD0nKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHVybCA9IGV2dC5yZXF1ZXN0LnVybDtcblxuICAgIGlmICh1cmwuc3RhcnRzV2l0aChwcm94eUxvYykpIHtcbiAgICAgIHVybCA9IG5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KHVybC5zbGljZShwcm94eUxvYy5sZW5ndGgpKSk7XG5cbiAgICAgIGlmICh1cmwuaG9zdG5hbWUgPT0gSE1SX0hPU1QgJiYgdXJsLnBvcnQgPT0gSE1SX1BPUlQpIHtcbiAgICAgICAgZXZ0LnJlc3BvbmRXaXRoKGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShyZXMuYm9keSwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0iLCJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IDE4MTU7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCIyMTAyODFjYWY4ZDQxNjBkXCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCJhMjBkZDhlZWY0NGE5MmEzXCI7dmFyIGg9ZnVuY3Rpb24odCxlKXtyZXR1cm4gaD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24obixvKXtuLl9fcHJvdG9fXz1vfXx8ZnVuY3Rpb24obixvKXtmb3IodmFyIHIgaW4gbylvLmhhc093blByb3BlcnR5KHIpJiYobltyXT1vW3JdKX0saCh0LGUpfTtmdW5jdGlvbiBkKHQsZSl7aCh0LGUpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPXR9dC5wcm90b3R5cGU9ZT09PW51bGw/T2JqZWN0LmNyZWF0ZShlKToobi5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IG4pfWZ1bmN0aW9uIHYodCl7dmFyIGU9dHlwZW9mIFN5bWJvbD09XCJmdW5jdGlvblwiJiZ0W1N5bWJvbC5pdGVyYXRvcl0sbj0wO3JldHVybiBlP2UuY2FsbCh0KTp7bmV4dDpmdW5jdGlvbigpe3JldHVybiB0JiZuPj10Lmxlbmd0aCYmKHQ9dm9pZCAwKSx7dmFsdWU6dCYmdFtuKytdLGRvbmU6IXR9fX19ZnVuY3Rpb24gRSh0LGUpe3ZhciBuPXR5cGVvZiBTeW1ib2w9PVwiZnVuY3Rpb25cIiYmdFtTeW1ib2wuaXRlcmF0b3JdO2lmKCFuKXJldHVybiB0O3ZhciBvPW4uY2FsbCh0KSxyLGk9W10sczt0cnl7Zm9yKDsoZT09PXZvaWQgMHx8ZS0tID4wKSYmIShyPW8ubmV4dCgpKS5kb25lOylpLnB1c2goci52YWx1ZSl9Y2F0Y2godSl7cz17ZXJyb3I6dX19ZmluYWxseXt0cnl7ciYmIXIuZG9uZSYmKG49by5yZXR1cm4pJiZuLmNhbGwobyl9ZmluYWxseXtpZihzKXRocm93IHMuZXJyb3J9fXJldHVybiBpfWZ1bmN0aW9uIHcoKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdD10LmNvbmNhdChFKGFyZ3VtZW50c1tlXSkpO3JldHVybiB0fXZhciB5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLG4pe3RoaXMudGFyZ2V0PW4sdGhpcy50eXBlPWV9cmV0dXJuIHR9KCksTz1mdW5jdGlvbih0KXtkKGUsdCk7ZnVuY3Rpb24gZShuLG8pe3ZhciByPXQuY2FsbCh0aGlzLFwiZXJyb3JcIixvKXx8dGhpcztyZXR1cm4gci5tZXNzYWdlPW4ubWVzc2FnZSxyLmVycm9yPW4scn1yZXR1cm4gZX0oeSksQz1mdW5jdGlvbih0KXtkKGUsdCk7ZnVuY3Rpb24gZShuLG8scil7bj09PXZvaWQgMCYmKG49MWUzKSxvPT09dm9pZCAwJiYobz1cIlwiKTt2YXIgaT10LmNhbGwodGhpcyxcImNsb3NlXCIscil8fHRoaXM7cmV0dXJuIGkud2FzQ2xlYW49ITAsaS5jb2RlPW4saS5yZWFzb249byxpfXJldHVybiBlfSh5KTt2YXIgVD1mdW5jdGlvbigpe2lmKHR5cGVvZiBXZWJTb2NrZXQ8XCJ1XCIpcmV0dXJuIFdlYlNvY2tldH0sTD1mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHQ8XCJ1XCImJiEhdCYmdC5DTE9TSU5HPT09Mn0sYT17bWF4UmVjb25uZWN0aW9uRGVsYXk6MWU0LG1pblJlY29ubmVjdGlvbkRlbGF5OjFlMytNYXRoLnJhbmRvbSgpKjRlMyxtaW5VcHRpbWU6NWUzLHJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvcjoxLjMsY29ubmVjdGlvblRpbWVvdXQ6NGUzLG1heFJldHJpZXM6MS8wLG1heEVucXVldWVkTWVzc2FnZXM6MS8wLHN0YXJ0Q2xvc2VkOiExLGRlYnVnOiExfSxTPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLG4sbyl7dmFyIHI9dGhpcztvPT09dm9pZCAwJiYobz17fSksdGhpcy5fbGlzdGVuZXJzPXtlcnJvcjpbXSxtZXNzYWdlOltdLG9wZW46W10sY2xvc2U6W119LHRoaXMuX3JldHJ5Q291bnQ9LTEsdGhpcy5fc2hvdWxkUmVjb25uZWN0PSEwLHRoaXMuX2Nvbm5lY3RMb2NrPSExLHRoaXMuX2JpbmFyeVR5cGU9XCJibG9iXCIsdGhpcy5fY2xvc2VDYWxsZWQ9ITEsdGhpcy5fbWVzc2FnZVF1ZXVlPVtdLHRoaXMub25jbG9zZT1udWxsLHRoaXMub25lcnJvcj1udWxsLHRoaXMub25tZXNzYWdlPW51bGwsdGhpcy5vbm9wZW49bnVsbCx0aGlzLl9oYW5kbGVPcGVuPWZ1bmN0aW9uKGkpe3IuX2RlYnVnKFwib3BlbiBldmVudFwiKTt2YXIgcz1yLl9vcHRpb25zLm1pblVwdGltZSx1PXM9PT12b2lkIDA/YS5taW5VcHRpbWU6cztjbGVhclRpbWVvdXQoci5fY29ubmVjdFRpbWVvdXQpLHIuX3VwdGltZVRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiByLl9hY2NlcHRPcGVuKCl9LHUpLHIuX3dzLmJpbmFyeVR5cGU9ci5fYmluYXJ5VHlwZSxyLl9tZXNzYWdlUXVldWUuZm9yRWFjaChmdW5jdGlvbihjKXtyZXR1cm4gci5fd3Muc2VuZChjKX0pLHIuX21lc3NhZ2VRdWV1ZT1bXSxyLm9ub3BlbiYmci5vbm9wZW4oaSksci5fbGlzdGVuZXJzLm9wZW4uZm9yRWFjaChmdW5jdGlvbihjKXtyZXR1cm4gci5fY2FsbEV2ZW50TGlzdGVuZXIoaSxjKX0pfSx0aGlzLl9oYW5kbGVNZXNzYWdlPWZ1bmN0aW9uKGkpe3IuX2RlYnVnKFwibWVzc2FnZSBldmVudFwiKSxyLm9ubWVzc2FnZSYmci5vbm1lc3NhZ2UoaSksci5fbGlzdGVuZXJzLm1lc3NhZ2UuZm9yRWFjaChmdW5jdGlvbihzKXtyZXR1cm4gci5fY2FsbEV2ZW50TGlzdGVuZXIoaSxzKX0pfSx0aGlzLl9oYW5kbGVFcnJvcj1mdW5jdGlvbihpKXtyLl9kZWJ1ZyhcImVycm9yIGV2ZW50XCIsaS5tZXNzYWdlKSxyLl9kaXNjb25uZWN0KHZvaWQgMCxpLm1lc3NhZ2U9PT1cIlRJTUVPVVRcIj9cInRpbWVvdXRcIjp2b2lkIDApLHIub25lcnJvciYmci5vbmVycm9yKGkpLHIuX2RlYnVnKFwiZXhlYyBlcnJvciBsaXN0ZW5lcnNcIiksci5fbGlzdGVuZXJzLmVycm9yLmZvckVhY2goZnVuY3Rpb24ocyl7cmV0dXJuIHIuX2NhbGxFdmVudExpc3RlbmVyKGkscyl9KSxyLl9jb25uZWN0KCl9LHRoaXMuX2hhbmRsZUNsb3NlPWZ1bmN0aW9uKGkpe3IuX2RlYnVnKFwiY2xvc2UgZXZlbnRcIiksci5fY2xlYXJUaW1lb3V0cygpLHIuX3Nob3VsZFJlY29ubmVjdCYmci5fY29ubmVjdCgpLHIub25jbG9zZSYmci5vbmNsb3NlKGkpLHIuX2xpc3RlbmVycy5jbG9zZS5mb3JFYWNoKGZ1bmN0aW9uKHMpe3JldHVybiByLl9jYWxsRXZlbnRMaXN0ZW5lcihpLHMpfSl9LHRoaXMuX3VybD1lLHRoaXMuX3Byb3RvY29scz1uLHRoaXMuX29wdGlvbnM9byx0aGlzLl9vcHRpb25zLnN0YXJ0Q2xvc2VkJiYodGhpcy5fc2hvdWxkUmVjb25uZWN0PSExKSx0aGlzLl9jb25uZWN0KCl9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiQ09OTkVDVElOR1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gMH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIk9QRU5cIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDF9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJDTE9TSU5HXCIse2dldDpmdW5jdGlvbigpe3JldHVybiAyfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiQ0xPU0VEXCIse2dldDpmdW5jdGlvbigpe3JldHVybiAzfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIkNPTk5FQ1RJTkdcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuQ09OTkVDVElOR30sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJPUEVOXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0Lk9QRU59LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiQ0xPU0lOR1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdC5DTE9TSU5HfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIkNMT1NFRFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdC5DTE9TRUR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiYmluYXJ5VHlwZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd3M/dGhpcy5fd3MuYmluYXJ5VHlwZTp0aGlzLl9iaW5hcnlUeXBlfSxzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5fYmluYXJ5VHlwZT1lLHRoaXMuX3dzJiYodGhpcy5fd3MuYmluYXJ5VHlwZT1lKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJyZXRyeUNvdW50XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCh0aGlzLl9yZXRyeUNvdW50LDApfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImJ1ZmZlcmVkQW1vdW50XCIse2dldDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX21lc3NhZ2VRdWV1ZS5yZWR1Y2UoZnVuY3Rpb24obixvKXtyZXR1cm4gdHlwZW9mIG89PVwic3RyaW5nXCI/bis9by5sZW5ndGg6byBpbnN0YW5jZW9mIEJsb2I/bis9by5zaXplOm4rPW8uYnl0ZUxlbmd0aCxufSwwKTtyZXR1cm4gZSsodGhpcy5fd3M/dGhpcy5fd3MuYnVmZmVyZWRBbW91bnQ6MCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZXh0ZW5zaW9uc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd3M/dGhpcy5fd3MuZXh0ZW5zaW9uczpcIlwifSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInByb3RvY29sXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93cz90aGlzLl93cy5wcm90b2NvbDpcIlwifSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInJlYWR5U3RhdGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dzP3RoaXMuX3dzLnJlYWR5U3RhdGU6dGhpcy5fb3B0aW9ucy5zdGFydENsb3NlZD90LkNMT1NFRDp0LkNPTk5FQ1RJTkd9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwidXJsXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93cz90aGlzLl93cy51cmw6XCJcIn0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbihlLG4pe2lmKGU9PT12b2lkIDAmJihlPTFlMyksdGhpcy5fY2xvc2VDYWxsZWQ9ITAsdGhpcy5fc2hvdWxkUmVjb25uZWN0PSExLHRoaXMuX2NsZWFyVGltZW91dHMoKSwhdGhpcy5fd3Mpe3RoaXMuX2RlYnVnKFwiY2xvc2UgZW5xdWV1ZWQ6IG5vIHdzIGluc3RhbmNlXCIpO3JldHVybn1pZih0aGlzLl93cy5yZWFkeVN0YXRlPT09dGhpcy5DTE9TRUQpe3RoaXMuX2RlYnVnKFwiY2xvc2U6IGFscmVhZHkgY2xvc2VkXCIpO3JldHVybn10aGlzLl93cy5jbG9zZShlLG4pfSx0LnByb3RvdHlwZS5yZWNvbm5lY3Q9ZnVuY3Rpb24oZSxuKXt0aGlzLl9zaG91bGRSZWNvbm5lY3Q9ITAsdGhpcy5fY2xvc2VDYWxsZWQ9ITEsdGhpcy5fcmV0cnlDb3VudD0tMSwhdGhpcy5fd3N8fHRoaXMuX3dzLnJlYWR5U3RhdGU9PT10aGlzLkNMT1NFRD90aGlzLl9jb25uZWN0KCk6KHRoaXMuX2Rpc2Nvbm5lY3QoZSxuKSx0aGlzLl9jb25uZWN0KCkpfSx0LnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGUpe2lmKHRoaXMuX3dzJiZ0aGlzLl93cy5yZWFkeVN0YXRlPT09dGhpcy5PUEVOKXRoaXMuX2RlYnVnKFwic2VuZFwiLGUpLHRoaXMuX3dzLnNlbmQoZSk7ZWxzZXt2YXIgbj10aGlzLl9vcHRpb25zLm1heEVucXVldWVkTWVzc2FnZXMsbz1uPT09dm9pZCAwP2EubWF4RW5xdWV1ZWRNZXNzYWdlczpuO3RoaXMuX21lc3NhZ2VRdWV1ZS5sZW5ndGg8byYmKHRoaXMuX2RlYnVnKFwiZW5xdWV1ZVwiLGUpLHRoaXMuX21lc3NhZ2VRdWV1ZS5wdXNoKGUpKX19LHQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSxuKXt0aGlzLl9saXN0ZW5lcnNbZV0mJnRoaXMuX2xpc3RlbmVyc1tlXS5wdXNoKG4pfSx0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKGUpe3ZhciBuLG8scj10aGlzLl9saXN0ZW5lcnNbZS50eXBlXTtpZihyKXRyeXtmb3IodmFyIGk9dihyKSxzPWkubmV4dCgpOyFzLmRvbmU7cz1pLm5leHQoKSl7dmFyIHU9cy52YWx1ZTt0aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihlLHUpfX1jYXRjaChjKXtuPXtlcnJvcjpjfX1maW5hbGx5e3RyeXtzJiYhcy5kb25lJiYobz1pLnJldHVybikmJm8uY2FsbChpKX1maW5hbGx5e2lmKG4pdGhyb3cgbi5lcnJvcn19cmV0dXJuITB9LHQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSxuKXt0aGlzLl9saXN0ZW5lcnNbZV0mJih0aGlzLl9saXN0ZW5lcnNbZV09dGhpcy5fbGlzdGVuZXJzW2VdLmZpbHRlcihmdW5jdGlvbihvKXtyZXR1cm4gbyE9PW59KSl9LHQucHJvdG90eXBlLl9kZWJ1Zz1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXSxuPTA7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW25dPWFyZ3VtZW50c1tuXTt0aGlzLl9vcHRpb25zLmRlYnVnJiZjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLHcoW1wiUldTPlwiXSxlKSl9LHQucHJvdG90eXBlLl9nZXROZXh0RGVsYXk9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9vcHRpb25zLG49ZS5yZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3Isbz1uPT09dm9pZCAwP2EucmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yOm4scj1lLm1pblJlY29ubmVjdGlvbkRlbGF5LGk9cj09PXZvaWQgMD9hLm1pblJlY29ubmVjdGlvbkRlbGF5OnIscz1lLm1heFJlY29ubmVjdGlvbkRlbGF5LHU9cz09PXZvaWQgMD9hLm1heFJlY29ubmVjdGlvbkRlbGF5OnMsYz0wO3JldHVybiB0aGlzLl9yZXRyeUNvdW50PjAmJihjPWkqTWF0aC5wb3cobyx0aGlzLl9yZXRyeUNvdW50LTEpLGM+dSYmKGM9dSkpLHRoaXMuX2RlYnVnKFwibmV4dCBkZWxheVwiLGMpLGN9LHQucHJvdG90eXBlLl93YWl0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obil7c2V0VGltZW91dChuLGUuX2dldE5leHREZWxheSgpKX0pfSx0LnByb3RvdHlwZS5fZ2V0TmV4dFVybD1mdW5jdGlvbihlKXtpZih0eXBlb2YgZT09XCJzdHJpbmdcIilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpO2lmKHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIpe3ZhciBuPWUoKTtpZih0eXBlb2Ygbj09XCJzdHJpbmdcIilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4pO2lmKG4udGhlbilyZXR1cm4gbn10aHJvdyBFcnJvcihcIkludmFsaWQgVVJMXCIpfSx0LnByb3RvdHlwZS5fY29ubmVjdD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYoISh0aGlzLl9jb25uZWN0TG9ja3x8IXRoaXMuX3Nob3VsZFJlY29ubmVjdCkpe3RoaXMuX2Nvbm5lY3RMb2NrPSEwO3ZhciBuPXRoaXMuX29wdGlvbnMsbz1uLm1heFJldHJpZXMscj1vPT09dm9pZCAwP2EubWF4UmV0cmllczpvLGk9bi5jb25uZWN0aW9uVGltZW91dCxzPWk9PT12b2lkIDA/YS5jb25uZWN0aW9uVGltZW91dDppLHU9bi5XZWJTb2NrZXQsYz11PT09dm9pZCAwP1QoKTp1O2lmKHRoaXMuX3JldHJ5Q291bnQ+PXIpe3RoaXMuX2RlYnVnKFwibWF4IHJldHJpZXMgcmVhY2hlZFwiLHRoaXMuX3JldHJ5Q291bnQsXCI+PVwiLHIpO3JldHVybn1pZih0aGlzLl9yZXRyeUNvdW50KyssdGhpcy5fZGVidWcoXCJjb25uZWN0XCIsdGhpcy5fcmV0cnlDb3VudCksdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCksIUwoYykpdGhyb3cgRXJyb3IoXCJObyB2YWxpZCBXZWJTb2NrZXQgY2xhc3MgcHJvdmlkZWRcIik7dGhpcy5fd2FpdCgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZS5fZ2V0TmV4dFVybChlLl91cmwpfSkudGhlbihmdW5jdGlvbihmKXtlLl9jbG9zZUNhbGxlZHx8KGUuX2RlYnVnKFwiY29ubmVjdFwiLHt1cmw6Zixwcm90b2NvbHM6ZS5fcHJvdG9jb2xzfSksZS5fd3M9ZS5fcHJvdG9jb2xzP25ldyBjKGYsZS5fcHJvdG9jb2xzKTpuZXcgYyhmKSxlLl93cy5iaW5hcnlUeXBlPWUuX2JpbmFyeVR5cGUsZS5fY29ubmVjdExvY2s9ITEsZS5fYWRkTGlzdGVuZXJzKCksZS5fY29ubmVjdFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBlLl9oYW5kbGVUaW1lb3V0KCl9LHMpKX0pfX0sdC5wcm90b3R5cGUuX2hhbmRsZVRpbWVvdXQ9ZnVuY3Rpb24oKXt0aGlzLl9kZWJ1ZyhcInRpbWVvdXQgZXZlbnRcIiksdGhpcy5faGFuZGxlRXJyb3IobmV3IE8oRXJyb3IoXCJUSU1FT1VUXCIpLHRoaXMpKX0sdC5wcm90b3R5cGUuX2Rpc2Nvbm5lY3Q9ZnVuY3Rpb24oZSxuKXtpZihlPT09dm9pZCAwJiYoZT0xZTMpLHRoaXMuX2NsZWFyVGltZW91dHMoKSwhIXRoaXMuX3dzKXt0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTt0cnl7dGhpcy5fd3MuY2xvc2UoZSxuKSx0aGlzLl9oYW5kbGVDbG9zZShuZXcgQyhlLG4sdGhpcykpfWNhdGNoe319fSx0LnByb3RvdHlwZS5fYWNjZXB0T3Blbj1mdW5jdGlvbigpe3RoaXMuX2RlYnVnKFwiYWNjZXB0IG9wZW5cIiksdGhpcy5fcmV0cnlDb3VudD0wfSx0LnByb3RvdHlwZS5fY2FsbEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSxuKXtcImhhbmRsZUV2ZW50XCJpbiBuP24uaGFuZGxlRXZlbnQoZSk6bihlKX0sdC5wcm90b3R5cGUuX3JlbW92ZUxpc3RlbmVycz1mdW5jdGlvbigpeyF0aGlzLl93c3x8KHRoaXMuX2RlYnVnKFwicmVtb3ZlTGlzdGVuZXJzXCIpLHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsdGhpcy5faGFuZGxlT3BlbiksdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsdGhpcy5faGFuZGxlQ2xvc2UpLHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdGhpcy5faGFuZGxlTWVzc2FnZSksdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsdGhpcy5faGFuZGxlRXJyb3IpKX0sdC5wcm90b3R5cGUuX2FkZExpc3RlbmVycz1mdW5jdGlvbigpeyF0aGlzLl93c3x8KHRoaXMuX2RlYnVnKFwiYWRkTGlzdGVuZXJzXCIpLHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsdGhpcy5faGFuZGxlT3BlbiksdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsdGhpcy5faGFuZGxlQ2xvc2UpLHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdGhpcy5faGFuZGxlTWVzc2FnZSksdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsdGhpcy5faGFuZGxlRXJyb3IpKX0sdC5wcm90b3R5cGUuX2NsZWFyVGltZW91dHM9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fY29ubmVjdFRpbWVvdXQpLGNsZWFyVGltZW91dCh0aGlzLl91cHRpbWVUaW1lb3V0KX0sdH0oKSxtPVM7ZnVuY3Rpb24gUigpe3JldHVybiBITVJfSE9TVHx8KGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiKX1mdW5jdGlvbiB4KCl7cmV0dXJuIEhNUl9QT1JUfHxsb2NhdGlvbi5wb3J0fXZhciBnPW1vZHVsZS5idW5kbGUucGFyZW50OyghZ3x8IWcuaXNQYXJjZWxSZXF1aXJlKSYmdHlwZW9mIFdlYlNvY2tldDxcInVcIiYmKF89UigpLHA9eCgpLGI9SE1SX1NFQ1VSRXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdChfKT9cIndzc1wiOlwid3NcIixsPW5ldyBtKGIrXCI6Ly9cIitfKyhwP1wiOlwiK3A6XCJcIikrXCIvXCIpLGNocm9tZS5ydW50aW1lLmxhc3RFcnJvciYmbG9jYXRpb24ucmVsb2FkKCksbC5vbm1lc3NhZ2U9YXN5bmMgZnVuY3Rpb24odCl7aWYoISFjaHJvbWUucnVudGltZS5pZCl7dmFyIGU9SlNPTi5wYXJzZSh0LmRhdGEpO2lmKGUudHlwZT09PVwidXBkYXRlXCImJihlLmFzc2V0cy5maWx0ZXIobj0+bi50eXBlPT09XCJqc29uXCIpLmxlbmd0aD4wP2Nocm9tZSYmY2hyb21lLnJ1bnRpbWUmJnR5cGVvZiBjaHJvbWUucnVudGltZS5yZWxvYWQ9PVwiZnVuY3Rpb25cIj9jaHJvbWUucnVudGltZS5yZWxvYWQoKTooY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGFyY2VsX2htcl9yZWxvYWRfXzohMH0pLGxvY2F0aW9uLnJlbG9hZCgpKTohIWxvY2F0aW9uJiZ0eXBlb2YgbG9jYXRpb24ucmVsb2FkPT1cImZ1bmN0aW9uXCI/bG9jYXRpb24ucmVsb2FkKCk6Y2hyb21lLnJ1bnRpbWUucmVsb2FkKCkpLGUudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2YgZS5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbz1uLmNvZGVmcmFtZT9uLmNvZGVmcmFtZTpuLnN0YWNrO2NvbnNvbGUuZXJyb3IoXCJcXHV7MUY3RTF9IFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtvK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX19LGwub25lcnJvcj1mdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKHQubWVzc2FnZSl9LGwub25jbG9zZT1mdW5jdGlvbih0KXtwcm9jZXNzLmVudi5QQVJDRUxfQlVJTERfRU5WIT09XCJ0ZXN0XCImJmNvbnNvbGUud2FybihcIlxcdXsxRjdFMX0gW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QsIHRyeWluZyB0byByZWNvbm5lY3QuLi5cIil9KTt2YXIgXyxwLGIsbDtcbi8qIVxuICogUmVjb25uZWN0aW5nIFdlYlNvY2tldFxuICogYnkgUGVkcm8gTGFkYXJpYSA8cGVkcm8ubGFkYXJpYUBnbWFpbC5jb20+XG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGxhZGFyaWEvcmVjb25uZWN0aW5nLXdlYnNvY2tldFxuICogTGljZW5zZSBNSVRcbiAqL1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxuXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4iLCJcbmltcG9ydCB0eXBlIHsgS2luZGxlQWN0aXZpdHkgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCB7fTtcblxubGV0IGFjdGl2aXR5OiBLaW5kbGVBY3Rpdml0eSB8IHVuZGVmaW5lZDtcblxuY29uc3QgdXBkYXRlQWN0aXZpdHkgPSAoKSA9PiB7IGNocm9tZS50YWJzLnF1ZXJ5KHt9LCBmdW5jdGlvbiAodGFicykge1xuICAgIGNvbnN0IGFsbEtpbmRsZVRhYnMgPSB0YWJzLmZpbHRlcigodGFiKSA9PlxuICAgICAgdGFiLnVybC5pbmNsdWRlcyhcInJlYWQuYW1hem9uLmNvbVwiKVxuICAgICk7XG5cbiAgICBpZiAoYWxsS2luZGxlVGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgIGFjdGl2aXR5ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGtpbmRsZVRhYiA9XG4gICAgICBhbGxLaW5kbGVUYWJzLmZpbmQoKHRhYikgPT4gdGFiLmFjdGl2ZSkgfHxcbiAgICAgIGFsbEtpbmRsZVRhYnMuZmluZCgodGFiKSA9PiB0YWIudXJsLmluY2x1ZGVzKFwiYXNpblwiKSkgfHxcbiAgICAgIGFsbEtpbmRsZVRhYnNbMF07XG4gICAgdmFyIHRleHQ6c3RyaW5nO1xuXG4gICAgaWYgKGtpbmRsZVRhYi51cmwuaW5jbHVkZXMoXCJhc2luXCIpKSB7XG4gICAgICBhY3Rpdml0eSA9IHsgbG9jYXRpb246IFwiYm9va1wiIH07XG4gICAgfSBlbHNlIGlmIChraW5kbGVUYWIudXJsLmluY2x1ZGVzKFwia2luZGxlLWxpYnJhcnlcIikpIHtcbiAgICAgIGFjdGl2aXR5ID0geyBsb2NhdGlvbjogXCJsaWJyYXJ5XCIgfTtcbiAgICB9IGVsc2UgaWYgKGtpbmRsZVRhYi51cmwuaW5jbHVkZXMoXCJub3RlYm9va1wiKSkge1xuICAgICAgYWN0aXZpdHkgPSB7IGxvY2F0aW9uOiBcIm5vdGVib29rXCIgfTtcbiAgICB9IFxuXG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoXG4gICAgICBraW5kbGVUYWIuaWQsXG4gICAgICB7bG9jYXRpb246IGFjdGl2aXR5LmxvY2F0aW9uIH0sXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgYWN0aXZpdHkgPSB7IC4uLnJlc3BvbnNlLCAuLi5hY3Rpdml0eSB9O1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xufTtcblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICB1cGRhdGVBY3Rpdml0eSgpO1xuICBjb25zb2xlLmxvZyhhY3Rpdml0eSk7XG5cbiAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhY3Rpdml0eSksXG4gIH0pO1xuXG59LCA1MDAwKTtcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJiYWNrZ3JvdW5kLmY0NGE5MmEzLmpzLm1hcCJ9
