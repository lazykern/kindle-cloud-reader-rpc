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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsU0FBUyxDQUFDLEdBQUU7UUFBQyxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUM7S0FBQztJQUFBLENBQUMsQ0FBQyxTQUFTLEdBQUMsQ0FBQyxLQUFHLElBQUksR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUEsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFBLEFBQUM7Q0FBQztBQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUFDLElBQUksQ0FBQyxHQUFDLE9BQU8sTUFBTSxJQUFFLFVBQVUsSUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEFBQUM7SUFBQSxPQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDO1FBQUMsSUFBSSxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBRyxDQUFBLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQSxBQUFDLEVBQUM7Z0JBQUMsS0FBSyxFQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUFDLENBQUE7U0FBQztLQUFDLENBQUE7Q0FBQztBQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLENBQUMsR0FBQyxPQUFPLE1BQU0sSUFBRSxVQUFVLElBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQUFBQztJQUFBLElBQUcsQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFBQSxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsQUFBQztJQUFBLElBQUc7UUFBQyxNQUFLLEFBQUMsQ0FBQSxDQUFDLEtBQUcsS0FBSyxDQUFDLElBQUUsQ0FBQyxFQUFFLEdBQUUsQ0FBQyxDQUFBLElBQUcsQ0FBQyxBQUFDLENBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FBQyxDQUFBLE9BQU0sQ0FBQyxFQUFDO1FBQUMsQ0FBQyxHQUFDO1lBQUMsS0FBSyxFQUFDLENBQUM7U0FBQztLQUFDLFFBQU87UUFBQyxJQUFHO1lBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRyxDQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FBQyxRQUFPO1lBQUMsSUFBRyxDQUFDLEVBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFBO1NBQUM7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUM7QUFBQSxTQUFTLENBQUMsR0FBRTtJQUFDLElBQUksSUFBSSxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxPQUFPLENBQUMsQ0FBQTtDQUFDO0FBQUEsSUFBSSxDQUFDLEdBQUMsV0FBVTtJQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQUFBQztRQUFBLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQTtLQUFDO0lBQUEsT0FBTyxDQUFDLENBQUE7Q0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsSUFBRyxDQUFBLENBQUMsR0FBQyxHQUFHLENBQUEsQUFBQyxFQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsSUFBRyxDQUFBLENBQUMsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDO1FBQUEsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQUFBQztRQUFBLE9BQU8sQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUE7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUMsQ0FBQyxDQUFDLENBQUMsQUFBQztBQUFBLElBQUksQ0FBQyxHQUFDLFdBQVU7SUFBQyxJQUFHLE9BQU8sU0FBUyxHQUFDLEdBQUcsRUFBQyxPQUFPLFNBQVMsQ0FBQTtDQUFDLEVBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxFQUFDO0lBQUMsT0FBTyxPQUFPLENBQUMsR0FB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QyxDQUFDLEVBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUcsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7S0FBQztJQUFBLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLFlBQVksRUFBQztRQUFDLEdBQUcsRUFBQyxXQUFVO1lBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFBO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsTUFBTSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQztRQUFDLEdBQUcsRUFBQyxXQUFVO1lBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFBO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQTtTQUFDO1FBQUMsR0FBRyxFQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsSUFBRyxDQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQSxBQUFDO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7Z0JBQUMsT0FBTyxPQUFPLENBQUMsSUFBRSxRQUFRLEdBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxZQUFZLElBQUksR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLElBQUksR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7YUFBQyxFQUFDLENBQUMsQ0FBQyxBQUFDO1lBQUEsT0FBTyxDQUFDLEdBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFVLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUcsQ0FBQyxLQUFHLEtBQUssQ0FBQyxJQUFHLENBQUEsQ0FBQyxHQUFDLEdBQUcsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUFBLE9BQU07U0FBQztRQUFBLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUFBLE9BQU07U0FBQztRQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRSxDQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQSxBQUFDO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxTQUFTLENBQUMsRUFBQztRQUFDLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBRyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUk7WUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFDLENBQUMsR0FBQyxDQUFDLEtBQUcsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLG1CQUFtQixHQUFDLENBQUMsQUFBQztZQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRyxDQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUM7U0FBQztLQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxBQUFDO1FBQUEsSUFBRyxDQUFDLEVBQUMsSUFBRztZQUFDLElBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQUFBQztnQkFBQSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUFDO1NBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztZQUFDLENBQUMsR0FBQztnQkFBQyxLQUFLLEVBQUMsQ0FBQzthQUFDO1NBQUMsUUFBTztZQUFDLElBQUc7Z0JBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRyxDQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFBQyxRQUFPO2dCQUFDLElBQUcsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQTthQUFDO1NBQUM7UUFBQSxPQUFNLENBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQUMsT0FBTyxDQUFDLEtBQUcsQ0FBQyxDQUFBO1NBQUMsQ0FBQyxDQUFBLEFBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFdBQVU7UUFBQyxJQUFJLElBQUksQ0FBQyxHQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTTtTQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFDLFdBQVU7UUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsMkJBQTJCLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsMkJBQTJCLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEFBQUM7UUFBQSxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxJQUFHLENBQUEsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLElBQUcsQ0FBQSxDQUFDLEdBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxXQUFVO1FBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxBQUFDO1FBQUEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztZQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxTQUFTLENBQUMsRUFBQztRQUFDLElBQUcsT0FBTyxDQUFDLElBQUUsUUFBUSxFQUFDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFBLElBQUcsT0FBTyxDQUFDLElBQUUsVUFBVSxFQUFDO1lBQUMsSUFBSSxDQUFDLEdBQUMsQ0FB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QUMsR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQUFBQztBQUFDLENBQUEsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFBLElBQUcsT0FBTyxTQUFTLEdBQUMsR0FBRyxJQUFHLENBQUEsQ0FBQyxHQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsVUFBVSxJQUFFLFFBQVEsQ0FBQyxRQUFRLEtBQUcsUUFBUSxJQUFFLENBQUMsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsS0FBSyxHQUFDLENBQUMsR0FBRSxDQUFBLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQSxHQUFFLEdBQUcsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLGVBQWUsQ0FBQyxFQUFDO0lBQUMsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUM7UUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQUFBQztRQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksS0FBRyxRQUFRLElBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsR0FBRSxDQUFDLENBQUMsSUFBSSxLQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUMsTUFBTSxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBRSxVQUFVLEdBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRSxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQUMs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LENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztDQUNiLENBQUM7QUFFRixPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1FBQ3BDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEdBQUcsRUFBRSxHQUFHO0tBQ1QsQ0FBQyxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS13ZWJleHRlbnNpb24vbGliL3J1bnRpbWUtYjliNWYxMGNhNWJkNzM0Yi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWE3YzczM2ExODcxNGRkZGEuanMiLCJzcmMvYmFja2dyb3VuZC50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gJzE4MTUnO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgY2hyb21lLCBicm93c2VyLCBhZGRFdmVudExpc3RlbmVyLCBmZXRjaCwgUmVzcG9uc2UsIEhNUl9IT1NULCBITVJfUE9SVCAqL1xudmFyIGVudiA9IHR5cGVvZiBjaHJvbWUgPT0gJ3VuZGVmaW5lZCcgPyBicm93c2VyIDogY2hyb21lO1xuZW52LnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChtc2cpIHtcbiAgaWYgKG1zZy5fX3BhcmNlbF9obXJfcmVsb2FkX18pIHtcbiAgICBlbnYucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufSk7XG5cbmlmIChlbnYucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMykge1xuICB2YXIgcHJveHlMb2MgPSBlbnYucnVudGltZS5nZXRVUkwoJy9fX3BhcmNlbF9obXJfcHJveHlfXz91cmw9Jyk7XG4gIGFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIHZhciB1cmwgPSBldnQucmVxdWVzdC51cmw7XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgocHJveHlMb2MpKSB7XG4gICAgICB1cmwgPSBuZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudCh1cmwuc2xpY2UocHJveHlMb2MubGVuZ3RoKSkpO1xuXG4gICAgICBpZiAodXJsLmhvc3RuYW1lID09IEhNUl9IT1NUICYmIHVybC5wb3J0ID09IEhNUl9QT1JUKSB7XG4gICAgICAgIGV2dC5yZXNwb25kV2l0aChmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UocmVzLmJvZHksIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59IiwidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAxODE1O3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiMjEwMjgxY2FmOGQ0MTYwZFwiO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiYTIwZGQ4ZWVmNDRhOTJhM1wiO3ZhciBoPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGg9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKG4sbyl7bi5fX3Byb3RvX189b318fGZ1bmN0aW9uKG4sbyl7Zm9yKHZhciByIGluIG8pby5oYXNPd25Qcm9wZXJ0eShyKSYmKG5bcl09b1tyXSl9LGgodCxlKX07ZnVuY3Rpb24gZCh0LGUpe2godCxlKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fXQucHJvdG90eXBlPWU9PT1udWxsP09iamVjdC5jcmVhdGUoZSk6KG4ucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyBuKX1mdW5jdGlvbiB2KHQpe3ZhciBlPXR5cGVvZiBTeW1ib2w9PVwiZnVuY3Rpb25cIiYmdFtTeW1ib2wuaXRlcmF0b3JdLG49MDtyZXR1cm4gZT9lLmNhbGwodCk6e25leHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdCYmbj49dC5sZW5ndGgmJih0PXZvaWQgMCkse3ZhbHVlOnQmJnRbbisrXSxkb25lOiF0fX19fWZ1bmN0aW9uIEUodCxlKXt2YXIgbj10eXBlb2YgU3ltYm9sPT1cImZ1bmN0aW9uXCImJnRbU3ltYm9sLml0ZXJhdG9yXTtpZighbilyZXR1cm4gdDt2YXIgbz1uLmNhbGwodCkscixpPVtdLHM7dHJ5e2Zvcig7KGU9PT12b2lkIDB8fGUtLSA+MCkmJiEocj1vLm5leHQoKSkuZG9uZTspaS5wdXNoKHIudmFsdWUpfWNhdGNoKHUpe3M9e2Vycm9yOnV9fWZpbmFsbHl7dHJ5e3ImJiFyLmRvbmUmJihuPW8ucmV0dXJuKSYmbi5jYWxsKG8pfWZpbmFsbHl7aWYocyl0aHJvdyBzLmVycm9yfX1yZXR1cm4gaX1mdW5jdGlvbiB3KCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXQ9dC5jb25jYXQoRShhcmd1bWVudHNbZV0pKTtyZXR1cm4gdH12YXIgeT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxuKXt0aGlzLnRhcmdldD1uLHRoaXMudHlwZT1lfXJldHVybiB0fSgpLE89ZnVuY3Rpb24odCl7ZChlLHQpO2Z1bmN0aW9uIGUobixvKXt2YXIgcj10LmNhbGwodGhpcyxcImVycm9yXCIsbyl8fHRoaXM7cmV0dXJuIHIubWVzc2FnZT1uLm1lc3NhZ2Usci5lcnJvcj1uLHJ9cmV0dXJuIGV9KHkpLEM9ZnVuY3Rpb24odCl7ZChlLHQpO2Z1bmN0aW9uIGUobixvLHIpe249PT12b2lkIDAmJihuPTFlMyksbz09PXZvaWQgMCYmKG89XCJcIik7dmFyIGk9dC5jYWxsKHRoaXMsXCJjbG9zZVwiLHIpfHx0aGlzO3JldHVybiBpLndhc0NsZWFuPSEwLGkuY29kZT1uLGkucmVhc29uPW8saX1yZXR1cm4gZX0oeSk7dmFyIFQ9ZnVuY3Rpb24oKXtpZih0eXBlb2YgV2ViU29ja2V0PFwidVwiKXJldHVybiBXZWJTb2NrZXR9LEw9ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0PFwidVwiJiYhIXQmJnQuQ0xPU0lORz09PTJ9LGE9e21heFJlY29ubmVjdGlvbkRlbGF5OjFlNCxtaW5SZWNvbm5lY3Rpb25EZWxheToxZTMrTWF0aC5yYW5kb20oKSo0ZTMsbWluVXB0aW1lOjVlMyxyZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3I6MS4zLGNvbm5lY3Rpb25UaW1lb3V0OjRlMyxtYXhSZXRyaWVzOjEvMCxtYXhFbnF1ZXVlZE1lc3NhZ2VzOjEvMCxzdGFydENsb3NlZDohMSxkZWJ1ZzohMX0sUz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxuLG8pe3ZhciByPXRoaXM7bz09PXZvaWQgMCYmKG89e30pLHRoaXMuX2xpc3RlbmVycz17ZXJyb3I6W10sbWVzc2FnZTpbXSxvcGVuOltdLGNsb3NlOltdfSx0aGlzLl9yZXRyeUNvdW50PS0xLHRoaXMuX3Nob3VsZFJlY29ubmVjdD0hMCx0aGlzLl9jb25uZWN0TG9jaz0hMSx0aGlzLl9iaW5hcnlUeXBlPVwiYmxvYlwiLHRoaXMuX2Nsb3NlQ2FsbGVkPSExLHRoaXMuX21lc3NhZ2VRdWV1ZT1bXSx0aGlzLm9uY2xvc2U9bnVsbCx0aGlzLm9uZXJyb3I9bnVsbCx0aGlzLm9ubWVzc2FnZT1udWxsLHRoaXMub25vcGVuPW51bGwsdGhpcy5faGFuZGxlT3Blbj1mdW5jdGlvbihpKXtyLl9kZWJ1ZyhcIm9wZW4gZXZlbnRcIik7dmFyIHM9ci5fb3B0aW9ucy5taW5VcHRpbWUsdT1zPT09dm9pZCAwP2EubWluVXB0aW1lOnM7Y2xlYXJUaW1lb3V0KHIuX2Nvbm5lY3RUaW1lb3V0KSxyLl91cHRpbWVUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gci5fYWNjZXB0T3BlbigpfSx1KSxyLl93cy5iaW5hcnlUeXBlPXIuX2JpbmFyeVR5cGUsci5fbWVzc2FnZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24oYyl7cmV0dXJuIHIuX3dzLnNlbmQoYyl9KSxyLl9tZXNzYWdlUXVldWU9W10sci5vbm9wZW4mJnIub25vcGVuKGkpLHIuX2xpc3RlbmVycy5vcGVuLmZvckVhY2goZnVuY3Rpb24oYyl7cmV0dXJuIHIuX2NhbGxFdmVudExpc3RlbmVyKGksYyl9KX0sdGhpcy5faGFuZGxlTWVzc2FnZT1mdW5jdGlvbihpKXtyLl9kZWJ1ZyhcIm1lc3NhZ2UgZXZlbnRcIiksci5vbm1lc3NhZ2UmJnIub25tZXNzYWdlKGkpLHIuX2xpc3RlbmVycy5tZXNzYWdlLmZvckVhY2goZnVuY3Rpb24ocyl7cmV0dXJuIHIuX2NhbGxFdmVudExpc3RlbmVyKGkscyl9KX0sdGhpcy5faGFuZGxlRXJyb3I9ZnVuY3Rpb24oaSl7ci5fZGVidWcoXCJlcnJvciBldmVudFwiLGkubWVzc2FnZSksci5fZGlzY29ubmVjdCh2b2lkIDAsaS5tZXNzYWdlPT09XCJUSU1FT1VUXCI/XCJ0aW1lb3V0XCI6dm9pZCAwKSxyLm9uZXJyb3ImJnIub25lcnJvcihpKSxyLl9kZWJ1ZyhcImV4ZWMgZXJyb3IgbGlzdGVuZXJzXCIpLHIuX2xpc3RlbmVycy5lcnJvci5mb3JFYWNoKGZ1bmN0aW9uKHMpe3JldHVybiByLl9jYWxsRXZlbnRMaXN0ZW5lcihpLHMpfSksci5fY29ubmVjdCgpfSx0aGlzLl9oYW5kbGVDbG9zZT1mdW5jdGlvbihpKXtyLl9kZWJ1ZyhcImNsb3NlIGV2ZW50XCIpLHIuX2NsZWFyVGltZW91dHMoKSxyLl9zaG91bGRSZWNvbm5lY3QmJnIuX2Nvbm5lY3QoKSxyLm9uY2xvc2UmJnIub25jbG9zZShpKSxyLl9saXN0ZW5lcnMuY2xvc2UuZm9yRWFjaChmdW5jdGlvbihzKXtyZXR1cm4gci5fY2FsbEV2ZW50TGlzdGVuZXIoaSxzKX0pfSx0aGlzLl91cmw9ZSx0aGlzLl9wcm90b2NvbHM9bix0aGlzLl9vcHRpb25zPW8sdGhpcy5fb3B0aW9ucy5zdGFydENsb3NlZCYmKHRoaXMuX3Nob3VsZFJlY29ubmVjdD0hMSksdGhpcy5fY29ubmVjdCgpfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIkNPTk5FQ1RJTkdcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDB9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJPUEVOXCIse2dldDpmdW5jdGlvbigpe3JldHVybiAxfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiQ0xPU0lOR1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gMn0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIkNMT1NFRFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gM30sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJDT05ORUNUSU5HXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0LkNPTk5FQ1RJTkd9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiT1BFTlwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdC5PUEVOfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIkNMT1NJTkdcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuQ0xPU0lOR30sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJDTE9TRURcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuQ0xPU0VEfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImJpbmFyeVR5cGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dzP3RoaXMuX3dzLmJpbmFyeVR5cGU6dGhpcy5fYmluYXJ5VHlwZX0sc2V0OmZ1bmN0aW9uKGUpe3RoaXMuX2JpbmFyeVR5cGU9ZSx0aGlzLl93cyYmKHRoaXMuX3dzLmJpbmFyeVR5cGU9ZSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicmV0cnlDb3VudFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgodGhpcy5fcmV0cnlDb3VudCwwKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJidWZmZXJlZEFtb3VudFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9tZXNzYWdlUXVldWUucmVkdWNlKGZ1bmN0aW9uKG4sbyl7cmV0dXJuIHR5cGVvZiBvPT1cInN0cmluZ1wiP24rPW8ubGVuZ3RoOm8gaW5zdGFuY2VvZiBCbG9iP24rPW8uc2l6ZTpuKz1vLmJ5dGVMZW5ndGgsbn0sMCk7cmV0dXJuIGUrKHRoaXMuX3dzP3RoaXMuX3dzLmJ1ZmZlcmVkQW1vdW50OjApfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImV4dGVuc2lvbnNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dzP3RoaXMuX3dzLmV4dGVuc2lvbnM6XCJcIn0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJwcm90b2NvbFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd3M/dGhpcy5fd3MucHJvdG9jb2w6XCJcIn0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJyZWFkeVN0YXRlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93cz90aGlzLl93cy5yZWFkeVN0YXRlOnRoaXMuX29wdGlvbnMuc3RhcnRDbG9zZWQ/dC5DTE9TRUQ6dC5DT05ORUNUSU5HfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInVybFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd3M/dGhpcy5fd3MudXJsOlwiXCJ9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oZSxuKXtpZihlPT09dm9pZCAwJiYoZT0xZTMpLHRoaXMuX2Nsb3NlQ2FsbGVkPSEwLHRoaXMuX3Nob3VsZFJlY29ubmVjdD0hMSx0aGlzLl9jbGVhclRpbWVvdXRzKCksIXRoaXMuX3dzKXt0aGlzLl9kZWJ1ZyhcImNsb3NlIGVucXVldWVkOiBubyB3cyBpbnN0YW5jZVwiKTtyZXR1cm59aWYodGhpcy5fd3MucmVhZHlTdGF0ZT09PXRoaXMuQ0xPU0VEKXt0aGlzLl9kZWJ1ZyhcImNsb3NlOiBhbHJlYWR5IGNsb3NlZFwiKTtyZXR1cm59dGhpcy5fd3MuY2xvc2UoZSxuKX0sdC5wcm90b3R5cGUucmVjb25uZWN0PWZ1bmN0aW9uKGUsbil7dGhpcy5fc2hvdWxkUmVjb25uZWN0PSEwLHRoaXMuX2Nsb3NlQ2FsbGVkPSExLHRoaXMuX3JldHJ5Q291bnQ9LTEsIXRoaXMuX3dzfHx0aGlzLl93cy5yZWFkeVN0YXRlPT09dGhpcy5DTE9TRUQ/dGhpcy5fY29ubmVjdCgpOih0aGlzLl9kaXNjb25uZWN0KGUsbiksdGhpcy5fY29ubmVjdCgpKX0sdC5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihlKXtpZih0aGlzLl93cyYmdGhpcy5fd3MucmVhZHlTdGF0ZT09PXRoaXMuT1BFTil0aGlzLl9kZWJ1ZyhcInNlbmRcIixlKSx0aGlzLl93cy5zZW5kKGUpO2Vsc2V7dmFyIG49dGhpcy5fb3B0aW9ucy5tYXhFbnF1ZXVlZE1lc3NhZ2VzLG89bj09PXZvaWQgMD9hLm1heEVucXVldWVkTWVzc2FnZXM6bjt0aGlzLl9tZXNzYWdlUXVldWUubGVuZ3RoPG8mJih0aGlzLl9kZWJ1ZyhcImVucXVldWVcIixlKSx0aGlzLl9tZXNzYWdlUXVldWUucHVzaChlKSl9fSx0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGUsbil7dGhpcy5fbGlzdGVuZXJzW2VdJiZ0aGlzLl9saXN0ZW5lcnNbZV0ucHVzaChuKX0sdC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihlKXt2YXIgbixvLHI9dGhpcy5fbGlzdGVuZXJzW2UudHlwZV07aWYocil0cnl7Zm9yKHZhciBpPXYocikscz1pLm5leHQoKTshcy5kb25lO3M9aS5uZXh0KCkpe3ZhciB1PXMudmFsdWU7dGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZSx1KX19Y2F0Y2goYyl7bj17ZXJyb3I6Y319ZmluYWxseXt0cnl7cyYmIXMuZG9uZSYmKG89aS5yZXR1cm4pJiZvLmNhbGwoaSl9ZmluYWxseXtpZihuKXRocm93IG4uZXJyb3J9fXJldHVybiEwfSx0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGUsbil7dGhpcy5fbGlzdGVuZXJzW2VdJiYodGhpcy5fbGlzdGVuZXJzW2VdPXRoaXMuX2xpc3RlbmVyc1tlXS5maWx0ZXIoZnVuY3Rpb24obyl7cmV0dXJuIG8hPT1ufSkpfSx0LnByb3RvdHlwZS5fZGVidWc9ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sbj0wO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuXT1hcmd1bWVudHNbbl07dGhpcy5fb3B0aW9ucy5kZWJ1ZyYmY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSx3KFtcIlJXUz5cIl0sZSkpfSx0LnByb3RvdHlwZS5fZ2V0TmV4dERlbGF5PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fb3B0aW9ucyxuPWUucmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yLG89bj09PXZvaWQgMD9hLnJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvcjpuLHI9ZS5taW5SZWNvbm5lY3Rpb25EZWxheSxpPXI9PT12b2lkIDA/YS5taW5SZWNvbm5lY3Rpb25EZWxheTpyLHM9ZS5tYXhSZWNvbm5lY3Rpb25EZWxheSx1PXM9PT12b2lkIDA/YS5tYXhSZWNvbm5lY3Rpb25EZWxheTpzLGM9MDtyZXR1cm4gdGhpcy5fcmV0cnlDb3VudD4wJiYoYz1pKk1hdGgucG93KG8sdGhpcy5fcmV0cnlDb3VudC0xKSxjPnUmJihjPXUpKSx0aGlzLl9kZWJ1ZyhcIm5leHQgZGVsYXlcIixjKSxjfSx0LnByb3RvdHlwZS5fd2FpdD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pe3NldFRpbWVvdXQobixlLl9nZXROZXh0RGVsYXkoKSl9KX0sdC5wcm90b3R5cGUuX2dldE5leHRVcmw9ZnVuY3Rpb24oZSl7aWYodHlwZW9mIGU9PVwic3RyaW5nXCIpcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKTtpZih0eXBlb2YgZT09XCJmdW5jdGlvblwiKXt2YXIgbj1lKCk7aWYodHlwZW9mIG49PVwic3RyaW5nXCIpcmV0dXJuIFByb21pc2UucmVzb2x2ZShuKTtpZihuLnRoZW4pcmV0dXJuIG59dGhyb3cgRXJyb3IoXCJJbnZhbGlkIFVSTFwiKX0sdC5wcm90b3R5cGUuX2Nvbm5lY3Q9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKCEodGhpcy5fY29ubmVjdExvY2t8fCF0aGlzLl9zaG91bGRSZWNvbm5lY3QpKXt0aGlzLl9jb25uZWN0TG9jaz0hMDt2YXIgbj10aGlzLl9vcHRpb25zLG89bi5tYXhSZXRyaWVzLHI9bz09PXZvaWQgMD9hLm1heFJldHJpZXM6byxpPW4uY29ubmVjdGlvblRpbWVvdXQscz1pPT09dm9pZCAwP2EuY29ubmVjdGlvblRpbWVvdXQ6aSx1PW4uV2ViU29ja2V0LGM9dT09PXZvaWQgMD9UKCk6dTtpZih0aGlzLl9yZXRyeUNvdW50Pj1yKXt0aGlzLl9kZWJ1ZyhcIm1heCByZXRyaWVzIHJlYWNoZWRcIix0aGlzLl9yZXRyeUNvdW50LFwiPj1cIixyKTtyZXR1cm59aWYodGhpcy5fcmV0cnlDb3VudCsrLHRoaXMuX2RlYnVnKFwiY29ubmVjdFwiLHRoaXMuX3JldHJ5Q291bnQpLHRoaXMuX3JlbW92ZUxpc3RlbmVycygpLCFMKGMpKXRocm93IEVycm9yKFwiTm8gdmFsaWQgV2ViU29ja2V0IGNsYXNzIHByb3ZpZGVkXCIpO3RoaXMuX3dhaXQoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGUuX2dldE5leHRVcmwoZS5fdXJsKX0pLnRoZW4oZnVuY3Rpb24oZil7ZS5fY2xvc2VDYWxsZWR8fChlLl9kZWJ1ZyhcImNvbm5lY3RcIix7dXJsOmYscHJvdG9jb2xzOmUuX3Byb3RvY29sc30pLGUuX3dzPWUuX3Byb3RvY29scz9uZXcgYyhmLGUuX3Byb3RvY29scyk6bmV3IGMoZiksZS5fd3MuYmluYXJ5VHlwZT1lLl9iaW5hcnlUeXBlLGUuX2Nvbm5lY3RMb2NrPSExLGUuX2FkZExpc3RlbmVycygpLGUuX2Nvbm5lY3RUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gZS5faGFuZGxlVGltZW91dCgpfSxzKSl9KX19LHQucHJvdG90eXBlLl9oYW5kbGVUaW1lb3V0PWZ1bmN0aW9uKCl7dGhpcy5fZGVidWcoXCJ0aW1lb3V0IGV2ZW50XCIpLHRoaXMuX2hhbmRsZUVycm9yKG5ldyBPKEVycm9yKFwiVElNRU9VVFwiKSx0aGlzKSl9LHQucHJvdG90eXBlLl9kaXNjb25uZWN0PWZ1bmN0aW9uKGUsbil7aWYoZT09PXZvaWQgMCYmKGU9MWUzKSx0aGlzLl9jbGVhclRpbWVvdXRzKCksISF0aGlzLl93cyl7dGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7dHJ5e3RoaXMuX3dzLmNsb3NlKGUsbiksdGhpcy5faGFuZGxlQ2xvc2UobmV3IEMoZSxuLHRoaXMpKX1jYXRjaHt9fX0sdC5wcm90b3R5cGUuX2FjY2VwdE9wZW49ZnVuY3Rpb24oKXt0aGlzLl9kZWJ1ZyhcImFjY2VwdCBvcGVuXCIpLHRoaXMuX3JldHJ5Q291bnQ9MH0sdC5wcm90b3R5cGUuX2NhbGxFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGUsbil7XCJoYW5kbGVFdmVudFwiaW4gbj9uLmhhbmRsZUV2ZW50KGUpOm4oZSl9LHQucHJvdG90eXBlLl9yZW1vdmVMaXN0ZW5lcnM9ZnVuY3Rpb24oKXshdGhpcy5fd3N8fCh0aGlzLl9kZWJ1ZyhcInJlbW92ZUxpc3RlbmVyc1wiKSx0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3BlblwiLHRoaXMuX2hhbmRsZU9wZW4pLHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLHRoaXMuX2hhbmRsZUNsb3NlKSx0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMuX2hhbmRsZU1lc3NhZ2UpLHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHRoaXMuX2hhbmRsZUVycm9yKSl9LHQucHJvdG90eXBlLl9hZGRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXshdGhpcy5fd3N8fCh0aGlzLl9kZWJ1ZyhcImFkZExpc3RlbmVyc1wiKSx0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLHRoaXMuX2hhbmRsZU9wZW4pLHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLHRoaXMuX2hhbmRsZUNsb3NlKSx0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMuX2hhbmRsZU1lc3NhZ2UpLHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHRoaXMuX2hhbmRsZUVycm9yKSl9LHQucHJvdG90eXBlLl9jbGVhclRpbWVvdXRzPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX2Nvbm5lY3RUaW1lb3V0KSxjbGVhclRpbWVvdXQodGhpcy5fdXB0aW1lVGltZW91dCl9LHR9KCksbT1TO2Z1bmN0aW9uIFIoKXtyZXR1cm4gSE1SX0hPU1R8fChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIil9ZnVuY3Rpb24geCgpe3JldHVybiBITVJfUE9SVHx8bG9jYXRpb24ucG9ydH12YXIgZz1tb2R1bGUuYnVuZGxlLnBhcmVudDsoIWd8fCFnLmlzUGFyY2VsUmVxdWlyZSkmJnR5cGVvZiBXZWJTb2NrZXQ8XCJ1XCImJihfPVIoKSxwPXgoKSxiPUhNUl9TRUNVUkV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoXyk/XCJ3c3NcIjpcIndzXCIsbD1uZXcgbShiK1wiOi8vXCIrXysocD9cIjpcIitwOlwiXCIpK1wiL1wiKSxjaHJvbWUucnVudGltZS5sYXN0RXJyb3ImJmxvY2F0aW9uLnJlbG9hZCgpLGwub25tZXNzYWdlPWFzeW5jIGZ1bmN0aW9uKHQpe2lmKCEhY2hyb21lLnJ1bnRpbWUuaWQpe3ZhciBlPUpTT04ucGFyc2UodC5kYXRhKTtpZihlLnR5cGU9PT1cInVwZGF0ZVwiJiYoZS5hc3NldHMuZmlsdGVyKG49Pm4udHlwZT09PVwianNvblwiKS5sZW5ndGg+MD9jaHJvbWUmJmNocm9tZS5ydW50aW1lJiZ0eXBlb2YgY2hyb21lLnJ1bnRpbWUucmVsb2FkPT1cImZ1bmN0aW9uXCI/Y2hyb21lLnJ1bnRpbWUucmVsb2FkKCk6KGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BhcmNlbF9obXJfcmVsb2FkX186ITB9KSxsb2NhdGlvbi5yZWxvYWQoKSk6ISFsb2NhdGlvbiYmdHlwZW9mIGxvY2F0aW9uLnJlbG9hZD09XCJmdW5jdGlvblwiP2xvY2F0aW9uLnJlbG9hZCgpOmNocm9tZS5ydW50aW1lLnJlbG9hZCgpKSxlLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIGUuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IG89bi5jb2RlZnJhbWU/bi5jb2RlZnJhbWU6bi5zdGFjaztjb25zb2xlLmVycm9yKFwiXFx1ezFGN0UxfSBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArbytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19fSxsLm9uZXJyb3I9ZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcih0Lm1lc3NhZ2UpfSxsLm9uY2xvc2U9ZnVuY3Rpb24odCl7cHJvY2Vzcy5lbnYuUEFSQ0VMX0JVSUxEX0VOViE9PVwidGVzdFwiJiZjb25zb2xlLndhcm4oXCJcXHV7MUY3RTF9IFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0LCB0cnlpbmcgdG8gcmVjb25uZWN0Li4uXCIpfSk7dmFyIF8scCxiLGw7XG4vKiFcbiAqIFJlY29ubmVjdGluZyBXZWJTb2NrZXRcbiAqIGJ5IFBlZHJvIExhZGFyaWEgPHBlZHJvLmxhZGFyaWFAZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL3BsYWRhcmlhL3JlY29ubmVjdGluZy13ZWJzb2NrZXRcbiAqIExpY2Vuc2UgTUlUXG4gKi9cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cblxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuIiwiXG5pbXBvcnQgdHlwZSB7IEtpbmRsZUFjdGl2aXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQge307XG5cbmxldCBhY3Rpdml0eTogS2luZGxlQWN0aXZpdHkgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IHVwZGF0ZUFjdGl2aXR5ID0gKCkgPT4geyBjaHJvbWUudGFicy5xdWVyeSh7fSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICBjb25zdCBhbGxLaW5kbGVUYWJzID0gdGFicy5maWx0ZXIoKHRhYikgPT5cbiAgICAgIHRhYi51cmwuaW5jbHVkZXMoXCJyZWFkLmFtYXpvbi5jb21cIilcbiAgICApO1xuXG4gICAgaWYgKGFsbEtpbmRsZVRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhY3Rpdml0eSA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBraW5kbGVUYWIgPVxuICAgICAgYWxsS2luZGxlVGFicy5maW5kKCh0YWIpID0+IHRhYi5hY3RpdmUpIHx8XG4gICAgICBhbGxLaW5kbGVUYWJzLmZpbmQoKHRhYikgPT4gdGFiLnVybC5pbmNsdWRlcyhcImFzaW5cIikpIHx8XG4gICAgICBhbGxLaW5kbGVUYWJzWzBdO1xuICAgIHZhciB0ZXh0OnN0cmluZztcblxuICAgIGlmIChraW5kbGVUYWIudXJsLmluY2x1ZGVzKFwiYXNpblwiKSkge1xuICAgICAgYWN0aXZpdHkgPSB7IGxvY2F0aW9uOiBcImJvb2tcIiB9O1xuICAgIH0gZWxzZSBpZiAoa2luZGxlVGFiLnVybC5pbmNsdWRlcyhcImtpbmRsZS1saWJyYXJ5XCIpKSB7XG4gICAgICBhY3Rpdml0eSA9IHsgbG9jYXRpb246IFwibGlicmFyeVwiIH07XG4gICAgfSBlbHNlIGlmIChraW5kbGVUYWIudXJsLmluY2x1ZGVzKFwibm90ZWJvb2tcIikpIHtcbiAgICAgIGFjdGl2aXR5ID0geyBsb2NhdGlvbjogXCJub3RlYm9va1wiIH07XG4gICAgfSBcblxuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAga2luZGxlVGFiLmlkLFxuICAgICAge2xvY2F0aW9uOiBhY3Rpdml0eS5sb2NhdGlvbiB9LFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGFjdGl2aXR5ID0geyAuLi5yZXNwb25zZSwgLi4uYWN0aXZpdHkgfTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn07XG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgdXBkYXRlQWN0aXZpdHkoKTtcblxuICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFjdGl2aXR5KSxcbiAgfSk7XG5cbn0sIDUwMDApO1xuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImJhY2tncm91bmQuZjQ0YTkyYTMuanMubWFwIn0=
