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
})({"ibVRB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "8ffb0b068e581ae2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dfWJz":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores noobidos_1 admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "obidos", ciudadT = "\xd3bidos";
var i_listado = 0;
var div = document.getElementById("div-hor-" + ciudad);
var img = document.getElementById("img-hor-" + ciudad);
var h2 = document.getElementById("h2-hor-" + ciudad);
var h3 = document.getElementById("h3-hor-" + ciudad);
// Asignar funciones al navegador
window.onload = ()=>{
    document.write((0, _listadosJs.l));
    document.write((0, _debugJs.debug));
};
window.siguiente_horizontal_obidos = cargar_obidos_h;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_obidos();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    cargar_obidos_h(1, 1);
    setTimeout(CambiarAutomaticamente, 5000);
}
function Normaliza(s) {
    var str = s.trim();
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function cargar_obidos_h(incremento, parametro) {
    var w = img.clientWidth;
    var listado, comentario, tiempo;
    listado = (0, _listadosJs.l).fotos.obidos_png_300_1;
    if (w > 600) listado = (0, _listadosJs.l).fotos.obidos_png_600_1;
    if (w > 1000) listado = (0, _listadosJs.l).fotos.obidos_png_900_1;
    switch(parametro){
        case 1:
            i_listado = i_listado + incremento;
            if (i_listado > listado.length - 1) i_listado = 0;
            if (i_listado < 0) i_listado = listado.length - 1;
            tiempo = new Date().getTime();
            img.onload = ()=>{
                tiempo = new Date().getTime() - tiempo;
                (0, _listadosJs.escribir_tiempo)(tiempo);
            };
            img.src = listado[i_listado];
            h2.innerHTML = "Fotos de " + ciudadT + ": " + (i_listado + 1) + " de " + listado.length; //+ " carga " +  tiempo_carga + "msg"; 
            comentario = (0, _listadosJs.l).comentario_1.obidos_1_comentario;
            img.alt = comentario[i_listado] + " " + i_listado;
            h3.innerHTML = Normaliza(comentario[i_listado]);
            break;
        case 2:
            break; // ????
    }
}
function pantallaCompleta_obidos() {
    var s = {
        navigationUI: "hide"
    };
    if (div.requestFullscreen) {
        div.requestFullscreen(s);
        return;
    }
    if (div.webkitRequestFullscreen) {
        div.webkitRequestFullscreen(s);
        return;
    } //safari
    if (div.msRequestFullscreen) {
        div.msRequestFullscreen(s);
        return;
    } // IE11 
} /*var div=document.getElementById('div-'+ ciudad);
var img= new Image();
var p= document.createElement("p")
var h2= document.createElement("h2")
img.className='diapositivas-horizontal-img-ciudad'; 
h3.className='diapositivas-horizontal-p-ciudad';
h2.className='diapositivas-horizontal-h2-ciudad';
div.appendChild(img);  
div.appendChild(h2);
div.appendChild(p); */  /*if (div==null)   console.log("div con id=div-%s no existe y la imagen de %s no se vera",ciudad,ciudad); */  /* Funciones */  /*
function CambiarAutomaticamente() { 
  var t=Math.random()*2000+3000;
  var inc=Math.floor( Math.random()*3+1);
  cargar_obidos_h(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}

function cargar_obidos_h(incremento,parametro){
  var w=img.clientWidth;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_1.obidos_1; 
  listado=   l.fotos.obidos_png_300_1;  
  if (w >  600) { listado=  l.fotos.obidos_png_100_1;  c= " mediana " ; }
  if (w > 1000) { listado=  l.fotos.obidos_png_900_1;  c= " grande " ; }
  
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1;       
      img.src=listado[i_listado];      
      img.alt= comentario[i_listado] + ' ' + i_listado;
      h3.innerHTML=comentario[i_listado] + ' ' + i_listado + " horizontal " +  c + ") Dobleclick para Pantalla completa ";      
      h2.innerHTML='hola';
      break;
    case 2: break; // ????
  }  
}
function pantallaCompleta() {  
  var s={ navigationUI: "hide" };
  if (div.requestFullscreen) {    
    div.requestFullscreen(s);
  } else {
      if (div.webkitRequestFullscreen) { // safari
          div.webkitRequestFullscreen(s);
      } else {
          if (div.msRequestFullscreen) { // IE11 
            div.msRequestFullscreen(s);
          }
    }
  }  
}
/*
function getFullscreenElement(div) {
  if (
    document.fullscreenElement || //* Standard syntax 
    document.webkitFullscreenElement || //* Safari and Opera syntax 
    document.msFullscreenElement || /* IE11 syntax 
    div.mozFullscreenElement
  ) 
  { return true;}
  return false;
  

function open_FullScreen()  {
  //var s=getFullscreenElement(div);
  //console.log(s);
  //if (s===undefined)  {console.log("abrir");}
  //else        {console.log("cerrar");closeFullscreen(div);}
  pantallaCompleta(div);
}
function closeFullscreen(div) {  
    
  if (div.exitFullscreen) {    
    div.exitFullscreen();
  } else {
      if (div.webkitexitFullscreen) { // safari
          div.webkitexitFullscreen();
      } else {
          if (div.msexitFullscreen) { // IE11 
            div.msexitFullscreen();
          }
    }
  }
  // Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa.
}






















/*
document.getElementById("button").addEventListener("click", () => {
toggleFullscreen()});
*/  //https://www.delftstack.com/es/howto/javascript/fullscreen-in-javascript/
 // https://webdesign.tutsplus.com/es/tutorials/how-to-build-a-full-screen-responsive-page-with-flexbox--cms-32086
 //function toggleFullscreen() { return pantallaCompleta(div).catch(console.log);}
 //function Open_Full_Screen() { pantallaCompleta(div).catch(console.log);}
 //function Close_Full_Screen(){closeFullscreen(div).catch(console.log);}

},{"/src/12-js/listados.js":"1pr6H","/src/12-js/debug.js":"ct35Q"}],"1pr6H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "l", ()=>l);
parcelHelpers.export(exports, "tiempo_carga", ()=>tiempo_carga);
parcelHelpers.export(exports, "escribir_tiempo", ()=>escribir_tiempo);
var nazaree_1_comentario = [
    "Santuario de Nuestra Se\xf1ora de Nazar\xe9",
    "Puerta faro Nazar\xe9",
    "Vista desde el faro de Nazar\xe9",
    "Vista desde el faro de Nazar\xe9",
    "PlayaSur Nazar\xe9",
    "Entrada faro Nazar\xe9",
    "ciudad de Nazar\xe9 ",
    "Vista monta\xf1a faro Nazar\xe9",
    "Playa Sur de Nazar\xe9",
    "Frutos del mar de Nazar\xe9",
    "Vista desde el faro de Nazar\xe9",
    "Museo de surf faro de Nazar\xe9",
    "Museo de surf faro de Nazar\xe9",
    "Vista del faro Nazar\xe9",
    "Playanorte de Nazar\xe9",
    "Monta\xf1a del faro de Nazar\xe9",
    "Faro de Nazar\xe9",
    "Faro de Nazar\xe9"
];
var fatima_1_comentario = [
    "Santuario de F\xe1tima",
    "Lapidas de Jacinta y Lucia",
    "Santuario de F\xe1tima",
    "Santuario de F\xe1tima de noche",
    "Interior del Santuario de F\xe1tima",
    "Exterior del Santuario de F\xe1tima",
    "Exterior del Santuario de F\xe1tima",
    "Exterior del Santuario de F\xe1tima"
];
var obidos_1_comentario = [
    "Castilo de \xd3bidos",
    "Castillo de \xd3bidos",
    "Museo Museu de Sardinha",
    "Vista de bidos"
];
var alcobasa_1_comentario = [
    "Monasterio de Alcoba\xe7a",
    "Vista interior Monasterio de Alcoba\xe7a",
    "Monasterio de Alcoba\xe7a",
    "Jardines del Monasterio de Alcoba\xe7a"
];
var sintra_1_comentario = [
    "Sintra",
    "Sala das Pegas Sintra",
    "Vista de Sintra",
    "Pal\xe1cio da Regaleira Sintra",
    "Palacio da Pena Sintra"
];
var nazaree_6_comentario = [
    "Estatua faro Nazar\xe9",
    "Museo faro Nazar\xe9",
    "Faro Nazar\xe9",
    "Caseta faro Nazar\xe9"
];
var fatima_6_comentario = [
    "Santuario de F\xe1tima",
    "Imagen pastoras del Santuario de F\xe1tima",
    "Imagen del Santuario de F\xe1tima",
    "Exterior delSantuario de F\xe1tima"
];
var obidos_6_comentario = [
    "Puerta de la muralla de \xd3bidos",
    "Muralla de \xd3bidos",
    "Puerta de la muralla \xd3bidos"
];
var alcobasa_6_comentario = [
    "Exterior Monasterio de Alcoba\xe7a",
    "Exterior Monasterio de Alcoba\xe7a",
    "Interior Monasterio de Alcoba\xe7a",
    "Interior Monasterio de Alcoba\xe7a",
    "Interior Monasterio de Alcoba\xe7a"
];
var sintra_6_comentario = [
    "Ciudad de Sintra",
    "Pal\xe1cio Nacional Sintra",
    "Pal\xe1cio Nacional Sintra",
    "Pal\xe1cio da Regaleira Sintra",
    "Pal\xe1cio da Pena Sintra",
    "Pal\xe1cio da Pena Sintra",
    "Pal\xe1cio da Regaleira Sintra",
    "Pal\xe1cio da Regaleira Sintra"
];
var nazaree_png_300_1 = [
    new URL(require("86781a753eb4dbf")),
    new URL(require("89ea5d03c92266e0")),
    new URL(require("4b3eab43661026ee")),
    new URL(require("1b58bb2c4e8118db")),
    new URL(require("a73d7c9e4390513b")),
    new URL(require("18f01d5dbbda959")),
    new URL(require("5b20b0e56b82945a")),
    new URL(require("c5cb6c0359b0662d")),
    new URL(require("a63b65706a9c9fe5")),
    new URL(require("e748f6caa373ab73")),
    new URL(require("dfdedac191fae4f0")),
    new URL(require("f6f096fdb88eaef6")),
    new URL(require("9280d8a758940830")),
    new URL(require("282ccbf2baeec961")),
    new URL(require("d39f9622f5686817")),
    new URL(require("483f2d56ab4cdedd")),
    new URL(require("da461ea778990854"))
];
var nazaree_png_600_1 = [
    new URL(require("96f651fb571aa9eb")),
    new URL(require("e543a391b0f85f4f")),
    new URL(require("a8cf664de7077859")),
    new URL(require("598ca8ca53d8a49b")),
    new URL(require("3c3b7f9d3e56e115")),
    new URL(require("954440e7a3d1f441")),
    new URL(require("b4cb97e52f2cbd52")),
    new URL(require("7b09e4309565582d")),
    new URL(require("e6ea0af4531463e2")),
    new URL(require("42085257a46e5e09")),
    new URL(require("6b3ddeea96e7d95a")),
    new URL(require("afe3ae5977faa1f8")),
    new URL(require("9446df6f7494726d")),
    new URL(require("62a84e90f44c3be3")),
    new URL(require("a531b65afc6a06b0")),
    new URL(require("323e4a910dee7e0a")),
    new URL(require("5adaf0b1f2da779b"))
];
var nazaree_png_900_1 = [
    new URL(require("18015bf652a8590c")),
    new URL(require("839e19b40af20bc9")),
    new URL(require("a51b127073443e8b")),
    new URL(require("334a20b09cebc20f")),
    new URL(require("d3c31bcf734c4b17")),
    new URL(require("91fb4da4c9f50617")),
    new URL(require("7951652e2eeb278f")),
    new URL(require("9d81a0598f30e880")),
    new URL(require("f7184a54f57fe61e")),
    new URL(require("aa4e305c904a8bdc")),
    new URL(require("e3c230bc4328e939")),
    new URL(require("91da9c9beb8cec92")),
    new URL(require("6788e9eb952c5639")),
    new URL(require("3e1f56c3a8f09a92")),
    new URL(require("ba8d1fe6ef07e224")),
    new URL(require("e7ed43fffc09e558")),
    new URL(require("eb7f4bebc9ae34f3"))
];
var nazaree_png_300_6 = [
    new URL(require("f49bbc3ce90230f3")),
    new URL(require("c6cc8feb00c43ccc")),
    new URL(require("da3e98b22adbeb4d"))
];
var nazaree_png_600_6 = [
    new URL(require("ac988f97513b753d")),
    new URL(require("9870197f68f46ce0")),
    new URL(require("1909d7c96cdc25f"))
];
var nazaree_png_900_6 = [
    new URL(require("71900ce38a39f45e")),
    new URL(require("d10c891d581aa72e")),
    new URL(require("4e86e364e53b9592"))
];
var fatima_png_300_1 = [
    new URL(require("da9d375ff4cc6e20")),
    new URL(require("4dc71cac2c1091fe")),
    new URL(require("2ae7e13dc9f19b08")),
    new URL(require("d4a94a2ec96f0f2a")),
    new URL(require("4d0999fb1640b484")),
    new URL(require("7eb1276e543406ee")),
    new URL(require("a1c7d50e344e35d"))
];
var fatima_png_600_1 = [
    new URL(require("d8d3e9b2c45514ef")),
    new URL(require("73770b04ebc58a8f")),
    new URL(require("3e326606efe38636")),
    new URL(require("6911c8c8c7ec7f4b")),
    new URL(require("8bfeb5a28916238c")),
    new URL(require("f9da5f86d76bdb5b")),
    new URL(require("ab0ad55909afb45d"))
];
var fatima_png_900_1 = [
    new URL(require("12b4ab72d67dbba1")),
    new URL(require("3fdef08c5feabc1f")),
    new URL(require("97900455fc019c34")),
    new URL(require("b1db13bef3dedd4")),
    new URL(require("8c3d146eaaa021db")),
    new URL(require("8188eea6f1104e67")),
    new URL(require("ddf969591a3cfbba"))
];
var fatima_png_300_6 = [
    new URL(require("f51181bb6365decf")),
    new URL(require("cd282a7a417c03b7")),
    new URL(require("32d9f1c4543900f0"))
];
var fatima_png_600_6 = [
    new URL(require("e759ed436cf99224")),
    new URL(require("dfb837cbc24b9472")),
    new URL(require("e112f5b01b10cbb3"))
];
var fatima_png_900_6 = [
    new URL(require("1166f1f821e20afd")),
    new URL(require("201fc2d2fa0f7eac")),
    new URL(require("11280debdefd0431"))
];
var obidos_png_300_1 = [
    new URL(require("cdfa70ae1d308d00")),
    new URL(require("f34fe41922b2586d")),
    new URL(require("8fe9ec68514a39e3"))
];
var obidos_png_600_1 = [
    new URL(require("deb2151dfbb509cd")),
    new URL(require("10cc9bcddfb0a9e3")),
    new URL(require("8766a5d2d9a1cbe5"))
];
var obidos_png_900_1 = [
    new URL(require("2346505ad78baa47")),
    new URL(require("565cc7de1c720893")),
    new URL(require("20604925b297b483"))
];
var obidos_png_300_6 = [
    new URL(require("b60f28e19ed5645d")),
    new URL(require("46a3ac90ead8eb4b"))
];
var obidos_png_600_6 = [
    new URL(require("8f8930169555991d")),
    new URL(require("54bfe7ee4aef0962"))
];
var obidos_png_900_6 = [
    new URL(require("773d8be78472f983")),
    new URL(require("d562071e9c1ece6"))
];
var alcobasa_png_300_1 = [
    new URL(require("b4fcf97888be254")),
    new URL(require("9935775539310a4")),
    new URL(require("dfd60661f83422de"))
];
var alcobasa_png_600_1 = [
    new URL(require("9d0c04b5449c6e78")),
    new URL(require("720ccb4e93255b25")),
    new URL(require("6ccaff7eb0bdeb93"))
];
var alcobasa_png_900_1 = [
    new URL(require("4806d8e218627ab5")),
    new URL(require("2c4f60e32f378ca9")),
    new URL(require("865f538633d0b1dc"))
];
var alcobasa_png_300_6 = [
    new URL(require("39be71bc5a9474e0")),
    new URL(require("862f63336e6a3803")),
    new URL(require("64389f8910c4a5b9")),
    new URL(require("47d3b6b473ade444"))
];
var alcobasa_png_600_6 = [
    new URL(require("af58e9024f3ec2aa")),
    new URL(require("d5c714291b3e2173")),
    new URL(require("d9f14ea8509d3156")),
    new URL(require("e23e1493d8180c78"))
];
var alcobasa_png_900_6 = [
    new URL(require("bd8f00b86989f84b")),
    new URL(require("f164ec680e944d6d")),
    new URL(require("fc926fb4ed15df4")),
    new URL(require("77d47f70247ccaa0"))
];
var sintra_png_300_1 = [
    new URL(require("213ed12e877bdf8")),
    new URL(require("337f47ad9c8e55bb")),
    new URL(require("dc15afeda3fdbc10")),
    new URL(require("ffdc7890af793ea9"))
];
var sintra_png_600_1 = [
    new URL(require("dd871b27f50d719f")),
    new URL(require("e3ed8d3f9f24501d")),
    new URL(require("a661ec8bde091a63")),
    new URL(require("289dada425dcdbf0"))
];
var sintra_png_900_1 = [
    new URL(require("93ca55a06b72c0f4")),
    new URL(require("3343679c8bbbb107")),
    new URL(require("fb58c487e522e11b")),
    new URL(require("d696c059aa7292c1"))
];
var sintra_png_300_6 = [
    new URL(require("4f72da706ff07282")),
    new URL(require("2d95b671d5e6b31d")),
    new URL(require("2f4a2df8e9e6c6c5")),
    new URL(require("c26a8c456b0bfbbd")),
    new URL(require("3f701d22f6a1ae4f")),
    new URL(require("19450e227fa8d4e6")),
    new URL(require("1e27e0a9c5922d42"))
];
var sintra_png_600_6 = [
    new URL(require("a084f06dc30f536f")),
    new URL(require("2fa52e674a840793")),
    new URL(require("e94ec1065f59594f")),
    new URL(require("4a3d192459069081")),
    new URL(require("b65864aa197fa6d0")),
    new URL(require("c7939ca45e20c9e6")),
    new URL(require("4e948917a9e514ef"))
];
var sintra_png_900_6 = [
    new URL(require("3898a29ba68820")),
    new URL(require("26317caa31b191b2")),
    new URL(require("42715847c1bc4744")),
    new URL(require("421a5f52f1a54bf2")),
    new URL(require("7b382b2b0bbad026")),
    new URL(require("efcbb5cde267920c")),
    new URL(require("ecaccd9706afa493"))
];
var fotos = {
    nazaree_png_300_1: nazaree_png_300_1,
    nazaree_png_600_1: nazaree_png_600_1,
    nazaree_png_900_1: nazaree_png_900_1,
    nazaree_png_300_6: nazaree_png_300_6,
    nazaree_png_600_6: nazaree_png_600_6,
    nazaree_png_900_6: nazaree_png_900_6,
    fatima_png_300_1: fatima_png_300_1,
    fatima_png_600_1: fatima_png_600_1,
    fatima_png_900_1: fatima_png_900_1,
    fatima_png_300_6: fatima_png_300_6,
    fatima_png_600_6: fatima_png_600_6,
    fatima_png_900_6: fatima_png_900_6,
    obidos_png_300_1: obidos_png_300_1,
    obidos_png_600_1: obidos_png_600_1,
    obidos_png_900_1: obidos_png_900_1,
    obidos_png_300_6: obidos_png_300_6,
    obidos_png_600_6: obidos_png_600_6,
    obidos_png_900_6: obidos_png_900_6,
    alcobasa_png_300_1: alcobasa_png_300_1,
    alcobasa_png_600_1: alcobasa_png_600_1,
    alcobasa_png_900_1: alcobasa_png_900_1,
    alcobasa_png_300_6: alcobasa_png_300_6,
    alcobasa_png_600_6: alcobasa_png_600_6,
    alcobasa_png_900_6: alcobasa_png_900_6,
    sintra_png_300_1: sintra_png_300_1,
    sintra_png_600_1: sintra_png_600_1,
    sintra_png_900_1: sintra_png_900_1,
    sintra_png_300_6: sintra_png_300_6,
    sintra_png_600_6: sintra_png_600_6,
    sintra_png_900_6: sintra_png_900_6
};
var alcobasa_mp4_comentario = [
    "Vista interior del Monasterio de Alcoba\xe7a",
    "Monasterio de Alcoba\xe7a"
];
var alcobasa_mp4_320 = [
    new URL(require("29dd4c45ad77a411")),
    new URL(require("9ebc252dff86358a"))
];
var alcobasa_mp4_640 = [
    new URL(require("181e6b8ac3026ce3")),
    new URL(require("f0d63a691568917b"))
];
var alcobasa_mp4_1280 = [
    new URL(require("cb2bff42f9bf1da3")),
    new URL(require("2008e68ae020640b"))
];
var fatima_mp4_comentario = [
    "Interior Santuario de F\xe1tima",
    "Interior Santuario de F\xe1tima"
];
var fatima_mp4_320 = [
    new URL(require("7703d2aff3ac19f2")),
    new URL(require("cc7873bdb72ab106"))
];
var fatima_mp4_640 = [
    new URL(require("ddb0c8ec6e1128ec")),
    new URL(require("f0fdfe553e8b2b8b"))
];
var fatima_mp4_1280 = [
    new URL(require("83fd77e6e3d1ed4d")),
    new URL(require("bfdc94773439b970"))
];
var nazaree_mp4_comentario = [
    "Playa sur Nazar\xe9",
    "Playa sur Nazar\xe9",
    "Playa sur Nazar\xe9",
    "Olas Nazar\xe9"
];
var nazaree_mp4_320 = [
    new URL(require("e53408e84c34725c")),
    new URL(require("dee32d35a055d161")),
    new URL(require("8eb0fe6d497319ac")),
    new URL(require("2d4bf2da7d0a6ebf"))
];
var nazaree_mp4_640 = [
    new URL(require("97707bd921d6bd97")),
    new URL(require("112c0986b11e3773")),
    new URL(require("3d504689dbdd2069")),
    new URL(require("38539e1f0ba5a0da"))
];
var nazaree_mp4_1280 = [
    new URL(require("adf6607a48b65015")),
    new URL(require("6a060de4f8cd5f51")),
    new URL(require("a1a4532e178c00e4")),
    new URL(require("644f90a72aefea2f"))
];
var sintra_mp4_comentario = [
    "Palacio Nacional de Sintra"
];
var sintra_mp4_320 = [
    new URL(require("67704ca106e263d"))
];
var sintra_mp4_640 = [
    new URL(require("5aa9c5adff06bff6"))
];
var sintra_mp4_1280 = [
    new URL(require("d2192ee8df9e83c3"))
];
var obidos_mp4_comentario = [
    "Castillo de \xd3bidos",
    "Ciudad amurallada de \xd3bidos",
    "Ciudad amurallada de \xd3bidos"
];
var obidos_mp4_320 = [
    new URL(require("11023e0d66f4a5c6")),
    new URL(require("a1c31f725c1b9044")),
    new URL(require("557036c03b3c0cf2"))
];
var obidos_mp4_640 = [
    new URL(require("cfcd6ed14b0881ce")),
    new URL(require("c49dc6a73b22dff2")),
    new URL(require("feb7bc20d8ad2999"))
];
var obidos_mp4_1280 = [
    new URL(require("44700e4b32d1904e")),
    new URL(require("b917fe1860ba64a6")),
    new URL(require("19f93dc81edaaaf1"))
];
var alcobasa_mp4 = [
    alcobasa_mp4_320,
    alcobasa_mp4_640,
    alcobasa_mp4_1280
];
var fatima_mp4 = [
    fatima_mp4_320,
    fatima_mp4_640,
    fatima_mp4_1280
];
var nazaree_mp4 = [
    nazaree_mp4_320,
    nazaree_mp4_640,
    nazaree_mp4_1280
];
var sintra_mp4 = [
    sintra_mp4_320,
    sintra_mp4_640,
    sintra_mp4_1280
];
var obidos_mp4 = [
    obidos_mp4_320,
    obidos_mp4_640,
    obidos_mp4_1280
];
var mp4 = {
    alcobasa_mp4: alcobasa_mp4,
    fatima_mp4: fatima_mp4,
    nazaree_mp4: nazaree_mp4,
    sintra_mp4: sintra_mp4,
    obidos_mp4: obidos_mp4
};
var alcobasa_duracion = [
    33,
    17
];
var fatima_duracion = [
    34,
    29
];
var nazare_duracion = [
    29,
    23,
    18,
    38
];
var nazaree_duracion = [
    29,
    23,
    18,
    38
];
var sintra_duracion = [
    30
];
var obidos_duracion = [
    28,
    17,
    18
];
var duracion = {
    alcobasa_duracion: alcobasa_duracion,
    fatima_duracion: fatima_duracion,
    nazaree_duracion: nazaree_duracion,
    nazare_duracion: nazare_duracion,
    sintra_duracion: sintra_duracion,
    obidos_duracion: obidos_duracion
};
var ciudades = [
    "alcobasa",
    "nazare",
    "fatima",
    "obidos",
    "sintra"
];
var comentario_1 = {
    nazaree_1_comentario: nazaree_1_comentario,
    fatima_1_comentario: fatima_1_comentario,
    obidos_1_comentario: obidos_1_comentario,
    alcobasa_1_comentario: alcobasa_1_comentario,
    sintra_1_comentario: sintra_1_comentario
};
var comentario_6 = {
    nazaree_6_comentario: nazaree_6_comentario,
    fatima_6_comentario: fatima_6_comentario,
    obidos_6_comentario: obidos_6_comentario,
    alcobasa_6_comentario: alcobasa_6_comentario,
    sintra_6_comentario: sintra_6_comentario
};
var comentario_mp4 = {
    nazaree_mp4_comentario: nazaree_mp4_comentario,
    fatima_mp4_comentario: fatima_mp4_comentario,
    obidos_mp4_comentario: obidos_mp4_comentario,
    alcobasa_mp4_comentario: alcobasa_mp4_comentario,
    sintra_mp4_comentario: sintra_mp4_comentario
};
var l = {
    comentario_1: comentario_1,
    comentario_6: comentario_6,
    comentario_mp4: comentario_mp4,
    fotos: fotos,
    mp4: mp4,
    ciudades: ciudades,
    duracion: duracion
};
var tiempo_carga = 10; // solo se puede leer fuera para eesribir utilizar la función
function escribir_tiempo(t) {
    tiempo_carga = t;
} // Para escibir los datos

},{"86781a753eb4dbf":"cKmRo","89ea5d03c92266e0":"l3h5M","4b3eab43661026ee":"dYl4s","1b58bb2c4e8118db":"lb58d","a73d7c9e4390513b":"haOwK","18f01d5dbbda959":"83Tih","5b20b0e56b82945a":"bEClw","c5cb6c0359b0662d":"deHPw","a63b65706a9c9fe5":"frbWr","e748f6caa373ab73":"lx9TV","dfdedac191fae4f0":"5faPH","f6f096fdb88eaef6":"jqeg1","9280d8a758940830":"hi01a","282ccbf2baeec961":"kjmM1","d39f9622f5686817":"3CtVD","483f2d56ab4cdedd":"bwWGY","da461ea778990854":"26sWX","96f651fb571aa9eb":"aSKbl","e543a391b0f85f4f":"d4cm1","a8cf664de7077859":"9bvID","598ca8ca53d8a49b":"99QDE","3c3b7f9d3e56e115":"jofaL","954440e7a3d1f441":"dE6OL","b4cb97e52f2cbd52":"dbDiw","7b09e4309565582d":"UlG3J","e6ea0af4531463e2":"5q9Fs","42085257a46e5e09":"gmNa8","6b3ddeea96e7d95a":"b9SN0","afe3ae5977faa1f8":"4A40p","9446df6f7494726d":"jZ7wI","62a84e90f44c3be3":"aNVyK","a531b65afc6a06b0":"eWWUy","323e4a910dee7e0a":"2sEey","5adaf0b1f2da779b":"cMY64","18015bf652a8590c":"1jX4p","839e19b40af20bc9":"iJxok","a51b127073443e8b":"jqU15","334a20b09cebc20f":"9e7Wp","d3c31bcf734c4b17":"8o91D","91fb4da4c9f50617":"dECH1","7951652e2eeb278f":"lvirJ","9d81a0598f30e880":"5sE13","f7184a54f57fe61e":"lEKUv","aa4e305c904a8bdc":"aZe58","e3c230bc4328e939":"cp38Z","91da9c9beb8cec92":"2iKPV","6788e9eb952c5639":"5UsC4","3e1f56c3a8f09a92":"eUYrf","ba8d1fe6ef07e224":"BYwdJ","e7ed43fffc09e558":"iS5hr","eb7f4bebc9ae34f3":"21DlG","f49bbc3ce90230f3":"hP3Tu","c6cc8feb00c43ccc":"6y5uU","da3e98b22adbeb4d":"eFYmW","ac988f97513b753d":"eGdp7","9870197f68f46ce0":"2Vgxp","1909d7c96cdc25f":"6zZMF","71900ce38a39f45e":"4ZTFT","d10c891d581aa72e":"14Xx6","4e86e364e53b9592":"bKyXx","da9d375ff4cc6e20":"k4uKr","4dc71cac2c1091fe":"aQYCt","2ae7e13dc9f19b08":"80K36","d4a94a2ec96f0f2a":"bH8XE","4d0999fb1640b484":"ksDIu","7eb1276e543406ee":"3illY","a1c7d50e344e35d":"bXBlD","d8d3e9b2c45514ef":"g7uNS","73770b04ebc58a8f":"ddqSn","3e326606efe38636":"8k95Q","6911c8c8c7ec7f4b":"4SHD7","8bfeb5a28916238c":"d1yzT","f9da5f86d76bdb5b":"1AXo5","ab0ad55909afb45d":"fKE4M","12b4ab72d67dbba1":"4io3N","3fdef08c5feabc1f":"UDWmW","97900455fc019c34":"cZJsR","b1db13bef3dedd4":"5ynvj","8c3d146eaaa021db":"aTzXv","8188eea6f1104e67":"1unSV","ddf969591a3cfbba":"c2Iva","f51181bb6365decf":"ifn8C","cd282a7a417c03b7":"iZavz","32d9f1c4543900f0":"bPUJ0","e759ed436cf99224":"7SUXU","dfb837cbc24b9472":"iVa1k","e112f5b01b10cbb3":"aQRJn","1166f1f821e20afd":"hFNBs","201fc2d2fa0f7eac":"6R68d","11280debdefd0431":"bfnI9","cdfa70ae1d308d00":"1Vq3z","f34fe41922b2586d":"4wyqP","8fe9ec68514a39e3":"jw2CD","deb2151dfbb509cd":"cZa9a","10cc9bcddfb0a9e3":"i7gRk","8766a5d2d9a1cbe5":"isAKa","2346505ad78baa47":"fxuLY","565cc7de1c720893":"hbmAj","20604925b297b483":"4cWmC","b60f28e19ed5645d":"3sM6x","46a3ac90ead8eb4b":"1Ghhn","8f8930169555991d":"eoXGI","54bfe7ee4aef0962":"VUePF","773d8be78472f983":"hdvMP","d562071e9c1ece6":"gvi3Z","b4fcf97888be254":"k8rDl","9935775539310a4":"lr1Vx","dfd60661f83422de":"h4hlA","9d0c04b5449c6e78":"hes0S","720ccb4e93255b25":"f229s","6ccaff7eb0bdeb93":"kQO8d","4806d8e218627ab5":"ie3FK","2c4f60e32f378ca9":"2Mtpo","865f538633d0b1dc":"gX0Rc","39be71bc5a9474e0":"a1xy9","862f63336e6a3803":"9OEVF","64389f8910c4a5b9":"hgwxr","47d3b6b473ade444":"715dr","af58e9024f3ec2aa":"ajBEO","d5c714291b3e2173":"1OfZG","d9f14ea8509d3156":"lmE8f","e23e1493d8180c78":"dzTjB","bd8f00b86989f84b":"jETKZ","f164ec680e944d6d":"6XxfN","fc926fb4ed15df4":"dQEiF","77d47f70247ccaa0":"9SOFm","213ed12e877bdf8":"XLfiy","337f47ad9c8e55bb":"1GRtq","dc15afeda3fdbc10":"dO4lP","ffdc7890af793ea9":"3joZX","dd871b27f50d719f":"3cEcq","e3ed8d3f9f24501d":"1Qc2a","a661ec8bde091a63":"j9ukh","289dada425dcdbf0":"bpNCk","93ca55a06b72c0f4":"jk57J","3343679c8bbbb107":"hHl2T","fb58c487e522e11b":"aXh5j","d696c059aa7292c1":"bKYxY","4f72da706ff07282":"e4yPa","2d95b671d5e6b31d":"3sIv6","2f4a2df8e9e6c6c5":"45rMC","c26a8c456b0bfbbd":"j9fdu","3f701d22f6a1ae4f":"g4bMV","19450e227fa8d4e6":"efbEK","1e27e0a9c5922d42":"lbheo","a084f06dc30f536f":"4ZpEg","2fa52e674a840793":"8bJ0x","e94ec1065f59594f":"9itfM","4a3d192459069081":"lWcGE","b65864aa197fa6d0":"8otrM","c7939ca45e20c9e6":"g7jj6","4e948917a9e514ef":"gR9FX","3898a29ba68820":"cPFlf","26317caa31b191b2":"d5Tk9","42715847c1bc4744":"ebRrh","421a5f52f1a54bf2":"2al61","7b382b2b0bbad026":"eCZLU","efcbb5cde267920c":"6TzzO","ecaccd9706afa493":"kQJCm","29dd4c45ad77a411":"7ML06","9ebc252dff86358a":"4kop1","181e6b8ac3026ce3":"fVYNK","f0d63a691568917b":"1mikI","cb2bff42f9bf1da3":"5mGZB","2008e68ae020640b":"dYeA7","7703d2aff3ac19f2":"cmroo","cc7873bdb72ab106":"bANfg","ddb0c8ec6e1128ec":"bMlWw","f0fdfe553e8b2b8b":"cHviO","83fd77e6e3d1ed4d":"iOiFc","bfdc94773439b970":"9Mts3","e53408e84c34725c":"gR3pH","dee32d35a055d161":"eUkTS","8eb0fe6d497319ac":"ljr7D","2d4bf2da7d0a6ebf":"8Dcun","97707bd921d6bd97":"gQe3F","112c0986b11e3773":"jEZmY","3d504689dbdd2069":"fgImB","38539e1f0ba5a0da":"ixBaN","adf6607a48b65015":"l6qmG","6a060de4f8cd5f51":"dZRBY","a1a4532e178c00e4":"jiJit","644f90a72aefea2f":"7eATr","67704ca106e263d":"XElZb","5aa9c5adff06bff6":"8HrqQ","d2192ee8df9e83c3":"dlTv4","11023e0d66f4a5c6":"h3QuM","a1c31f725c1b9044":"9E75h","557036c03b3c0cf2":"PChll","cfcd6ed14b0881ce":"4actR","c49dc6a73b22dff2":"g1LMG","feb7bc20d8ad2999":"1uztZ","44700e4b32d1904e":"dHccO","b917fe1860ba64a6":"kCHME","19f93dc81edaaaf1":"ch9ED","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"cKmRo":[function(require,module,exports) {
module.exports = require("1c99ea620588bd3d").getBundleURL("cmp8W") + "0.c05f597e.png" + "?" + Date.now();

},{"1c99ea620588bd3d":"dhz1j"}],"dhz1j":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"l3h5M":[function(require,module,exports) {
module.exports = require("a3773301b3eee801").getBundleURL("cmp8W") + "1.f5e0bbca.png" + "?" + Date.now();

},{"a3773301b3eee801":"dhz1j"}],"dYl4s":[function(require,module,exports) {
module.exports = require("f3364e0127917880").getBundleURL("cmp8W") + "2.6e5a4f0f.png" + "?" + Date.now();

},{"f3364e0127917880":"dhz1j"}],"lb58d":[function(require,module,exports) {
module.exports = require("277260617465164c").getBundleURL("cmp8W") + "3.f5fa0501.png" + "?" + Date.now();

},{"277260617465164c":"dhz1j"}],"haOwK":[function(require,module,exports) {
module.exports = require("e46175ab6e048ce7").getBundleURL("cmp8W") + "4.4abc774b.png" + "?" + Date.now();

},{"e46175ab6e048ce7":"dhz1j"}],"83Tih":[function(require,module,exports) {
module.exports = require("f38c22676aa7cd64").getBundleURL("cmp8W") + "5.da2c8650.png" + "?" + Date.now();

},{"f38c22676aa7cd64":"dhz1j"}],"bEClw":[function(require,module,exports) {
module.exports = require("a5bc3fed035db619").getBundleURL("cmp8W") + "6.ea9ec2f6.png" + "?" + Date.now();

},{"a5bc3fed035db619":"dhz1j"}],"deHPw":[function(require,module,exports) {
module.exports = require("a7d30ee8349650c4").getBundleURL("cmp8W") + "7.301ec684.png" + "?" + Date.now();

},{"a7d30ee8349650c4":"dhz1j"}],"frbWr":[function(require,module,exports) {
module.exports = require("2fa3a8c4e8ac090e").getBundleURL("cmp8W") + "8.b06abc28.png" + "?" + Date.now();

},{"2fa3a8c4e8ac090e":"dhz1j"}],"lx9TV":[function(require,module,exports) {
module.exports = require("417838de949a3ff9").getBundleURL("cmp8W") + "9.26742fae.png" + "?" + Date.now();

},{"417838de949a3ff9":"dhz1j"}],"5faPH":[function(require,module,exports) {
module.exports = require("680b2f96f66b8fb1").getBundleURL("cmp8W") + "10.822bf667.png" + "?" + Date.now();

},{"680b2f96f66b8fb1":"dhz1j"}],"jqeg1":[function(require,module,exports) {
module.exports = require("ef1a607610d778fd").getBundleURL("cmp8W") + "11.449a5e9c.png" + "?" + Date.now();

},{"ef1a607610d778fd":"dhz1j"}],"hi01a":[function(require,module,exports) {
module.exports = require("e90fb0e7de38c3cd").getBundleURL("cmp8W") + "12.d9546cf7.png" + "?" + Date.now();

},{"e90fb0e7de38c3cd":"dhz1j"}],"kjmM1":[function(require,module,exports) {
module.exports = require("270685c9296b3b1a").getBundleURL("cmp8W") + "13.974d4d52.png" + "?" + Date.now();

},{"270685c9296b3b1a":"dhz1j"}],"3CtVD":[function(require,module,exports) {
module.exports = require("76452620e9123af0").getBundleURL("cmp8W") + "14.52e1ebb3.png" + "?" + Date.now();

},{"76452620e9123af0":"dhz1j"}],"bwWGY":[function(require,module,exports) {
module.exports = require("5c3e3044f3aeba20").getBundleURL("cmp8W") + "15.d1a1daf0.png" + "?" + Date.now();

},{"5c3e3044f3aeba20":"dhz1j"}],"26sWX":[function(require,module,exports) {
module.exports = require("899f00142ea9085b").getBundleURL("cmp8W") + "16.50f9fa1d.png" + "?" + Date.now();

},{"899f00142ea9085b":"dhz1j"}],"aSKbl":[function(require,module,exports) {
module.exports = require("d86f5bd82c2bd3a8").getBundleURL("cmp8W") + "0.193e2e66.png" + "?" + Date.now();

},{"d86f5bd82c2bd3a8":"dhz1j"}],"d4cm1":[function(require,module,exports) {
module.exports = require("78be4159454070bf").getBundleURL("cmp8W") + "1.a5561b19.png" + "?" + Date.now();

},{"78be4159454070bf":"dhz1j"}],"9bvID":[function(require,module,exports) {
module.exports = require("7fe21c954a8f0661").getBundleURL("cmp8W") + "2.4495a959.png" + "?" + Date.now();

},{"7fe21c954a8f0661":"dhz1j"}],"99QDE":[function(require,module,exports) {
module.exports = require("fdc73a8bbb91df11").getBundleURL("cmp8W") + "3.17530a32.png" + "?" + Date.now();

},{"fdc73a8bbb91df11":"dhz1j"}],"jofaL":[function(require,module,exports) {
module.exports = require("f891f87409b293ad").getBundleURL("cmp8W") + "4.2b6bb0c6.png" + "?" + Date.now();

},{"f891f87409b293ad":"dhz1j"}],"dE6OL":[function(require,module,exports) {
module.exports = require("79e13dbea5c3133f").getBundleURL("cmp8W") + "5.15620d2d.png" + "?" + Date.now();

},{"79e13dbea5c3133f":"dhz1j"}],"dbDiw":[function(require,module,exports) {
module.exports = require("a994c2764fcac649").getBundleURL("cmp8W") + "6.d6e35f7b.png" + "?" + Date.now();

},{"a994c2764fcac649":"dhz1j"}],"UlG3J":[function(require,module,exports) {
module.exports = require("ea19639130b71701").getBundleURL("cmp8W") + "7.9ec250db.png" + "?" + Date.now();

},{"ea19639130b71701":"dhz1j"}],"5q9Fs":[function(require,module,exports) {
module.exports = require("bc07cfede786333c").getBundleURL("cmp8W") + "8.ac44445a.png" + "?" + Date.now();

},{"bc07cfede786333c":"dhz1j"}],"gmNa8":[function(require,module,exports) {
module.exports = require("f28db27204af31fc").getBundleURL("cmp8W") + "9.66d0deb5.png" + "?" + Date.now();

},{"f28db27204af31fc":"dhz1j"}],"b9SN0":[function(require,module,exports) {
module.exports = require("49b553cbb1215c15").getBundleURL("cmp8W") + "10.919b07f0.png" + "?" + Date.now();

},{"49b553cbb1215c15":"dhz1j"}],"4A40p":[function(require,module,exports) {
module.exports = require("f0469627a85ae4fe").getBundleURL("cmp8W") + "11.7ae218ca.png" + "?" + Date.now();

},{"f0469627a85ae4fe":"dhz1j"}],"jZ7wI":[function(require,module,exports) {
module.exports = require("35874142d3146a27").getBundleURL("cmp8W") + "12.ab13bd0d.png" + "?" + Date.now();

},{"35874142d3146a27":"dhz1j"}],"aNVyK":[function(require,module,exports) {
module.exports = require("5e9fbbe40cc79aaa").getBundleURL("cmp8W") + "13.e7fbb1d0.png" + "?" + Date.now();

},{"5e9fbbe40cc79aaa":"dhz1j"}],"eWWUy":[function(require,module,exports) {
module.exports = require("b01d45e8de53e569").getBundleURL("cmp8W") + "14.7cd9ba3f.png" + "?" + Date.now();

},{"b01d45e8de53e569":"dhz1j"}],"2sEey":[function(require,module,exports) {
module.exports = require("cb3bf51dab0faace").getBundleURL("cmp8W") + "15.48c0ac6b.png" + "?" + Date.now();

},{"cb3bf51dab0faace":"dhz1j"}],"cMY64":[function(require,module,exports) {
module.exports = require("d15fc5f3c50125f").getBundleURL("cmp8W") + "16.5a9c6892.png" + "?" + Date.now();

},{"d15fc5f3c50125f":"dhz1j"}],"1jX4p":[function(require,module,exports) {
module.exports = require("eb41ed6d6519c4f1").getBundleURL("cmp8W") + "0.3639ed90.png" + "?" + Date.now();

},{"eb41ed6d6519c4f1":"dhz1j"}],"iJxok":[function(require,module,exports) {
module.exports = require("b2b51f29d63ebd77").getBundleURL("cmp8W") + "1.8ae217f4.png" + "?" + Date.now();

},{"b2b51f29d63ebd77":"dhz1j"}],"jqU15":[function(require,module,exports) {
module.exports = require("a07575055c104170").getBundleURL("cmp8W") + "2.3624aafa.png" + "?" + Date.now();

},{"a07575055c104170":"dhz1j"}],"9e7Wp":[function(require,module,exports) {
module.exports = require("ca6515d8ce86f11c").getBundleURL("cmp8W") + "3.26d4178a.png" + "?" + Date.now();

},{"ca6515d8ce86f11c":"dhz1j"}],"8o91D":[function(require,module,exports) {
module.exports = require("10e84cb886635efc").getBundleURL("cmp8W") + "4.a9fcc8c6.png" + "?" + Date.now();

},{"10e84cb886635efc":"dhz1j"}],"dECH1":[function(require,module,exports) {
module.exports = require("c47d0bf8888bc72b").getBundleURL("cmp8W") + "5.9687d14b.png" + "?" + Date.now();

},{"c47d0bf8888bc72b":"dhz1j"}],"lvirJ":[function(require,module,exports) {
module.exports = require("f39d316f0cef93f6").getBundleURL("cmp8W") + "6.181ecc68.png" + "?" + Date.now();

},{"f39d316f0cef93f6":"dhz1j"}],"5sE13":[function(require,module,exports) {
module.exports = require("2fbe7b3174dc9490").getBundleURL("cmp8W") + "7.eba5d7fc.png" + "?" + Date.now();

},{"2fbe7b3174dc9490":"dhz1j"}],"lEKUv":[function(require,module,exports) {
module.exports = require("3de7f2e0938cdf76").getBundleURL("cmp8W") + "8.3989665e.png" + "?" + Date.now();

},{"3de7f2e0938cdf76":"dhz1j"}],"aZe58":[function(require,module,exports) {
module.exports = require("224f40e37217ad46").getBundleURL("cmp8W") + "9.399e354b.png" + "?" + Date.now();

},{"224f40e37217ad46":"dhz1j"}],"cp38Z":[function(require,module,exports) {
module.exports = require("937f36f6f18fc458").getBundleURL("cmp8W") + "10.86c52300.png" + "?" + Date.now();

},{"937f36f6f18fc458":"dhz1j"}],"2iKPV":[function(require,module,exports) {
module.exports = require("5562dc159138b996").getBundleURL("cmp8W") + "11.b5df9679.png" + "?" + Date.now();

},{"5562dc159138b996":"dhz1j"}],"5UsC4":[function(require,module,exports) {
module.exports = require("24f040d87a91f5d5").getBundleURL("cmp8W") + "12.60821c78.png" + "?" + Date.now();

},{"24f040d87a91f5d5":"dhz1j"}],"eUYrf":[function(require,module,exports) {
module.exports = require("9bc4a51375d2230a").getBundleURL("cmp8W") + "13.00ff10d2.png" + "?" + Date.now();

},{"9bc4a51375d2230a":"dhz1j"}],"BYwdJ":[function(require,module,exports) {
module.exports = require("6d5afc39b0175003").getBundleURL("cmp8W") + "14.80d403ef.png" + "?" + Date.now();

},{"6d5afc39b0175003":"dhz1j"}],"iS5hr":[function(require,module,exports) {
module.exports = require("4507360af3f301c5").getBundleURL("cmp8W") + "15.b82aa396.png" + "?" + Date.now();

},{"4507360af3f301c5":"dhz1j"}],"21DlG":[function(require,module,exports) {
module.exports = require("28820a46f0e61918").getBundleURL("cmp8W") + "16.550c461a.png" + "?" + Date.now();

},{"28820a46f0e61918":"dhz1j"}],"hP3Tu":[function(require,module,exports) {
module.exports = require("8ebf13eeb964826e").getBundleURL("cmp8W") + "0.665bc96e.png" + "?" + Date.now();

},{"8ebf13eeb964826e":"dhz1j"}],"6y5uU":[function(require,module,exports) {
module.exports = require("4f63cd7bd4999659").getBundleURL("cmp8W") + "1.bb08120e.png" + "?" + Date.now();

},{"4f63cd7bd4999659":"dhz1j"}],"eFYmW":[function(require,module,exports) {
module.exports = require("f3ac6fc0cd93cf4b").getBundleURL("cmp8W") + "2.1919af40.png" + "?" + Date.now();

},{"f3ac6fc0cd93cf4b":"dhz1j"}],"eGdp7":[function(require,module,exports) {
module.exports = require("2e91ea59a40bfb85").getBundleURL("cmp8W") + "0.b9b166ae.png" + "?" + Date.now();

},{"2e91ea59a40bfb85":"dhz1j"}],"2Vgxp":[function(require,module,exports) {
module.exports = require("2fea0775fbad0f75").getBundleURL("cmp8W") + "1.494dee77.png" + "?" + Date.now();

},{"2fea0775fbad0f75":"dhz1j"}],"6zZMF":[function(require,module,exports) {
module.exports = require("4121fbbb3fcf566b").getBundleURL("cmp8W") + "2.22409302.png" + "?" + Date.now();

},{"4121fbbb3fcf566b":"dhz1j"}],"4ZTFT":[function(require,module,exports) {
module.exports = require("468d9ce9c9e79e41").getBundleURL("cmp8W") + "0.b53c2dc9.png" + "?" + Date.now();

},{"468d9ce9c9e79e41":"dhz1j"}],"14Xx6":[function(require,module,exports) {
module.exports = require("56d528783f5f6f09").getBundleURL("cmp8W") + "1.3a2fef45.png" + "?" + Date.now();

},{"56d528783f5f6f09":"dhz1j"}],"bKyXx":[function(require,module,exports) {
module.exports = require("78c37c9756f6f2ac").getBundleURL("cmp8W") + "2.a436573c.png" + "?" + Date.now();

},{"78c37c9756f6f2ac":"dhz1j"}],"k4uKr":[function(require,module,exports) {
module.exports = require("61445f42f1dc8b94").getBundleURL("cmp8W") + "0.47fafcca.png" + "?" + Date.now();

},{"61445f42f1dc8b94":"dhz1j"}],"aQYCt":[function(require,module,exports) {
module.exports = require("5acb63a0424dbfc").getBundleURL("cmp8W") + "1.07a7f6f3.png" + "?" + Date.now();

},{"5acb63a0424dbfc":"dhz1j"}],"80K36":[function(require,module,exports) {
module.exports = require("aae344f861d07344").getBundleURL("cmp8W") + "2.8adc8632.png" + "?" + Date.now();

},{"aae344f861d07344":"dhz1j"}],"bH8XE":[function(require,module,exports) {
module.exports = require("7ec6300700dedbb").getBundleURL("cmp8W") + "3.70eb75c6.png" + "?" + Date.now();

},{"7ec6300700dedbb":"dhz1j"}],"ksDIu":[function(require,module,exports) {
module.exports = require("91ea8003bef4c4fe").getBundleURL("cmp8W") + "4.ce12d47a.png" + "?" + Date.now();

},{"91ea8003bef4c4fe":"dhz1j"}],"3illY":[function(require,module,exports) {
module.exports = require("bbd082eaa66c385f").getBundleURL("cmp8W") + "5.071c1240.png" + "?" + Date.now();

},{"bbd082eaa66c385f":"dhz1j"}],"bXBlD":[function(require,module,exports) {
module.exports = require("402c175305da3dff").getBundleURL("cmp8W") + "6.8684514b.png" + "?" + Date.now();

},{"402c175305da3dff":"dhz1j"}],"g7uNS":[function(require,module,exports) {
module.exports = require("4a55b6351a4defb6").getBundleURL("cmp8W") + "0.b9d8eb08.png" + "?" + Date.now();

},{"4a55b6351a4defb6":"dhz1j"}],"ddqSn":[function(require,module,exports) {
module.exports = require("c031660373b5eedc").getBundleURL("cmp8W") + "1.02d137e6.png" + "?" + Date.now();

},{"c031660373b5eedc":"dhz1j"}],"8k95Q":[function(require,module,exports) {
module.exports = require("fd3b311810c29cdc").getBundleURL("cmp8W") + "2.937b6f73.png" + "?" + Date.now();

},{"fd3b311810c29cdc":"dhz1j"}],"4SHD7":[function(require,module,exports) {
module.exports = require("878131d91202a20c").getBundleURL("cmp8W") + "3.53511686.png" + "?" + Date.now();

},{"878131d91202a20c":"dhz1j"}],"d1yzT":[function(require,module,exports) {
module.exports = require("f40322304eb1a12e").getBundleURL("cmp8W") + "4.e0b9e2d0.png" + "?" + Date.now();

},{"f40322304eb1a12e":"dhz1j"}],"1AXo5":[function(require,module,exports) {
module.exports = require("285db74bd719c45a").getBundleURL("cmp8W") + "5.44f19494.png" + "?" + Date.now();

},{"285db74bd719c45a":"dhz1j"}],"fKE4M":[function(require,module,exports) {
module.exports = require("405a5aad8bffce0f").getBundleURL("cmp8W") + "6.ae7d27e4.png" + "?" + Date.now();

},{"405a5aad8bffce0f":"dhz1j"}],"4io3N":[function(require,module,exports) {
module.exports = require("684b28a7ad5fd4a3").getBundleURL("cmp8W") + "0.8fa95051.png" + "?" + Date.now();

},{"684b28a7ad5fd4a3":"dhz1j"}],"UDWmW":[function(require,module,exports) {
module.exports = require("bb758a03f385993").getBundleURL("cmp8W") + "1.b89394f0.png" + "?" + Date.now();

},{"bb758a03f385993":"dhz1j"}],"cZJsR":[function(require,module,exports) {
module.exports = require("80115c701b688262").getBundleURL("cmp8W") + "2.86e25a86.png" + "?" + Date.now();

},{"80115c701b688262":"dhz1j"}],"5ynvj":[function(require,module,exports) {
module.exports = require("f61f650d67989df5").getBundleURL("cmp8W") + "3.cbf74ba1.png" + "?" + Date.now();

},{"f61f650d67989df5":"dhz1j"}],"aTzXv":[function(require,module,exports) {
module.exports = require("11290a09388fa3b9").getBundleURL("cmp8W") + "4.cf20c243.png" + "?" + Date.now();

},{"11290a09388fa3b9":"dhz1j"}],"1unSV":[function(require,module,exports) {
module.exports = require("be1987eb93e900f6").getBundleURL("cmp8W") + "5.52e02548.png" + "?" + Date.now();

},{"be1987eb93e900f6":"dhz1j"}],"c2Iva":[function(require,module,exports) {
module.exports = require("a443d80bd5886d5b").getBundleURL("cmp8W") + "6.d5751dd7.png" + "?" + Date.now();

},{"a443d80bd5886d5b":"dhz1j"}],"ifn8C":[function(require,module,exports) {
module.exports = require("b20b1d23a055424d").getBundleURL("cmp8W") + "0.7bf4b80b.png" + "?" + Date.now();

},{"b20b1d23a055424d":"dhz1j"}],"iZavz":[function(require,module,exports) {
module.exports = require("3ec4034c29aa13c6").getBundleURL("cmp8W") + "1.1e459d26.png" + "?" + Date.now();

},{"3ec4034c29aa13c6":"dhz1j"}],"bPUJ0":[function(require,module,exports) {
module.exports = require("5bffb3c103928572").getBundleURL("cmp8W") + "2.2fdb3422.png" + "?" + Date.now();

},{"5bffb3c103928572":"dhz1j"}],"7SUXU":[function(require,module,exports) {
module.exports = require("928477e00961fa93").getBundleURL("cmp8W") + "0.02fcac5d.png" + "?" + Date.now();

},{"928477e00961fa93":"dhz1j"}],"iVa1k":[function(require,module,exports) {
module.exports = require("d32f691625126fb6").getBundleURL("cmp8W") + "1.d47ded85.png" + "?" + Date.now();

},{"d32f691625126fb6":"dhz1j"}],"aQRJn":[function(require,module,exports) {
module.exports = require("1cd6168ce20a3c3e").getBundleURL("cmp8W") + "2.fd8d1431.png" + "?" + Date.now();

},{"1cd6168ce20a3c3e":"dhz1j"}],"hFNBs":[function(require,module,exports) {
module.exports = require("50323c2dbc7a0031").getBundleURL("cmp8W") + "0.d58179f3.png" + "?" + Date.now();

},{"50323c2dbc7a0031":"dhz1j"}],"6R68d":[function(require,module,exports) {
module.exports = require("c56cd891c238ade2").getBundleURL("cmp8W") + "1.c90533b8.png" + "?" + Date.now();

},{"c56cd891c238ade2":"dhz1j"}],"bfnI9":[function(require,module,exports) {
module.exports = require("11d77b404e3c72b2").getBundleURL("cmp8W") + "2.e531ead6.png" + "?" + Date.now();

},{"11d77b404e3c72b2":"dhz1j"}],"1Vq3z":[function(require,module,exports) {
module.exports = require("9b6d5f46c279e8ff").getBundleURL("cmp8W") + "0.1ca82a97.png" + "?" + Date.now();

},{"9b6d5f46c279e8ff":"dhz1j"}],"4wyqP":[function(require,module,exports) {
module.exports = require("f21aaf7855b45a66").getBundleURL("cmp8W") + "1.183544ea.png" + "?" + Date.now();

},{"f21aaf7855b45a66":"dhz1j"}],"jw2CD":[function(require,module,exports) {
module.exports = require("5f415e0681050c10").getBundleURL("cmp8W") + "2.925ff2fe.png" + "?" + Date.now();

},{"5f415e0681050c10":"dhz1j"}],"cZa9a":[function(require,module,exports) {
module.exports = require("563bf9699e45fb35").getBundleURL("cmp8W") + "0.7f2655b9.png" + "?" + Date.now();

},{"563bf9699e45fb35":"dhz1j"}],"i7gRk":[function(require,module,exports) {
module.exports = require("247788b3c83acb5a").getBundleURL("cmp8W") + "1.29b1634a.png" + "?" + Date.now();

},{"247788b3c83acb5a":"dhz1j"}],"isAKa":[function(require,module,exports) {
module.exports = require("d4d5e8a3b31a76a").getBundleURL("cmp8W") + "2.e9ae6571.png" + "?" + Date.now();

},{"d4d5e8a3b31a76a":"dhz1j"}],"fxuLY":[function(require,module,exports) {
module.exports = require("fcd961bc63ddd03").getBundleURL("cmp8W") + "0.f67f4ca5.png" + "?" + Date.now();

},{"fcd961bc63ddd03":"dhz1j"}],"hbmAj":[function(require,module,exports) {
module.exports = require("572862db88dcf6ab").getBundleURL("cmp8W") + "1.7a00a821.png" + "?" + Date.now();

},{"572862db88dcf6ab":"dhz1j"}],"4cWmC":[function(require,module,exports) {
module.exports = require("1d61ba12d786721a").getBundleURL("cmp8W") + "2.0fd24eab.png" + "?" + Date.now();

},{"1d61ba12d786721a":"dhz1j"}],"3sM6x":[function(require,module,exports) {
module.exports = require("87feb6e3a31d88c5").getBundleURL("cmp8W") + "0.d664e154.png" + "?" + Date.now();

},{"87feb6e3a31d88c5":"dhz1j"}],"1Ghhn":[function(require,module,exports) {
module.exports = require("c2baeecddc0a9e67").getBundleURL("cmp8W") + "1.84e98fe3.png" + "?" + Date.now();

},{"c2baeecddc0a9e67":"dhz1j"}],"eoXGI":[function(require,module,exports) {
module.exports = require("e430796ddc002d65").getBundleURL("cmp8W") + "0.25491624.png" + "?" + Date.now();

},{"e430796ddc002d65":"dhz1j"}],"VUePF":[function(require,module,exports) {
module.exports = require("bdfb3874dd959831").getBundleURL("cmp8W") + "1.72447919.png" + "?" + Date.now();

},{"bdfb3874dd959831":"dhz1j"}],"hdvMP":[function(require,module,exports) {
module.exports = require("5bf5bd6f5e83b652").getBundleURL("cmp8W") + "0.69e48132.png" + "?" + Date.now();

},{"5bf5bd6f5e83b652":"dhz1j"}],"gvi3Z":[function(require,module,exports) {
module.exports = require("15492b78f961781f").getBundleURL("cmp8W") + "1.bed8f360.png" + "?" + Date.now();

},{"15492b78f961781f":"dhz1j"}],"k8rDl":[function(require,module,exports) {
module.exports = require("3e37ef83281471c").getBundleURL("cmp8W") + "0.a945627c.png" + "?" + Date.now();

},{"3e37ef83281471c":"dhz1j"}],"lr1Vx":[function(require,module,exports) {
module.exports = require("2a330f67d9cca881").getBundleURL("cmp8W") + "1.d67f7f85.png" + "?" + Date.now();

},{"2a330f67d9cca881":"dhz1j"}],"h4hlA":[function(require,module,exports) {
module.exports = require("22feef0b5f890342").getBundleURL("cmp8W") + "2.856e4f6a.png" + "?" + Date.now();

},{"22feef0b5f890342":"dhz1j"}],"hes0S":[function(require,module,exports) {
module.exports = require("5865c5741cb5fb81").getBundleURL("cmp8W") + "0.789fd4a1.png" + "?" + Date.now();

},{"5865c5741cb5fb81":"dhz1j"}],"f229s":[function(require,module,exports) {
module.exports = require("50ce58c48c66a90c").getBundleURL("cmp8W") + "1.8b40dd4a.png" + "?" + Date.now();

},{"50ce58c48c66a90c":"dhz1j"}],"kQO8d":[function(require,module,exports) {
module.exports = require("5c61e6696e15fc56").getBundleURL("cmp8W") + "2.ca95d9a6.png" + "?" + Date.now();

},{"5c61e6696e15fc56":"dhz1j"}],"ie3FK":[function(require,module,exports) {
module.exports = require("8353a53ab8dde992").getBundleURL("cmp8W") + "0.4458cafc.png" + "?" + Date.now();

},{"8353a53ab8dde992":"dhz1j"}],"2Mtpo":[function(require,module,exports) {
module.exports = require("36aece9bcf42d555").getBundleURL("cmp8W") + "1.b03a4630.png" + "?" + Date.now();

},{"36aece9bcf42d555":"dhz1j"}],"gX0Rc":[function(require,module,exports) {
module.exports = require("5f8b0d34b79f9804").getBundleURL("cmp8W") + "2.51782ce6.png" + "?" + Date.now();

},{"5f8b0d34b79f9804":"dhz1j"}],"a1xy9":[function(require,module,exports) {
module.exports = require("d8956759b4772f49").getBundleURL("cmp8W") + "0.344dfc5d.png" + "?" + Date.now();

},{"d8956759b4772f49":"dhz1j"}],"9OEVF":[function(require,module,exports) {
module.exports = require("24353149caf63721").getBundleURL("cmp8W") + "1.6cfd4c0f.png" + "?" + Date.now();

},{"24353149caf63721":"dhz1j"}],"hgwxr":[function(require,module,exports) {
module.exports = require("86061ec03447fa82").getBundleURL("cmp8W") + "2.d3829fbe.png" + "?" + Date.now();

},{"86061ec03447fa82":"dhz1j"}],"715dr":[function(require,module,exports) {
module.exports = require("e4115d7d20e6e550").getBundleURL("cmp8W") + "3.f973e4e6.png" + "?" + Date.now();

},{"e4115d7d20e6e550":"dhz1j"}],"ajBEO":[function(require,module,exports) {
module.exports = require("ebb2b908f3495b30").getBundleURL("cmp8W") + "0.8a16c0d1.png" + "?" + Date.now();

},{"ebb2b908f3495b30":"dhz1j"}],"1OfZG":[function(require,module,exports) {
module.exports = require("8dbd51ee91cba54f").getBundleURL("cmp8W") + "1.b7e32682.png" + "?" + Date.now();

},{"8dbd51ee91cba54f":"dhz1j"}],"lmE8f":[function(require,module,exports) {
module.exports = require("db337ac9702e218").getBundleURL("cmp8W") + "2.56781b8b.png" + "?" + Date.now();

},{"db337ac9702e218":"dhz1j"}],"dzTjB":[function(require,module,exports) {
module.exports = require("e22c14c9d0615500").getBundleURL("cmp8W") + "3.9ad0da0e.png" + "?" + Date.now();

},{"e22c14c9d0615500":"dhz1j"}],"jETKZ":[function(require,module,exports) {
module.exports = require("be6c116f04fd8369").getBundleURL("cmp8W") + "0.67ca11be.png" + "?" + Date.now();

},{"be6c116f04fd8369":"dhz1j"}],"6XxfN":[function(require,module,exports) {
module.exports = require("7fea0de12e540763").getBundleURL("cmp8W") + "1.58a318a4.png" + "?" + Date.now();

},{"7fea0de12e540763":"dhz1j"}],"dQEiF":[function(require,module,exports) {
module.exports = require("51f54c7dfa1c31cf").getBundleURL("cmp8W") + "2.3a2455c9.png" + "?" + Date.now();

},{"51f54c7dfa1c31cf":"dhz1j"}],"9SOFm":[function(require,module,exports) {
module.exports = require("7adad5e53cbfb5cd").getBundleURL("cmp8W") + "3.2eddc175.png" + "?" + Date.now();

},{"7adad5e53cbfb5cd":"dhz1j"}],"XLfiy":[function(require,module,exports) {
module.exports = require("e7dfd5082de1c83b").getBundleURL("cmp8W") + "0.6d26c893.png" + "?" + Date.now();

},{"e7dfd5082de1c83b":"dhz1j"}],"1GRtq":[function(require,module,exports) {
module.exports = require("93b34db9c68034e8").getBundleURL("cmp8W") + "1.a7ad66df.png" + "?" + Date.now();

},{"93b34db9c68034e8":"dhz1j"}],"dO4lP":[function(require,module,exports) {
module.exports = require("c884c3919250a513").getBundleURL("cmp8W") + "2.4d31e85d.png" + "?" + Date.now();

},{"c884c3919250a513":"dhz1j"}],"3joZX":[function(require,module,exports) {
module.exports = require("d3c99ce281b43637").getBundleURL("cmp8W") + "3.03170b54.png" + "?" + Date.now();

},{"d3c99ce281b43637":"dhz1j"}],"3cEcq":[function(require,module,exports) {
module.exports = require("f63f649d48f1654f").getBundleURL("cmp8W") + "0.32920bc1.png" + "?" + Date.now();

},{"f63f649d48f1654f":"dhz1j"}],"1Qc2a":[function(require,module,exports) {
module.exports = require("418562c516543fc5").getBundleURL("cmp8W") + "1.e87a028f.png" + "?" + Date.now();

},{"418562c516543fc5":"dhz1j"}],"j9ukh":[function(require,module,exports) {
module.exports = require("5e6ffe70a890ce56").getBundleURL("cmp8W") + "2.461f64a2.png" + "?" + Date.now();

},{"5e6ffe70a890ce56":"dhz1j"}],"bpNCk":[function(require,module,exports) {
module.exports = require("caf8a3e74fde3aa0").getBundleURL("cmp8W") + "3.7d1e4de7.png" + "?" + Date.now();

},{"caf8a3e74fde3aa0":"dhz1j"}],"jk57J":[function(require,module,exports) {
module.exports = require("5170d183d0764cf4").getBundleURL("cmp8W") + "0.feb1f169.png" + "?" + Date.now();

},{"5170d183d0764cf4":"dhz1j"}],"hHl2T":[function(require,module,exports) {
module.exports = require("95bfbc3a904ebaab").getBundleURL("cmp8W") + "1.9864c0d8.png" + "?" + Date.now();

},{"95bfbc3a904ebaab":"dhz1j"}],"aXh5j":[function(require,module,exports) {
module.exports = require("3e77b0a494414567").getBundleURL("cmp8W") + "2.96b03293.png" + "?" + Date.now();

},{"3e77b0a494414567":"dhz1j"}],"bKYxY":[function(require,module,exports) {
module.exports = require("37e592f37fd91b6").getBundleURL("cmp8W") + "3.9b35045e.png" + "?" + Date.now();

},{"37e592f37fd91b6":"dhz1j"}],"e4yPa":[function(require,module,exports) {
module.exports = require("d0cc0c2a41521946").getBundleURL("cmp8W") + "0.519e3560.png" + "?" + Date.now();

},{"d0cc0c2a41521946":"dhz1j"}],"3sIv6":[function(require,module,exports) {
module.exports = require("6b2aef9a8eeb9e11").getBundleURL("cmp8W") + "1.df870eb6.png" + "?" + Date.now();

},{"6b2aef9a8eeb9e11":"dhz1j"}],"45rMC":[function(require,module,exports) {
module.exports = require("e2e7e6db34951f14").getBundleURL("cmp8W") + "2.05831082.png" + "?" + Date.now();

},{"e2e7e6db34951f14":"dhz1j"}],"j9fdu":[function(require,module,exports) {
module.exports = require("f3fd7af1b227d535").getBundleURL("cmp8W") + "3.9e4676ba.png" + "?" + Date.now();

},{"f3fd7af1b227d535":"dhz1j"}],"g4bMV":[function(require,module,exports) {
module.exports = require("a1ff8e54f74833d2").getBundleURL("cmp8W") + "4.cfbe719f.png" + "?" + Date.now();

},{"a1ff8e54f74833d2":"dhz1j"}],"efbEK":[function(require,module,exports) {
module.exports = require("28ae5692ace9655c").getBundleURL("cmp8W") + "5.d69f4ebb.png" + "?" + Date.now();

},{"28ae5692ace9655c":"dhz1j"}],"lbheo":[function(require,module,exports) {
module.exports = require("bdc84e5f599f1b46").getBundleURL("cmp8W") + "6.3e30cbe5.png" + "?" + Date.now();

},{"bdc84e5f599f1b46":"dhz1j"}],"4ZpEg":[function(require,module,exports) {
module.exports = require("403342b11160a1c6").getBundleURL("cmp8W") + "0.de9a1197.png" + "?" + Date.now();

},{"403342b11160a1c6":"dhz1j"}],"8bJ0x":[function(require,module,exports) {
module.exports = require("4dd02f37f2bd5f1d").getBundleURL("cmp8W") + "1.f144bb4a.png" + "?" + Date.now();

},{"4dd02f37f2bd5f1d":"dhz1j"}],"9itfM":[function(require,module,exports) {
module.exports = require("a832ef586c8f395e").getBundleURL("cmp8W") + "2.e5258106.png" + "?" + Date.now();

},{"a832ef586c8f395e":"dhz1j"}],"lWcGE":[function(require,module,exports) {
module.exports = require("2c129b228802a058").getBundleURL("cmp8W") + "3.2a976c28.png" + "?" + Date.now();

},{"2c129b228802a058":"dhz1j"}],"8otrM":[function(require,module,exports) {
module.exports = require("959c544acf403cba").getBundleURL("cmp8W") + "4.aa561ad9.png" + "?" + Date.now();

},{"959c544acf403cba":"dhz1j"}],"g7jj6":[function(require,module,exports) {
module.exports = require("ee59f8ed4c74944e").getBundleURL("cmp8W") + "5.cb5750b3.png" + "?" + Date.now();

},{"ee59f8ed4c74944e":"dhz1j"}],"gR9FX":[function(require,module,exports) {
module.exports = require("47e16b889f13a855").getBundleURL("cmp8W") + "6.45b87dec.png" + "?" + Date.now();

},{"47e16b889f13a855":"dhz1j"}],"cPFlf":[function(require,module,exports) {
module.exports = require("99607f6bafb11e0b").getBundleURL("cmp8W") + "0.a86e0f14.png" + "?" + Date.now();

},{"99607f6bafb11e0b":"dhz1j"}],"d5Tk9":[function(require,module,exports) {
module.exports = require("6385ad3c4fcdacf").getBundleURL("cmp8W") + "1.198fb7df.png" + "?" + Date.now();

},{"6385ad3c4fcdacf":"dhz1j"}],"ebRrh":[function(require,module,exports) {
module.exports = require("2b6e068f10d72211").getBundleURL("cmp8W") + "2.95895dc3.png" + "?" + Date.now();

},{"2b6e068f10d72211":"dhz1j"}],"2al61":[function(require,module,exports) {
module.exports = require("4946c16e063b8ca4").getBundleURL("cmp8W") + "3.d9d409b4.png" + "?" + Date.now();

},{"4946c16e063b8ca4":"dhz1j"}],"eCZLU":[function(require,module,exports) {
module.exports = require("6f0f34fe86d97f36").getBundleURL("cmp8W") + "4.9adab829.png" + "?" + Date.now();

},{"6f0f34fe86d97f36":"dhz1j"}],"6TzzO":[function(require,module,exports) {
module.exports = require("eaac4176e1ddea00").getBundleURL("cmp8W") + "5.e1e413c6.png" + "?" + Date.now();

},{"eaac4176e1ddea00":"dhz1j"}],"kQJCm":[function(require,module,exports) {
module.exports = require("83bf34e8418e36b1").getBundleURL("cmp8W") + "6.822d523f.png" + "?" + Date.now();

},{"83bf34e8418e36b1":"dhz1j"}],"7ML06":[function(require,module,exports) {
module.exports = require("4f773a915afa5633").getBundleURL("cmp8W") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.622bc019.MP4" + "?" + Date.now();

},{"4f773a915afa5633":"dhz1j"}],"4kop1":[function(require,module,exports) {
module.exports = require("ff4bdf28d8475fbe").getBundleURL("cmp8W") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.6a4c9c74.MP4" + "?" + Date.now();

},{"ff4bdf28d8475fbe":"dhz1j"}],"fVYNK":[function(require,module,exports) {
module.exports = require("17661ddd2ba6f356").getBundleURL("cmp8W") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.ca27e8d7.MP4" + "?" + Date.now();

},{"17661ddd2ba6f356":"dhz1j"}],"1mikI":[function(require,module,exports) {
module.exports = require("7deb6ed76c703e74").getBundleURL("cmp8W") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.7e1a6fe0.MP4" + "?" + Date.now();

},{"7deb6ed76c703e74":"dhz1j"}],"5mGZB":[function(require,module,exports) {
module.exports = require("386759056183d294").getBundleURL("cmp8W") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.71195177.MP4" + "?" + Date.now();

},{"386759056183d294":"dhz1j"}],"dYeA7":[function(require,module,exports) {
module.exports = require("2d3d527a70d77f20").getBundleURL("cmp8W") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.0174dd88.MP4" + "?" + Date.now();

},{"2d3d527a70d77f20":"dhz1j"}],"cmroo":[function(require,module,exports) {
module.exports = require("ff6c4d58069c11f8").getBundleURL("cmp8W") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.123228f5.MP4" + "?" + Date.now();

},{"ff6c4d58069c11f8":"dhz1j"}],"bANfg":[function(require,module,exports) {
module.exports = require("608ab7b1dba0eb0b").getBundleURL("cmp8W") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b253633b.MP4" + "?" + Date.now();

},{"608ab7b1dba0eb0b":"dhz1j"}],"bMlWw":[function(require,module,exports) {
module.exports = require("e41534476edbcc7b").getBundleURL("cmp8W") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.06dd88ee.MP4" + "?" + Date.now();

},{"e41534476edbcc7b":"dhz1j"}],"cHviO":[function(require,module,exports) {
module.exports = require("5de4b283adefaac6").getBundleURL("cmp8W") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.d0558e52.MP4" + "?" + Date.now();

},{"5de4b283adefaac6":"dhz1j"}],"iOiFc":[function(require,module,exports) {
module.exports = require("6b5c1c4621d97f03").getBundleURL("cmp8W") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.db86c704.MP4" + "?" + Date.now();

},{"6b5c1c4621d97f03":"dhz1j"}],"9Mts3":[function(require,module,exports) {
module.exports = require("19c829522aa7737").getBundleURL("cmp8W") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.fbfc1b21.MP4" + "?" + Date.now();

},{"19c829522aa7737":"dhz1j"}],"gR3pH":[function(require,module,exports) {
module.exports = require("8a41ffc30f1e87e4").getBundleURL("cmp8W") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.4026b1b9.MP4" + "?" + Date.now();

},{"8a41ffc30f1e87e4":"dhz1j"}],"eUkTS":[function(require,module,exports) {
module.exports = require("80ea15a8b33d7293").getBundleURL("cmp8W") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.9ee181f7.MP4" + "?" + Date.now();

},{"80ea15a8b33d7293":"dhz1j"}],"ljr7D":[function(require,module,exports) {
module.exports = require("816dfbf36722bace").getBundleURL("cmp8W") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.992112fd.MP4" + "?" + Date.now();

},{"816dfbf36722bace":"dhz1j"}],"8Dcun":[function(require,module,exports) {
module.exports = require("93eb8be95844d908").getBundleURL("cmp8W") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.e83c0f3a.MP4" + "?" + Date.now();

},{"93eb8be95844d908":"dhz1j"}],"gQe3F":[function(require,module,exports) {
module.exports = require("8d7aac5f5fc74af").getBundleURL("cmp8W") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.d879fa06.MP4" + "?" + Date.now();

},{"8d7aac5f5fc74af":"dhz1j"}],"jEZmY":[function(require,module,exports) {
module.exports = require("3d1bd89608a92c13").getBundleURL("cmp8W") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.fb1b0300.MP4" + "?" + Date.now();

},{"3d1bd89608a92c13":"dhz1j"}],"fgImB":[function(require,module,exports) {
module.exports = require("debdc37b6a92e0ce").getBundleURL("cmp8W") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.58840480.MP4" + "?" + Date.now();

},{"debdc37b6a92e0ce":"dhz1j"}],"ixBaN":[function(require,module,exports) {
module.exports = require("b444e9fa116f54c3").getBundleURL("cmp8W") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.5728a622.MP4" + "?" + Date.now();

},{"b444e9fa116f54c3":"dhz1j"}],"l6qmG":[function(require,module,exports) {
module.exports = require("36e9bcbc6a7c1ead").getBundleURL("cmp8W") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.4d11b1bd.MP4" + "?" + Date.now();

},{"36e9bcbc6a7c1ead":"dhz1j"}],"dZRBY":[function(require,module,exports) {
module.exports = require("c382f6a7cfefcb91").getBundleURL("cmp8W") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.efd250da.MP4" + "?" + Date.now();

},{"c382f6a7cfefcb91":"dhz1j"}],"jiJit":[function(require,module,exports) {
module.exports = require("6227f4c784e9d5fc").getBundleURL("cmp8W") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.042ad484.MP4" + "?" + Date.now();

},{"6227f4c784e9d5fc":"dhz1j"}],"7eATr":[function(require,module,exports) {
module.exports = require("73a5ca992d8480b1").getBundleURL("cmp8W") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.0f278cb4.MP4" + "?" + Date.now();

},{"73a5ca992d8480b1":"dhz1j"}],"XElZb":[function(require,module,exports) {
module.exports = require("d7b25545ed3086fd").getBundleURL("cmp8W") + "2021_09_11 22_49_16    @   Portugal Sintra @.29b755d2.MP4" + "?" + Date.now();

},{"d7b25545ed3086fd":"dhz1j"}],"8HrqQ":[function(require,module,exports) {
module.exports = require("46b30bb5ece03829").getBundleURL("cmp8W") + "2021_09_11 22_49_16    @   Portugal Sintra @.dc60a31b.MP4" + "?" + Date.now();

},{"46b30bb5ece03829":"dhz1j"}],"dlTv4":[function(require,module,exports) {
module.exports = require("929d89131ce98b28").getBundleURL("cmp8W") + "2021_09_11 22_49_16    @   Portugal Sintra @.03f64803.MP4" + "?" + Date.now();

},{"929d89131ce98b28":"dhz1j"}],"h3QuM":[function(require,module,exports) {
module.exports = require("12bccbcedef20ce9").getBundleURL("cmp8W") + "2021_09_11 18_36_02    @   Portugal Obidos @.72fa430a.MP4" + "?" + Date.now();

},{"12bccbcedef20ce9":"dhz1j"}],"9E75h":[function(require,module,exports) {
module.exports = require("3f012e218d81731e").getBundleURL("cmp8W") + "2021_09_11 18_15_50    @   Portugal Obidos @.db01c981.MP4" + "?" + Date.now();

},{"3f012e218d81731e":"dhz1j"}],"PChll":[function(require,module,exports) {
module.exports = require("775bdd03fc925955").getBundleURL("cmp8W") + "2021_09_11 17_56_56    @   Portugal Obidos @.acb207c4.MP4" + "?" + Date.now();

},{"775bdd03fc925955":"dhz1j"}],"4actR":[function(require,module,exports) {
module.exports = require("1ac1840ffc3a516d").getBundleURL("cmp8W") + "2021_09_11 18_36_02    @   Portugal Obidos @.5b6bd0f0.MP4" + "?" + Date.now();

},{"1ac1840ffc3a516d":"dhz1j"}],"g1LMG":[function(require,module,exports) {
module.exports = require("30a0b2e9b6092039").getBundleURL("cmp8W") + "2021_09_11 18_15_50    @   Portugal Obidos @.eb6a3c48.MP4" + "?" + Date.now();

},{"30a0b2e9b6092039":"dhz1j"}],"1uztZ":[function(require,module,exports) {
module.exports = require("1a79945f62c92601").getBundleURL("cmp8W") + "2021_09_11 17_56_56    @   Portugal Obidos @.3b06e62c.MP4" + "?" + Date.now();

},{"1a79945f62c92601":"dhz1j"}],"dHccO":[function(require,module,exports) {
module.exports = require("5655a16e5191dacc").getBundleURL("cmp8W") + "2021_09_11 18_36_02    @   Portugal Obidos @.e282e9f3.MP4" + "?" + Date.now();

},{"5655a16e5191dacc":"dhz1j"}],"kCHME":[function(require,module,exports) {
module.exports = require("54d0d63a5f2867bf").getBundleURL("cmp8W") + "2021_09_11 18_15_50    @   Portugal Obidos @.54eb92dc.MP4" + "?" + Date.now();

},{"54d0d63a5f2867bf":"dhz1j"}],"ch9ED":[function(require,module,exports) {
module.exports = require("3b33e1d9ed0aeb29").getBundleURL("cmp8W") + "2021_09_11 17_56_56    @   Portugal Obidos @.2bca2198.MP4" + "?" + Date.now();

},{"3b33e1d9ed0aeb29":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{}],"ct35Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debug", ()=>debug);
var debug = true;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["ibVRB","dfWJz"], "dfWJz", "parcelRequire3c64")

//# sourceMappingURL=014detalle-obidos.8e581ae2.js.map
