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
})({"gLesU":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = 1815;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "b7e7b9da480c00a3";
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

},{}],"k5Ie5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _util = require("./util");
const config = {
    matches: [
        "*://read.amazon.com/*"
    ]
};
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.location === "book") {
        const bookTitle = document.body.getElementsByClassName("title-default")[0].textContent;
        const footerTitle = document.body.getElementsByClassName("footer-title")[0].textContent;
        const pageInfoList = footerTitle.match(/\d+/g);
        const currentPage = pageInfoList[0];
        const totalPages = pageInfoList[1];
        sendResponse({
            bookTitle,
            currentPage,
            totalPages
        });
    } else if (msg.location === "notebook") {
        const bookTitle1 = (0, _util.getElementByXpath)('//*[@id="annotation-scroller"]/div/div[1]/div[2]/h3').textContent;
        const highlightCount = (0, _util.getElementByXpath)('//*[@id="kp-notebook-highlights-count"]').textContent;
        const noteCount = (0, _util.getElementByXpath)('//*[@id="kp-notebook-notes-count"]').textContent;
        sendResponse({
            bookTitle: bookTitle1,
            highlightCount,
            noteCount
        });
    }
});

},{"./util":"cGmOH","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"cGmOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getElementByXpath", ()=>getElementByXpath);
parcelHelpers.export(exports, "getIntegersFromString", ()=>getIntegersFromString);
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function getIntegersFromString(str) {
    return parseInt(str.match(/\d+/g).join(""));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
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

},{}]},["gLesU","k5Ie5"], "k5Ie5", "parcelRequirea654")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksUUFBUSxHQUFHLFdBQVcsQUFBQztBQUFBLElBQUksUUFBUSxHQUFHLElBQUksQUFBQztBQUFBLElBQUksVUFBVSxHQUFHLEtBQUssQUFBQztBQUFBLElBQUksWUFBWSxHQUFHLGtCQUFrQixBQUFDO0FBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxJQUFJLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxPQUFPLENBQUMsR0FBQyxNQUFNLENBQUMsY0FBYyxJQUFFLENBQUE7UUFBQyxTQUFTLEVBQUMsRUFBRTtLQUFDLENBQUEsWUFBVyxLQUFLLElBQUUsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDO0tBQUMsSUFBRSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFHLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDO0tBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0NBQUMsQUFBQztBQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsU0FBUyxDQUFDLEdBQUU7UUFBQyxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUM7S0FBQztJQUFBLENBQUMsQ0FBQyxTQUFTLEdBQUMsQ0FBQyxLQUFHLElBQUksR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUEsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFBLEFBQUM7Q0FBQztBQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUFDLElBQUksQ0FBQyxHQUFDLE9BQU8sTUFBTSxJQUFFLFVBQVUsSUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEFBQUM7SUFBQSxPQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDO1FBQUMsSUFBSSxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBRyxDQUFBLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQSxBQUFDLEVBQUM7Z0JBQUMsS0FBSyxFQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUFDLENBQUE7U0FBQztLQUFDLENBQUE7Q0FBQztBQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLENBQUMsR0FBQyxPQUFPLE1BQU0sSUFBRSxVQUFVLElBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQUFBQztJQUFBLElBQUcsQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFBQSxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsQUFBQztJQUFBLElBQUc7UUFBQyxNQUFLLEFBQUMsQ0FBQSxDQUFDLEtBQUcsS0FBSyxDQUFDLElBQUUsQ0FBQyxFQUFFLEdBQUUsQ0FBQyxDQUFBLElBQUcsQ0FBQyxBQUFDLENBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FBQyxDQUFBLE9BQU0sQ0FBQyxFQUFDO1FBQUMsQ0FBQyxHQUFDO1lBQUMsS0FBSyxFQUFDLENBQUM7U0FBQztLQUFDLFFBQU87UUFBQyxJQUFHO1lBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRyxDQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FBQyxRQUFPO1lBQUMsSUFBRyxDQUFDLEVBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFBO1NBQUM7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUM7QUFBQSxTQUFTLENBQUMsR0FBRTtJQUFDLElBQUksSUFBSSxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxPQUFPLENBQUMsQ0FBQTtDQUFDO0FBQUEsSUFBSSxDQUFDLEdBQUMsV0FBVTtJQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQUFBQztRQUFBLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQTtLQUFDO0lBQUEsT0FBTyxDQUFDLENBQUE7Q0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsSUFBRyxDQUFBLENBQUMsR0FBQyxHQUFHLENBQUEsQUFBQyxFQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsSUFBRyxDQUFBLENBQUMsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDO1FBQUEsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQUFBQztRQUFBLE9BQU8sQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUE7S0FBQztJQUFBLE9BQU8sQ0FBQyxDQUFBO0NBQUMsQ0FBQyxDQUFDLENBQUMsQUFBQztBQUFBLElBQUksQ0FBQyxHQUFDLFdBQVU7SUFBQyxJQUFHLE9BQU8sU0FBUyxHQUFDLEdBQUcsRUFBQyxPQUFPLFNBQVMsQ0FBQTtDQUFDLEVBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxFQUFDO0lBQUMsT0FBTyxPQUFPLENBQUMsR0FBQyxHQUFHLElBQUUsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxLQUFHLENBQUMsQ0FBQTtDQUFDLEVBQUMsQ0FBQyxHQUFDO0lBQUMsb0JBQW9CLEVBQUMsR0FBRztJQUFD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QUFJLENBQUMsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7S0FBQztJQUFBLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLFlBQVksRUFBQztRQUFDLEdBQUcsRUFBQyxXQUFVO1lBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFBO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsTUFBTSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQztRQUFDLEdBQUcsRUFBQyxXQUFVO1lBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFBO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQTtTQUFDO1FBQUMsR0FBRyxFQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsSUFBRyxDQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQSxBQUFDO1NBQUM7UUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztLQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUFDO1FBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7S0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDO1FBQUMsR0FBRyxFQUFDLFdBQVU7WUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7Z0JBQUMsT0FBTyxPQUFPLENBQUMsSUFBRSxRQUFRLEdBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxZQUFZLElBQUksR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLElBQUksR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7YUFBQyxFQUFDLENBQUMsQ0FBQyxBQUFDO1lBQUEsT0FBTyxDQUFDLEdBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFVLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUM7UUFBQyxHQUFHLEVBQUMsV0FBVTtZQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUE7U0FBQztRQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUcsQ0FBQyxLQUFHLEtBQUssQ0FBQyxJQUFHLENBQUEsQ0FBQyxHQUFDLEdBQUcsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUFBLE9BQU07U0FBQztRQUFBLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUFBLE9BQU07U0FBQztRQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRSxDQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQSxBQUFDO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxTQUFTLENBQUMsRUFBQztRQUFDLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBRyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUk7WUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFDLENBQUMsR0FBQyxDQUFDLEtBQUcsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLG1CQUFtQixHQUFDLENBQUMsQUFBQztZQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRyxDQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUM7U0FBQztLQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxBQUFDO1FBQUEsSUFBRyxDQUFDLEVBQUMsSUFBRztZQUFDLElBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQUFBQztnQkFBQSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUFDO1NBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztZQUFDLENBQUMsR0FBQztnQkFBQyxLQUFLLEVBQUMsQ0FBQzthQUFDO1NBQUMsUUFBTztZQUFDLElBQUc7Z0JBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRyxDQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFBQyxRQUFPO2dCQUFDLElBQUcsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQTthQUFDO1NBQUM7UUFBQSxPQUFNLENBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQUMsT0FBTyxDQUFDLEtBQUcsQ0FBQyxDQUFBO1NBQUMsQ0FBQyxDQUFBLEFBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFdBQVU7UUFBQyxJQUFJLElBQUksQ0FBQyxHQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTTtTQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFDLFdBQVU7UUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsMkJBQTJCLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsMkJBQTJCLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEFBQUM7UUFBQSxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxJQUFHLENBQUEsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLElBQUcsQ0FBQSxDQUFDLEdBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxXQUFVO1FBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxBQUFDO1FBQUEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztZQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQUMsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxTQUFTLENBQUMsRUFBQztRQUFDLElBQUcsT0FBTyxDQUFDLElBQUUsUUFBUSxFQUFDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFBLElBQUcsT0FBTyxDQUFDLElBQUUsVUFBVSxFQUFDO1lBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLEFBQUM7WUFBQSxJQUFHLE9BQU8sQ0FBQyxJQUFFLFFBQVEsRUFBQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQSxJQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUE7U0FBQztRQUFBLE1BQU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBQyxXQUFVO1FBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxBQUFDO1FBQUEsSUFBRyxDQUFFLENBQUEsSUFBSSxDQUFDLFlBQVksSUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxBQUFDLEVBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUEsSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxLQUFHLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxHQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLENBQUMsR0FBQyxDQUFDLEtBQUcsS0FBSyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxBQUFDO1lBQUEsSUFBRyxJQUFJLENBQUMsV0FBVyxJQUFFLENBQUMsRUFBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFBLE9BQU07YUFBQztZQUFBLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQUEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFVO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7YUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDO2dCQUFDLENBQUMsQ0FBQyxZQUFZLElBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBQztvQkFBQyxHQUFHLEVBQUMsQ0FBQztvQkFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLFVBQVU7aUJBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBQyxVQUFVLENBQUMsV0FBVTtvQkFBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtpQkFBQyxFQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUM7YUFBQyxDQUFDO1NBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFDLFdBQVU7UUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFHLENBQUMsS0FBRyxLQUFLLENBQUMsSUFBRyxDQUFBLENBQUMsR0FBQyxHQUFHLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQUEsSUFBRztnQkFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQUMsQ0FBQSxPQUFLLEVBQUU7U0FBQztLQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUMsV0FBVTtRQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxDQUFDO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLGFBQWEsSUFBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFDLFdBQVU7UUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUcsQ0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLEFBQUM7S0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFDLFdBQVU7UUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUcsQ0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxBQUFDO0tBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBQyxXQUFVO1FBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUFDLEVBQUMsQ0FBQyxDQUFBO0NBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLEFBQUM7QUFBQSxTQUFTLENBQUMsR0FBRTtJQUFDLE9BQU8sUUFBUSxJQUFHLENBQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUcsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUMsV0FBVyxDQUFBLEFBQUMsQ0FBQTtDQUFDO0FBQUEsU0FBUyxDQUFDLEdBQUU7SUFBQyxPQUFPLFFBQVEsSUFBRSxRQUFRLENBQUMsSUFBSSxDQUFBO0NBQUM7QUFBQSxJQUFJLENBQUMsR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQUFBQztBQUFDLENBQUEsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFBLElBQUcsT0FBTyxTQUFTLEdBQUMsR0FBRyxJQUFHLENBQUEsQ0FBQyxHQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsVUFBVSxJQUFFLFFBQVEsQ0FBQyxRQUFRLEtBQUcsUUFBUSxJQUFFLENBQUMsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsS0FBSyxHQUFDLENBQUMsR0FBRSxDQUFBLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQSxHQUFFLEdBQUcsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLGVBQWUsQ0FBQyxFQUFDO0lBQUMsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUM7UUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQUFBQztRQUFBLElBQUcsQ0FBQyxDQUFDLElBQUksS0FBRyxRQUFRLElBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsR0FBRSxDQUFDLENBQUMsSUFBSSxLQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUMsTUFBTSxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBRSxVQUFVLEdBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRSxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQUMscUJBQXFCLEVBQUMsQ0FBQyxDQUFDO1NBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQSxBQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBRSxPQUFPLFFBQVEsQ0FBQyxN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QUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7UUFDcEMsVUFBVSxFQUFFLElBQUk7UUFDaEIsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDLENBQUM7Q0FDSixDQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1kMWY1OTZiZmUxMGRmNGY0LmpzIiwic3JjL2NvbnRlbnQudHMiLCJzcmMvdXRpbC50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gMTgxNTt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImU3OTJmYmJkYWE3OGVlODRcIjttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcImI3ZTdiOWRhNDgwYzAwYTNcIjt2YXIgaD1mdW5jdGlvbih0LGUpe3JldHVybiBoPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLG8pe24uX19wcm90b19fPW99fHxmdW5jdGlvbihuLG8pe2Zvcih2YXIgciBpbiBvKW8uaGFzT3duUHJvcGVydHkocikmJihuW3JdPW9bcl0pfSxoKHQsZSl9O2Z1bmN0aW9uIGQodCxlKXtoKHQsZSk7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9dH10LnByb3RvdHlwZT1lPT09bnVsbD9PYmplY3QuY3JlYXRlKGUpOihuLnByb3RvdHlwZT1lLnByb3RvdHlwZSxuZXcgbil9ZnVuY3Rpb24gdih0KXt2YXIgZT10eXBlb2YgU3ltYm9sPT1cImZ1bmN0aW9uXCImJnRbU3ltYm9sLml0ZXJhdG9yXSxuPTA7cmV0dXJuIGU/ZS5jYWxsKHQpOntuZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIHQmJm4+PXQubGVuZ3RoJiYodD12b2lkIDApLHt2YWx1ZTp0JiZ0W24rK10sZG9uZTohdH19fX1mdW5jdGlvbiBFKHQsZSl7dmFyIG49dHlwZW9mIFN5bWJvbD09XCJmdW5jdGlvblwiJiZ0W1N5bWJvbC5pdGVyYXRvcl07aWYoIW4pcmV0dXJuIHQ7dmFyIG89bi5jYWxsKHQpLHIsaT1bXSxzO3RyeXtmb3IoOyhlPT09dm9pZCAwfHxlLS0gPjApJiYhKHI9by5uZXh0KCkpLmRvbmU7KWkucHVzaChyLnZhbHVlKX1jYXRjaCh1KXtzPXtlcnJvcjp1fX1maW5hbGx5e3RyeXtyJiYhci5kb25lJiYobj1vLnJldHVybikmJm4uY2FsbChvKX1maW5hbGx5e2lmKHMpdGhyb3cgcy5lcnJvcn19cmV0dXJuIGl9ZnVuY3Rpb24gdygpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0PXQuY29uY2F0KEUoYXJndW1lbnRzW2VdKSk7cmV0dXJuIHR9dmFyIHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsbil7dGhpcy50YXJnZXQ9bix0aGlzLnR5cGU9ZX1yZXR1cm4gdH0oKSxPPWZ1bmN0aW9uKHQpe2QoZSx0KTtmdW5jdGlvbiBlKG4sbyl7dmFyIHI9dC5jYWxsKHRoaXMsXCJlcnJvclwiLG8pfHx0aGlzO3JldHVybiByLm1lc3NhZ2U9bi5tZXNzYWdlLHIuZXJyb3I9bixyfXJldHVybiBlfSh5KSxDPWZ1bmN0aW9uKHQpe2QoZSx0KTtmdW5jdGlvbiBlKG4sbyxyKXtuPT09dm9pZCAwJiYobj0xZTMpLG89PT12b2lkIDAmJihvPVwiXCIpO3ZhciBpPXQuY2FsbCh0aGlzLFwiY2xvc2VcIixyKXx8dGhpcztyZXR1cm4gaS53YXNDbGVhbj0hMCxpLmNvZGU9bixpLnJlYXNvbj1vLGl9cmV0dXJuIGV9KHkpO3ZhciBUPWZ1bmN0aW9uKCl7aWYodHlwZW9mIFdlYlNvY2tldDxcInVcIilyZXR1cm4gV2ViU29ja2V0fSxMPWZ1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdDxcInVcIiYmISF0JiZ0LkNMT1NJTkc9PT0yfSxhPXttYXhSZWNvbm5lY3Rpb25EZWxheToxZTQsbWluUmVjb25uZWN0aW9uRGVsYXk6MWUzK01hdGgucmFuZG9tKCkqNGUzLG1pblVwdGltZTo1ZTMscmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yOjEuMyxjb25uZWN0aW9uVGltZW91dDo0ZTMsbWF4UmV0cmllczoxLzAsbWF4RW5xdWV1ZWRNZXNzYWdlczoxLzAsc3RhcnRDbG9zZWQ6ITEsZGVidWc6ITF9LFM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsbixvKXt2YXIgcj10aGlzO289PT12b2lkIDAmJihvPXt9KSx0aGlzLl9saXN0ZW5lcnM9e2Vycm9yOltdLG1lc3NhZ2U6W10sb3BlbjpbXSxjbG9zZTpbXX0sdGhpcy5fcmV0cnlDb3VudD0tMSx0aGlzLl9zaG91bGRSZWNvbm5lY3Q9ITAsdGhpcy5fY29ubmVjdExvY2s9ITEsdGhpcy5fYmluYXJ5VHlwZT1cImJsb2JcIix0aGlzLl9jbG9zZUNhbGxlZD0hMSx0aGlzLl9tZXNzYWdlUXVldWU9W10sdGhpcy5vbmNsb3NlPW51bGwsdGhpcy5vbmVycm9yPW51bGwsdGhpcy5vbm1lc3NhZ2U9bnVsbCx0aGlzLm9ub3Blbj1udWxsLHRoaXMuX2hhbmRsZU9wZW49ZnVuY3Rpb24oaSl7ci5fZGVidWcoXCJvcGVuIGV2ZW50XCIpO3ZhciBzPXIuX29wdGlvbnMubWluVXB0aW1lLHU9cz09PXZvaWQgMD9hLm1pblVwdGltZTpzO2NsZWFyVGltZW91dChyLl9jb25uZWN0VGltZW91dCksci5fdXB0aW1lVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHIuX2FjY2VwdE9wZW4oKX0sdSksci5fd3MuYmluYXJ5VHlwZT1yLl9iaW5hcnlUeXBlLHIuX21lc3NhZ2VRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKGMpe3JldHVybiByLl93cy5zZW5kKGMpfSksci5fbWVzc2FnZVF1ZXVlPVtdLHIub25vcGVuJiZyLm9ub3BlbihpKSxyLl9saXN0ZW5lcnMub3Blbi5mb3JFYWNoKGZ1bmN0aW9uKGMpe3JldHVybiByLl9jYWxsRXZlbnRMaXN0ZW5lcihpLGMpfSl9LHRoaXMuX2hhbmRsZU1lc3NhZ2U9ZnVuY3Rpb24oaSl7ci5fZGVidWcoXCJtZXNzYWdlIGV2ZW50XCIpLHIub25tZXNzYWdlJiZyLm9ubWVzc2FnZShpKSxyLl9saXN0ZW5lcnMubWVzc2FnZS5mb3JFYWNoKGZ1bmN0aW9uKHMpe3JldHVybiByLl9jYWxsRXZlbnRMaXN0ZW5lcihpLHMpfSl9LHRoaXMuX2hhbmRsZUVycm9yPWZ1bmN0aW9uKGkpe3IuX2RlYnVnKFwiZXJyb3IgZXZlbnRcIixpLm1lc3NhZ2UpLHIuX2Rpc2Nvbm5lY3Qodm9pZCAwLGkubWVzc2FnZT09PVwiVElNRU9VVFwiP1widGltZW91dFwiOnZvaWQgMCksci5vbmVycm9yJiZyLm9uZXJyb3IoaSksci5fZGVidWcoXCJleGVjIGVycm9yIGxpc3RlbmVyc1wiKSxyLl9saXN0ZW5lcnMuZXJyb3IuZm9yRWFjaChmdW5jdGlvbihzKXtyZXR1cm4gci5fY2FsbEV2ZW50TGlzdGVuZXIoaSxzKX0pLHIuX2Nvbm5lY3QoKX0sdGhpcy5faGFuZGxlQ2xvc2U9ZnVuY3Rpb24oaSl7ci5fZGVidWcoXCJjbG9zZSBldmVudFwiKSxyLl9jbGVhclRpbWVvdXRzKCksci5fc2hvdWxkUmVjb25uZWN0JiZyLl9jb25uZWN0KCksci5vbmNsb3NlJiZyLm9uY2xvc2UoaSksci5fbGlzdGVuZXJzLmNsb3NlLmZvckVhY2goZnVuY3Rpb24ocyl7cmV0dXJuIHIuX2NhbGxFdmVudExpc3RlbmVyKGkscyl9KX0sdGhpcy5fdXJsPWUsdGhpcy5fcHJvdG9jb2xzPW4sdGhpcy5fb3B0aW9ucz1vLHRoaXMuX29wdGlvbnMuc3RhcnRDbG9zZWQmJih0aGlzLl9zaG91bGRSZWNvbm5lY3Q9ITEpLHRoaXMuX2Nvbm5lY3QoKX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJDT05ORUNUSU5HXCIse2dldDpmdW5jdGlvbigpe3JldHVybiAwfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiT1BFTlwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gMX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIkNMT1NJTkdcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDJ9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJDTE9TRURcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDN9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiQ09OTkVDVElOR1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdC5DT05ORUNUSU5HfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIk9QRU5cIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuT1BFTn0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJDTE9TSU5HXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0LkNMT1NJTkd9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiQ0xPU0VEXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0LkNMT1NFRH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJiaW5hcnlUeXBlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93cz90aGlzLl93cy5iaW5hcnlUeXBlOnRoaXMuX2JpbmFyeVR5cGV9LHNldDpmdW5jdGlvbihlKXt0aGlzLl9iaW5hcnlUeXBlPWUsdGhpcy5fd3MmJih0aGlzLl93cy5iaW5hcnlUeXBlPWUpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInJldHJ5Q291bnRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KHRoaXMuX3JldHJ5Q291bnQsMCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiYnVmZmVyZWRBbW91bnRcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fbWVzc2FnZVF1ZXVlLnJlZHVjZShmdW5jdGlvbihuLG8pe3JldHVybiB0eXBlb2Ygbz09XCJzdHJpbmdcIj9uKz1vLmxlbmd0aDpvIGluc3RhbmNlb2YgQmxvYj9uKz1vLnNpemU6bis9by5ieXRlTGVuZ3RoLG59LDApO3JldHVybiBlKyh0aGlzLl93cz90aGlzLl93cy5idWZmZXJlZEFtb3VudDowKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJleHRlbnNpb25zXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93cz90aGlzLl93cy5leHRlbnNpb25zOlwiXCJ9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicHJvdG9jb2xcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dzP3RoaXMuX3dzLnByb3RvY29sOlwiXCJ9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicmVhZHlTdGF0ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd3M/dGhpcy5fd3MucmVhZHlTdGF0ZTp0aGlzLl9vcHRpb25zLnN0YXJ0Q2xvc2VkP3QuQ0xPU0VEOnQuQ09OTkVDVElOR30sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ1cmxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dzP3RoaXMuX3dzLnVybDpcIlwifSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKGUsbil7aWYoZT09PXZvaWQgMCYmKGU9MWUzKSx0aGlzLl9jbG9zZUNhbGxlZD0hMCx0aGlzLl9zaG91bGRSZWNvbm5lY3Q9ITEsdGhpcy5fY2xlYXJUaW1lb3V0cygpLCF0aGlzLl93cyl7dGhpcy5fZGVidWcoXCJjbG9zZSBlbnF1ZXVlZDogbm8gd3MgaW5zdGFuY2VcIik7cmV0dXJufWlmKHRoaXMuX3dzLnJlYWR5U3RhdGU9PT10aGlzLkNMT1NFRCl7dGhpcy5fZGVidWcoXCJjbG9zZTogYWxyZWFkeSBjbG9zZWRcIik7cmV0dXJufXRoaXMuX3dzLmNsb3NlKGUsbil9LHQucHJvdG90eXBlLnJlY29ubmVjdD1mdW5jdGlvbihlLG4pe3RoaXMuX3Nob3VsZFJlY29ubmVjdD0hMCx0aGlzLl9jbG9zZUNhbGxlZD0hMSx0aGlzLl9yZXRyeUNvdW50PS0xLCF0aGlzLl93c3x8dGhpcy5fd3MucmVhZHlTdGF0ZT09PXRoaXMuQ0xPU0VEP3RoaXMuX2Nvbm5lY3QoKToodGhpcy5fZGlzY29ubmVjdChlLG4pLHRoaXMuX2Nvbm5lY3QoKSl9LHQucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oZSl7aWYodGhpcy5fd3MmJnRoaXMuX3dzLnJlYWR5U3RhdGU9PT10aGlzLk9QRU4pdGhpcy5fZGVidWcoXCJzZW5kXCIsZSksdGhpcy5fd3Muc2VuZChlKTtlbHNle3ZhciBuPXRoaXMuX29wdGlvbnMubWF4RW5xdWV1ZWRNZXNzYWdlcyxvPW49PT12b2lkIDA/YS5tYXhFbnF1ZXVlZE1lc3NhZ2VzOm47dGhpcy5fbWVzc2FnZVF1ZXVlLmxlbmd0aDxvJiYodGhpcy5fZGVidWcoXCJlbnF1ZXVlXCIsZSksdGhpcy5fbWVzc2FnZVF1ZXVlLnB1c2goZSkpfX0sdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihlLG4pe3RoaXMuX2xpc3RlbmVyc1tlXSYmdGhpcy5fbGlzdGVuZXJzW2VdLnB1c2gobil9LHQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIG4sbyxyPXRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdO2lmKHIpdHJ5e2Zvcih2YXIgaT12KHIpLHM9aS5uZXh0KCk7IXMuZG9uZTtzPWkubmV4dCgpKXt2YXIgdT1zLnZhbHVlO3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGUsdSl9fWNhdGNoKGMpe249e2Vycm9yOmN9fWZpbmFsbHl7dHJ5e3MmJiFzLmRvbmUmJihvPWkucmV0dXJuKSYmby5jYWxsKGkpfWZpbmFsbHl7aWYobil0aHJvdyBuLmVycm9yfX1yZXR1cm4hMH0sdC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihlLG4pe3RoaXMuX2xpc3RlbmVyc1tlXSYmKHRoaXMuX2xpc3RlbmVyc1tlXT10aGlzLl9saXN0ZW5lcnNbZV0uZmlsdGVyKGZ1bmN0aW9uKG8pe3JldHVybiBvIT09bn0pKX0sdC5wcm90b3R5cGUuX2RlYnVnPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLG49MDtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKWVbbl09YXJndW1lbnRzW25dO3RoaXMuX29wdGlvbnMuZGVidWcmJmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsdyhbXCJSV1M+XCJdLGUpKX0sdC5wcm90b3R5cGUuX2dldE5leHREZWxheT1mdW5jdGlvbigpe3ZhciBlPXRoaXMuX29wdGlvbnMsbj1lLnJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvcixvPW49PT12b2lkIDA/YS5yZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3I6bixyPWUubWluUmVjb25uZWN0aW9uRGVsYXksaT1yPT09dm9pZCAwP2EubWluUmVjb25uZWN0aW9uRGVsYXk6cixzPWUubWF4UmVjb25uZWN0aW9uRGVsYXksdT1zPT09dm9pZCAwP2EubWF4UmVjb25uZWN0aW9uRGVsYXk6cyxjPTA7cmV0dXJuIHRoaXMuX3JldHJ5Q291bnQ+MCYmKGM9aSpNYXRoLnBvdyhvLHRoaXMuX3JldHJ5Q291bnQtMSksYz51JiYoYz11KSksdGhpcy5fZGVidWcoXCJuZXh0IGRlbGF5XCIsYyksY30sdC5wcm90b3R5cGUuX3dhaXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuKXtzZXRUaW1lb3V0KG4sZS5fZ2V0TmV4dERlbGF5KCkpfSl9LHQucHJvdG90eXBlLl9nZXROZXh0VXJsPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiBlPT1cInN0cmluZ1wiKXJldHVybiBQcm9taXNlLnJlc29sdmUoZSk7aWYodHlwZW9mIGU9PVwiZnVuY3Rpb25cIil7dmFyIG49ZSgpO2lmKHR5cGVvZiBuPT1cInN0cmluZ1wiKXJldHVybiBQcm9taXNlLnJlc29sdmUobik7aWYobi50aGVuKXJldHVybiBufXRocm93IEVycm9yKFwiSW52YWxpZCBVUkxcIil9LHQucHJvdG90eXBlLl9jb25uZWN0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZighKHRoaXMuX2Nvbm5lY3RMb2NrfHwhdGhpcy5fc2hvdWxkUmVjb25uZWN0KSl7dGhpcy5fY29ubmVjdExvY2s9ITA7dmFyIG49dGhpcy5fb3B0aW9ucyxvPW4ubWF4UmV0cmllcyxyPW89PT12b2lkIDA/YS5tYXhSZXRyaWVzOm8saT1uLmNvbm5lY3Rpb25UaW1lb3V0LHM9aT09PXZvaWQgMD9hLmNvbm5lY3Rpb25UaW1lb3V0OmksdT1uLldlYlNvY2tldCxjPXU9PT12b2lkIDA/VCgpOnU7aWYodGhpcy5fcmV0cnlDb3VudD49cil7dGhpcy5fZGVidWcoXCJtYXggcmV0cmllcyByZWFjaGVkXCIsdGhpcy5fcmV0cnlDb3VudCxcIj49XCIscik7cmV0dXJufWlmKHRoaXMuX3JldHJ5Q291bnQrKyx0aGlzLl9kZWJ1ZyhcImNvbm5lY3RcIix0aGlzLl9yZXRyeUNvdW50KSx0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKSwhTChjKSl0aHJvdyBFcnJvcihcIk5vIHZhbGlkIFdlYlNvY2tldCBjbGFzcyBwcm92aWRlZFwiKTt0aGlzLl93YWl0KCkudGhlbihmdW5jdGlvbigpe3JldHVybiBlLl9nZXROZXh0VXJsKGUuX3VybCl9KS50aGVuKGZ1bmN0aW9uKGYpe2UuX2Nsb3NlQ2FsbGVkfHwoZS5fZGVidWcoXCJjb25uZWN0XCIse3VybDpmLHByb3RvY29sczplLl9wcm90b2NvbHN9KSxlLl93cz1lLl9wcm90b2NvbHM/bmV3IGMoZixlLl9wcm90b2NvbHMpOm5ldyBjKGYpLGUuX3dzLmJpbmFyeVR5cGU9ZS5fYmluYXJ5VHlwZSxlLl9jb25uZWN0TG9jaz0hMSxlLl9hZGRMaXN0ZW5lcnMoKSxlLl9jb25uZWN0VGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGUuX2hhbmRsZVRpbWVvdXQoKX0scykpfSl9fSx0LnByb3RvdHlwZS5faGFuZGxlVGltZW91dD1mdW5jdGlvbigpe3RoaXMuX2RlYnVnKFwidGltZW91dCBldmVudFwiKSx0aGlzLl9oYW5kbGVFcnJvcihuZXcgTyhFcnJvcihcIlRJTUVPVVRcIiksdGhpcykpfSx0LnByb3RvdHlwZS5fZGlzY29ubmVjdD1mdW5jdGlvbihlLG4pe2lmKGU9PT12b2lkIDAmJihlPTFlMyksdGhpcy5fY2xlYXJUaW1lb3V0cygpLCEhdGhpcy5fd3Mpe3RoaXMuX3JlbW92ZUxpc3RlbmVycygpO3RyeXt0aGlzLl93cy5jbG9zZShlLG4pLHRoaXMuX2hhbmRsZUNsb3NlKG5ldyBDKGUsbix0aGlzKSl9Y2F0Y2h7fX19LHQucHJvdG90eXBlLl9hY2NlcHRPcGVuPWZ1bmN0aW9uKCl7dGhpcy5fZGVidWcoXCJhY2NlcHQgb3BlblwiKSx0aGlzLl9yZXRyeUNvdW50PTB9LHQucHJvdG90eXBlLl9jYWxsRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihlLG4pe1wiaGFuZGxlRXZlbnRcImluIG4/bi5oYW5kbGVFdmVudChlKTpuKGUpfSx0LnByb3RvdHlwZS5fcmVtb3ZlTGlzdGVuZXJzPWZ1bmN0aW9uKCl7IXRoaXMuX3dzfHwodGhpcy5fZGVidWcoXCJyZW1vdmVMaXN0ZW5lcnNcIiksdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9wZW5cIix0aGlzLl9oYW5kbGVPcGVuKSx0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xvc2VcIix0aGlzLl9oYW5kbGVDbG9zZSksdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0aGlzLl9oYW5kbGVNZXNzYWdlKSx0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIix0aGlzLl9oYW5kbGVFcnJvcikpfSx0LnByb3RvdHlwZS5fYWRkTGlzdGVuZXJzPWZ1bmN0aW9uKCl7IXRoaXMuX3dzfHwodGhpcy5fZGVidWcoXCJhZGRMaXN0ZW5lcnNcIiksdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIix0aGlzLl9oYW5kbGVPcGVuKSx0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIix0aGlzLl9oYW5kbGVDbG9zZSksdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0aGlzLl9oYW5kbGVNZXNzYWdlKSx0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIix0aGlzLl9oYW5kbGVFcnJvcikpfSx0LnByb3RvdHlwZS5fY2xlYXJUaW1lb3V0cz1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl9jb25uZWN0VGltZW91dCksY2xlYXJUaW1lb3V0KHRoaXMuX3VwdGltZVRpbWVvdXQpfSx0fSgpLG09UztmdW5jdGlvbiBSKCl7cmV0dXJuIEhNUl9IT1NUfHwobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCIpfWZ1bmN0aW9uIHgoKXtyZXR1cm4gSE1SX1BPUlR8fGxvY2F0aW9uLnBvcnR9dmFyIGc9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7KCFnfHwhZy5pc1BhcmNlbFJlcXVpcmUpJiZ0eXBlb2YgV2ViU29ja2V0PFwidVwiJiYoXz1SKCkscD14KCksYj1ITVJfU0VDVVJFfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KF8pP1wid3NzXCI6XCJ3c1wiLGw9bmV3IG0oYitcIjovL1wiK18rKHA/XCI6XCIrcDpcIlwiKStcIi9cIiksY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yJiZsb2NhdGlvbi5yZWxvYWQoKSxsLm9ubWVzc2FnZT1hc3luYyBmdW5jdGlvbih0KXtpZighIWNocm9tZS5ydW50aW1lLmlkKXt2YXIgZT1KU09OLnBhcnNlKHQuZGF0YSk7aWYoZS50eXBlPT09XCJ1cGRhdGVcIiYmKGUuYXNzZXRzLmZpbHRlcihuPT5uLnR5cGU9PT1cImpzb25cIikubGVuZ3RoPjA/Y2hyb21lJiZjaHJvbWUucnVudGltZSYmdHlwZW9mIGNocm9tZS5ydW50aW1lLnJlbG9hZD09XCJmdW5jdGlvblwiP2Nocm9tZS5ydW50aW1lLnJlbG9hZCgpOihjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7X19wYXJjZWxfaG1yX3JlbG9hZF9fOiEwfSksbG9jYXRpb24ucmVsb2FkKCkpOiEhbG9jYXRpb24mJnR5cGVvZiBsb2NhdGlvbi5yZWxvYWQ9PVwiZnVuY3Rpb25cIj9sb2NhdGlvbi5yZWxvYWQoKTpjaHJvbWUucnVudGltZS5yZWxvYWQoKSksZS50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiBlLmRpYWdub3N0aWNzLmFuc2kpe2xldCBvPW4uY29kZWZyYW1lP24uY29kZWZyYW1lOm4uc3RhY2s7Y29uc29sZS5lcnJvcihcIlxcdXsxRjdFMX0gW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK28rYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fX0sbC5vbmVycm9yPWZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IodC5tZXNzYWdlKX0sbC5vbmNsb3NlPWZ1bmN0aW9uKHQpe3Byb2Nlc3MuZW52LlBBUkNFTF9CVUlMRF9FTlYhPT1cInRlc3RcIiYmY29uc29sZS53YXJuKFwiXFx1ezFGN0UxfSBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCwgdHJ5aW5nIHRvIHJlY29ubmVjdC4uLlwiKX0pO3ZhciBfLHAsYixsO1xuLyohXG4gKiBSZWNvbm5lY3RpbmcgV2ViU29ja2V0XG4gKiBieSBQZWRybyBMYWRhcmlhIDxwZWRyby5sYWRhcmlhQGdtYWlsLmNvbT5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wbGFkYXJpYS9yZWNvbm5lY3Rpbmctd2Vic29ja2V0XG4gKiBMaWNlbnNlIE1JVFxuICovXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXG5cblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiIsImltcG9ydCB7ICBnZXRFbGVtZW50QnlYcGF0aCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB0eXBlIHsgUGxhc21vQ29udGVudFNjcmlwdCB9IGZyb20gXCJwbGFzbW9cIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ29udGVudFNjcmlwdCA9IHtcbiAgbWF0Y2hlczogW1wiKjovL3JlYWQuYW1hem9uLmNvbS8qXCJdLFxufTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gIGlmIChtc2cubG9jYXRpb24gPT09IFwiYm9va1wiKSB7XG4gICAgY29uc3QgYm9va1RpdGxlID1cbiAgICAgIGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlLWRlZmF1bHRcIilbMF0udGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZm9vdGVyVGl0bGUgPVxuICAgICAgZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9vdGVyLXRpdGxlXCIpWzBdLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHBhZ2VJbmZvTGlzdCA9IGZvb3RlclRpdGxlLm1hdGNoKC9cXGQrL2cpO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gcGFnZUluZm9MaXN0WzBdO1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBwYWdlSW5mb0xpc3RbMV07XG5cbiAgICBzZW5kUmVzcG9uc2UoeyBib29rVGl0bGUsIGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2VzIH0pO1xuICB9IGVsc2UgaWYgKG1zZy5sb2NhdGlvbiA9PT0gXCJub3RlYm9va1wiKSB7XG4gICAgY29uc3QgYm9va1RpdGxlID0gZ2V0RWxlbWVudEJ5WHBhdGgoXG4gICAgICAnLy8qW0BpZD1cImFubm90YXRpb24tc2Nyb2xsZXJcIl0vZGl2L2RpdlsxXS9kaXZbMl0vaDMnXG4gICAgKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBoaWdobGlnaHRDb3VudCA9IGdldEVsZW1lbnRCeVhwYXRoKFxuICAgICAgJy8vKltAaWQ9XCJrcC1ub3RlYm9vay1oaWdobGlnaHRzLWNvdW50XCJdJ1xuICAgICkudGV4dENvbnRlbnQ7XG4gICAgY29uc3Qgbm90ZUNvdW50ID0gZ2V0RWxlbWVudEJ5WHBhdGgoXG4gICAgICAnLy8qW0BpZD1cImtwLW5vdGVib29rLW5vdGVzLWNvdW50XCJdJ1xuICAgICkudGV4dENvbnRlbnQ7XG5cbiAgICBzZW5kUmVzcG9uc2UoeyBib29rVGl0bGUsIGhpZ2hsaWdodENvdW50LCBub3RlQ291bnQgfSk7XG4gIH1cbn0pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeVhwYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZXZhbHVhdGUocGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEludGVnZXJzRnJvbVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0ci5tYXRjaCgvXFxkKy9nKS5qb2luKCcnKSk7XG59IiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImNvbnRlbnQuNDgwYzAwYTMuanMubWFwIn0=
