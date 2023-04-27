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
})({"leQ09":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "b18ef4e59bc11ce5";
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

},{}],"2oGnw":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "obidos", ciudadT = "\xd3bidos";
var i_listado = 0;
var div = document.getElementById("div-ver-" + ciudad);
var img = document.getElementById("img-ver-" + ciudad);
var h2 = document.getElementById("h2-ver-" + ciudad);
var h3 = document.getElementById("h3-ver-" + ciudad);
// Asignar funciones al navegador
window.onload = ()=>{
    document.write((0, _listadosJs.l));
    document.write((0, _debugJs.debug));
};
window.siguiente_vertical_obidos = cargar_obidos_v;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_obidos();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    cargar_obidos_v(1, 1);
    setTimeout(CambiarAutomaticamente, 5000);
}
function Normaliza(s) {
    var str = s.trim();
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function cargar_obidos_v(incremento, parametro) {
    var w = img.clientHeight;
    var listado, comentario;
    listado = (0, _listadosJs.l).fotos.obidos_png_300_6;
    if (w > 600) listado = (0, _listadosJs.l).fotos.obidos_png_600_6;
    if (w > 1000) listado = (0, _listadosJs.l).fotos.obidos_png_900_6;
    switch(parametro){
        case 1:
            i_listado = i_listado + incremento;
            if (i_listado > listado.length - 1) i_listado = 0;
            if (i_listado < 0) i_listado = listado.length - 1;
            img.src = listado[i_listado];
            h2.innerHTML = "Fotos de " + ciudadT + ": " + (i_listado + 1) + " de " + listado.length; //+ " carga " +  tiempo_carga + "msg";
            comentario = (0, _listadosJs.l).comentario_6.obidos_6_comentario;
            img.alt = comentario[i_listado] + " " + i_listado;
            h3.innerHTML = Normaliza(comentario[i_listado]); //+ ' ' + i_listado +  "(horizontal"  +  c + ")" + " w=" + w + " h=" + h;  
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
  cargar_obidos_v(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}

function cargar_obidos_v(incremento,parametro){
  var w=img.clientWidth;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_6.obidos_6; 
  listado=   l.fotos.obidos_png_300_6;  
  if (w >  600) { listado=  l.fotos.obidos_png_600_6;  c= " mediana " ; }
  if (w > 1000) { listado=  l.fotos.obidos_png_900_6;  c= " grande " ; }
  
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

},{"86781a753eb4dbf":"l5gn5","89ea5d03c92266e0":"lDCP0","4b3eab43661026ee":"kZ6X3","1b58bb2c4e8118db":"fe6WN","a73d7c9e4390513b":"dgTED","18f01d5dbbda959":"kCBBO","5b20b0e56b82945a":"15RRO","c5cb6c0359b0662d":"eui1z","a63b65706a9c9fe5":"65DfP","e748f6caa373ab73":"6PSIo","dfdedac191fae4f0":"9NG8i","f6f096fdb88eaef6":"jAGGy","9280d8a758940830":"5xvKL","282ccbf2baeec961":"7g6Zp","d39f9622f5686817":"ioyVd","483f2d56ab4cdedd":"9N8KE","da461ea778990854":"3JEDA","96f651fb571aa9eb":"eNZGp","e543a391b0f85f4f":"cXWpq","a8cf664de7077859":"3zpiz","598ca8ca53d8a49b":"ffFBr","3c3b7f9d3e56e115":"lf0Gr","954440e7a3d1f441":"c6Gn8","b4cb97e52f2cbd52":"jsEFM","7b09e4309565582d":"fs3w6","e6ea0af4531463e2":"lYA4j","42085257a46e5e09":"avtru","6b3ddeea96e7d95a":"9J3V7","afe3ae5977faa1f8":"68vZV","9446df6f7494726d":"eVfeX","62a84e90f44c3be3":"jxcx0","a531b65afc6a06b0":"f6mOk","323e4a910dee7e0a":"jVHnl","5adaf0b1f2da779b":"8gMKz","18015bf652a8590c":"3ROny","839e19b40af20bc9":"cSin1","a51b127073443e8b":"cOGxY","334a20b09cebc20f":"fkUsz","d3c31bcf734c4b17":"6nU7W","91fb4da4c9f50617":"1FL5r","7951652e2eeb278f":"lvtLa","9d81a0598f30e880":"i68qF","f7184a54f57fe61e":"gehAt","aa4e305c904a8bdc":"hupKc","e3c230bc4328e939":"ltvKe","91da9c9beb8cec92":"eDLi6","6788e9eb952c5639":"aTYWB","3e1f56c3a8f09a92":"9pJdk","ba8d1fe6ef07e224":"2vkrf","e7ed43fffc09e558":"9d6Rh","eb7f4bebc9ae34f3":"guDvt","f49bbc3ce90230f3":"5yGBr","c6cc8feb00c43ccc":"aZBli","da3e98b22adbeb4d":"8erHk","ac988f97513b753d":"c7iLU","9870197f68f46ce0":"8iXfv","1909d7c96cdc25f":"9LBQ0","71900ce38a39f45e":"5YAVC","d10c891d581aa72e":"eUc8K","4e86e364e53b9592":"cXWVy","da9d375ff4cc6e20":"3eBmC","4dc71cac2c1091fe":"7xEe4","2ae7e13dc9f19b08":"3SaRU","d4a94a2ec96f0f2a":"6usFi","4d0999fb1640b484":"8cyV8","7eb1276e543406ee":"kEbAN","a1c7d50e344e35d":"FHdhZ","d8d3e9b2c45514ef":"fYG3O","73770b04ebc58a8f":"6HuVg","3e326606efe38636":"1nL3h","6911c8c8c7ec7f4b":"aNh58","8bfeb5a28916238c":"gvo2K","f9da5f86d76bdb5b":"djw68","ab0ad55909afb45d":"7v1aO","12b4ab72d67dbba1":"j4o2e","3fdef08c5feabc1f":"emXDC","97900455fc019c34":"iEyez","b1db13bef3dedd4":"7Bztg","8c3d146eaaa021db":"hSHbc","8188eea6f1104e67":"hlnaH","ddf969591a3cfbba":"aouTd","f51181bb6365decf":"9D8PP","cd282a7a417c03b7":"vsssO","32d9f1c4543900f0":"ilQyO","e759ed436cf99224":"4zffB","dfb837cbc24b9472":"5PyAS","e112f5b01b10cbb3":"liDiH","1166f1f821e20afd":"jkpK9","201fc2d2fa0f7eac":"fm8gO","11280debdefd0431":"8clkH","cdfa70ae1d308d00":"jCqJA","f34fe41922b2586d":"iHnxI","8fe9ec68514a39e3":"dhF6W","deb2151dfbb509cd":"bjQBN","10cc9bcddfb0a9e3":"cexnc","8766a5d2d9a1cbe5":"j6xb7","2346505ad78baa47":"fktHr","565cc7de1c720893":"dkJqj","20604925b297b483":"1PoDp","b60f28e19ed5645d":"29w52","46a3ac90ead8eb4b":"b8Ryi","8f8930169555991d":"28BWP","54bfe7ee4aef0962":"etNAd","773d8be78472f983":"da5Qj","d562071e9c1ece6":"c3SRE","b4fcf97888be254":"8wVFX","9935775539310a4":"lXP0C","dfd60661f83422de":"fIbgq","9d0c04b5449c6e78":"1iLlr","720ccb4e93255b25":"kxlsn","6ccaff7eb0bdeb93":"cYeBO","4806d8e218627ab5":"c97zJ","2c4f60e32f378ca9":"7cxt5","865f538633d0b1dc":"8O7lJ","39be71bc5a9474e0":"hnvcZ","862f63336e6a3803":"iNm5p","64389f8910c4a5b9":"i1KCo","47d3b6b473ade444":"1qjRI","af58e9024f3ec2aa":"kYx5D","d5c714291b3e2173":"3CpXl","d9f14ea8509d3156":"bbHSK","e23e1493d8180c78":"a6uVO","bd8f00b86989f84b":"11TqK","f164ec680e944d6d":"kJmA9","fc926fb4ed15df4":"7t0Ni","77d47f70247ccaa0":"f1HyC","213ed12e877bdf8":"603Fu","337f47ad9c8e55bb":"4npBo","dc15afeda3fdbc10":"bWfsu","ffdc7890af793ea9":"7wh1z","dd871b27f50d719f":"kkhtC","e3ed8d3f9f24501d":"4kU6f","a661ec8bde091a63":"eGwR4","289dada425dcdbf0":"5BBif","93ca55a06b72c0f4":"3ZFqu","3343679c8bbbb107":"2B6GF","fb58c487e522e11b":"5hNxT","d696c059aa7292c1":"1PzCT","4f72da706ff07282":"hw4pW","2d95b671d5e6b31d":"ejcmf","2f4a2df8e9e6c6c5":"92Daq","c26a8c456b0bfbbd":"9ecHa","3f701d22f6a1ae4f":"9WB01","19450e227fa8d4e6":"lMdFn","1e27e0a9c5922d42":"gJ9to","a084f06dc30f536f":"6hwBu","2fa52e674a840793":"6QcWc","e94ec1065f59594f":"cuCwu","4a3d192459069081":"gUkcE","b65864aa197fa6d0":"bTZet","c7939ca45e20c9e6":"9eGOi","4e948917a9e514ef":"2AKVa","3898a29ba68820":"huYsy","26317caa31b191b2":"4pukm","42715847c1bc4744":"crgdf","421a5f52f1a54bf2":"6zkUo","7b382b2b0bbad026":"6VZ1g","efcbb5cde267920c":"7JkX0","ecaccd9706afa493":"iZKXC","29dd4c45ad77a411":"4bhXU","9ebc252dff86358a":"b5ke7","181e6b8ac3026ce3":"i7mgv","f0d63a691568917b":"2OeqU","cb2bff42f9bf1da3":"HHtM3","2008e68ae020640b":"cfVWC","7703d2aff3ac19f2":"lqOeN","cc7873bdb72ab106":"847hz","ddb0c8ec6e1128ec":"kx4RT","f0fdfe553e8b2b8b":"aJvas","83fd77e6e3d1ed4d":"ddlG9","bfdc94773439b970":"kiaVj","e53408e84c34725c":"2xxcp","dee32d35a055d161":"cRhBz","8eb0fe6d497319ac":"4Pjpt","2d4bf2da7d0a6ebf":"eViYn","97707bd921d6bd97":"dmfY8","112c0986b11e3773":"dOaLH","3d504689dbdd2069":"eYlDl","38539e1f0ba5a0da":"2Cz6m","adf6607a48b65015":"fpeg1","6a060de4f8cd5f51":"8Anfn","a1a4532e178c00e4":"6P0Zu","644f90a72aefea2f":"5lFXr","67704ca106e263d":"7LPfk","5aa9c5adff06bff6":"43XHq","d2192ee8df9e83c3":"2GGg8","11023e0d66f4a5c6":"kyIIj","a1c31f725c1b9044":"o1mLN","557036c03b3c0cf2":"92xae","cfcd6ed14b0881ce":"8H8sh","c49dc6a73b22dff2":"jGqFh","feb7bc20d8ad2999":"lOty5","44700e4b32d1904e":"gETKN","b917fe1860ba64a6":"gCcTm","19f93dc81edaaaf1":"ez4mp","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"l5gn5":[function(require,module,exports) {
module.exports = require("8df25dd00b2052c").getBundleURL("ff8Dz") + "0.c05f597e.png" + "?" + Date.now();

},{"8df25dd00b2052c":"dhz1j"}],"lDCP0":[function(require,module,exports) {
module.exports = require("145752853a1e85bc").getBundleURL("ff8Dz") + "1.f5e0bbca.png" + "?" + Date.now();

},{"145752853a1e85bc":"dhz1j"}],"kZ6X3":[function(require,module,exports) {
module.exports = require("9034244d4add9c8e").getBundleURL("ff8Dz") + "2.6e5a4f0f.png" + "?" + Date.now();

},{"9034244d4add9c8e":"dhz1j"}],"fe6WN":[function(require,module,exports) {
module.exports = require("f2799990dde9cf5e").getBundleURL("ff8Dz") + "3.f5fa0501.png" + "?" + Date.now();

},{"f2799990dde9cf5e":"dhz1j"}],"dgTED":[function(require,module,exports) {
module.exports = require("dcabffbdf2f60a29").getBundleURL("ff8Dz") + "4.4abc774b.png" + "?" + Date.now();

},{"dcabffbdf2f60a29":"dhz1j"}],"kCBBO":[function(require,module,exports) {
module.exports = require("539f353f575804c5").getBundleURL("ff8Dz") + "5.da2c8650.png" + "?" + Date.now();

},{"539f353f575804c5":"dhz1j"}],"15RRO":[function(require,module,exports) {
module.exports = require("bd376069b3c65925").getBundleURL("ff8Dz") + "6.ea9ec2f6.png" + "?" + Date.now();

},{"bd376069b3c65925":"dhz1j"}],"eui1z":[function(require,module,exports) {
module.exports = require("df5c42b28fce1ebc").getBundleURL("ff8Dz") + "7.301ec684.png" + "?" + Date.now();

},{"df5c42b28fce1ebc":"dhz1j"}],"65DfP":[function(require,module,exports) {
module.exports = require("f298cb296ed9a82e").getBundleURL("ff8Dz") + "8.b06abc28.png" + "?" + Date.now();

},{"f298cb296ed9a82e":"dhz1j"}],"6PSIo":[function(require,module,exports) {
module.exports = require("90b80700aef489a8").getBundleURL("ff8Dz") + "9.26742fae.png" + "?" + Date.now();

},{"90b80700aef489a8":"dhz1j"}],"9NG8i":[function(require,module,exports) {
module.exports = require("5b95c2fdfcb3ea56").getBundleURL("ff8Dz") + "10.822bf667.png" + "?" + Date.now();

},{"5b95c2fdfcb3ea56":"dhz1j"}],"jAGGy":[function(require,module,exports) {
module.exports = require("a32b6dc66b6ec6b8").getBundleURL("ff8Dz") + "11.449a5e9c.png" + "?" + Date.now();

},{"a32b6dc66b6ec6b8":"dhz1j"}],"5xvKL":[function(require,module,exports) {
module.exports = require("76aaa58a2cd479bd").getBundleURL("ff8Dz") + "12.d9546cf7.png" + "?" + Date.now();

},{"76aaa58a2cd479bd":"dhz1j"}],"7g6Zp":[function(require,module,exports) {
module.exports = require("80c1c573e7e3b53a").getBundleURL("ff8Dz") + "13.974d4d52.png" + "?" + Date.now();

},{"80c1c573e7e3b53a":"dhz1j"}],"ioyVd":[function(require,module,exports) {
module.exports = require("f9f95a7c1ba57092").getBundleURL("ff8Dz") + "14.52e1ebb3.png" + "?" + Date.now();

},{"f9f95a7c1ba57092":"dhz1j"}],"9N8KE":[function(require,module,exports) {
module.exports = require("b994109d2260dea0").getBundleURL("ff8Dz") + "15.d1a1daf0.png" + "?" + Date.now();

},{"b994109d2260dea0":"dhz1j"}],"3JEDA":[function(require,module,exports) {
module.exports = require("8d236a5e36ca6230").getBundleURL("ff8Dz") + "16.50f9fa1d.png" + "?" + Date.now();

},{"8d236a5e36ca6230":"dhz1j"}],"eNZGp":[function(require,module,exports) {
module.exports = require("2dcd7949d39aff56").getBundleURL("ff8Dz") + "0.193e2e66.png" + "?" + Date.now();

},{"2dcd7949d39aff56":"dhz1j"}],"cXWpq":[function(require,module,exports) {
module.exports = require("c545b321f79d6a36").getBundleURL("ff8Dz") + "1.a5561b19.png" + "?" + Date.now();

},{"c545b321f79d6a36":"dhz1j"}],"3zpiz":[function(require,module,exports) {
module.exports = require("7e3c2c5ebb290095").getBundleURL("ff8Dz") + "2.4495a959.png" + "?" + Date.now();

},{"7e3c2c5ebb290095":"dhz1j"}],"ffFBr":[function(require,module,exports) {
module.exports = require("a783f9982e34d900").getBundleURL("ff8Dz") + "3.17530a32.png" + "?" + Date.now();

},{"a783f9982e34d900":"dhz1j"}],"lf0Gr":[function(require,module,exports) {
module.exports = require("e352ee12f64f8f3").getBundleURL("ff8Dz") + "4.2b6bb0c6.png" + "?" + Date.now();

},{"e352ee12f64f8f3":"dhz1j"}],"c6Gn8":[function(require,module,exports) {
module.exports = require("40420c9d33d53c74").getBundleURL("ff8Dz") + "5.15620d2d.png" + "?" + Date.now();

},{"40420c9d33d53c74":"dhz1j"}],"jsEFM":[function(require,module,exports) {
module.exports = require("40ae185b91ca5255").getBundleURL("ff8Dz") + "6.d6e35f7b.png" + "?" + Date.now();

},{"40ae185b91ca5255":"dhz1j"}],"fs3w6":[function(require,module,exports) {
module.exports = require("cafe4c3150c298af").getBundleURL("ff8Dz") + "7.9ec250db.png" + "?" + Date.now();

},{"cafe4c3150c298af":"dhz1j"}],"lYA4j":[function(require,module,exports) {
module.exports = require("a2bf456726a934a7").getBundleURL("ff8Dz") + "8.ac44445a.png" + "?" + Date.now();

},{"a2bf456726a934a7":"dhz1j"}],"avtru":[function(require,module,exports) {
module.exports = require("7f7de65cba52fdb1").getBundleURL("ff8Dz") + "9.66d0deb5.png" + "?" + Date.now();

},{"7f7de65cba52fdb1":"dhz1j"}],"9J3V7":[function(require,module,exports) {
module.exports = require("6703011845f932ff").getBundleURL("ff8Dz") + "10.919b07f0.png" + "?" + Date.now();

},{"6703011845f932ff":"dhz1j"}],"68vZV":[function(require,module,exports) {
module.exports = require("160ba6d5da7f7a25").getBundleURL("ff8Dz") + "11.7ae218ca.png" + "?" + Date.now();

},{"160ba6d5da7f7a25":"dhz1j"}],"eVfeX":[function(require,module,exports) {
module.exports = require("1145fcb13dc217a").getBundleURL("ff8Dz") + "12.ab13bd0d.png" + "?" + Date.now();

},{"1145fcb13dc217a":"dhz1j"}],"jxcx0":[function(require,module,exports) {
module.exports = require("426fe4dd749f5f00").getBundleURL("ff8Dz") + "13.e7fbb1d0.png" + "?" + Date.now();

},{"426fe4dd749f5f00":"dhz1j"}],"f6mOk":[function(require,module,exports) {
module.exports = require("43b17820f41f8402").getBundleURL("ff8Dz") + "14.7cd9ba3f.png" + "?" + Date.now();

},{"43b17820f41f8402":"dhz1j"}],"jVHnl":[function(require,module,exports) {
module.exports = require("460670e1e1119fee").getBundleURL("ff8Dz") + "15.48c0ac6b.png" + "?" + Date.now();

},{"460670e1e1119fee":"dhz1j"}],"8gMKz":[function(require,module,exports) {
module.exports = require("2ff8becda9ee347b").getBundleURL("ff8Dz") + "16.5a9c6892.png" + "?" + Date.now();

},{"2ff8becda9ee347b":"dhz1j"}],"3ROny":[function(require,module,exports) {
module.exports = require("6f027a0ab2cbf872").getBundleURL("ff8Dz") + "0.3639ed90.png" + "?" + Date.now();

},{"6f027a0ab2cbf872":"dhz1j"}],"cSin1":[function(require,module,exports) {
module.exports = require("9c69a757c4fd608e").getBundleURL("ff8Dz") + "1.8ae217f4.png" + "?" + Date.now();

},{"9c69a757c4fd608e":"dhz1j"}],"cOGxY":[function(require,module,exports) {
module.exports = require("aeaf5891c606fba0").getBundleURL("ff8Dz") + "2.3624aafa.png" + "?" + Date.now();

},{"aeaf5891c606fba0":"dhz1j"}],"fkUsz":[function(require,module,exports) {
module.exports = require("be8d8e0d4ca57150").getBundleURL("ff8Dz") + "3.26d4178a.png" + "?" + Date.now();

},{"be8d8e0d4ca57150":"dhz1j"}],"6nU7W":[function(require,module,exports) {
module.exports = require("94550e99f6e05d42").getBundleURL("ff8Dz") + "4.a9fcc8c6.png" + "?" + Date.now();

},{"94550e99f6e05d42":"dhz1j"}],"1FL5r":[function(require,module,exports) {
module.exports = require("86a7a5432675ad22").getBundleURL("ff8Dz") + "5.9687d14b.png" + "?" + Date.now();

},{"86a7a5432675ad22":"dhz1j"}],"lvtLa":[function(require,module,exports) {
module.exports = require("74d6d951957924c9").getBundleURL("ff8Dz") + "6.181ecc68.png" + "?" + Date.now();

},{"74d6d951957924c9":"dhz1j"}],"i68qF":[function(require,module,exports) {
module.exports = require("f9f98cbeb5b8a839").getBundleURL("ff8Dz") + "7.eba5d7fc.png" + "?" + Date.now();

},{"f9f98cbeb5b8a839":"dhz1j"}],"gehAt":[function(require,module,exports) {
module.exports = require("a17d828b08e5c588").getBundleURL("ff8Dz") + "8.3989665e.png" + "?" + Date.now();

},{"a17d828b08e5c588":"dhz1j"}],"hupKc":[function(require,module,exports) {
module.exports = require("e7aab1cf75a86c2").getBundleURL("ff8Dz") + "9.399e354b.png" + "?" + Date.now();

},{"e7aab1cf75a86c2":"dhz1j"}],"ltvKe":[function(require,module,exports) {
module.exports = require("a67eb81a455f031d").getBundleURL("ff8Dz") + "10.86c52300.png" + "?" + Date.now();

},{"a67eb81a455f031d":"dhz1j"}],"eDLi6":[function(require,module,exports) {
module.exports = require("1d47694ebf6dd34a").getBundleURL("ff8Dz") + "11.b5df9679.png" + "?" + Date.now();

},{"1d47694ebf6dd34a":"dhz1j"}],"aTYWB":[function(require,module,exports) {
module.exports = require("aad240fdbdda7113").getBundleURL("ff8Dz") + "12.60821c78.png" + "?" + Date.now();

},{"aad240fdbdda7113":"dhz1j"}],"9pJdk":[function(require,module,exports) {
module.exports = require("1fa1b8ebe3642a40").getBundleURL("ff8Dz") + "13.00ff10d2.png" + "?" + Date.now();

},{"1fa1b8ebe3642a40":"dhz1j"}],"2vkrf":[function(require,module,exports) {
module.exports = require("a88ef67d287715b4").getBundleURL("ff8Dz") + "14.80d403ef.png" + "?" + Date.now();

},{"a88ef67d287715b4":"dhz1j"}],"9d6Rh":[function(require,module,exports) {
module.exports = require("6c6104d047909307").getBundleURL("ff8Dz") + "15.b82aa396.png" + "?" + Date.now();

},{"6c6104d047909307":"dhz1j"}],"guDvt":[function(require,module,exports) {
module.exports = require("938beffac5e7f2c9").getBundleURL("ff8Dz") + "16.550c461a.png" + "?" + Date.now();

},{"938beffac5e7f2c9":"dhz1j"}],"5yGBr":[function(require,module,exports) {
module.exports = require("a7694b269de51cfe").getBundleURL("ff8Dz") + "0.665bc96e.png" + "?" + Date.now();

},{"a7694b269de51cfe":"dhz1j"}],"aZBli":[function(require,module,exports) {
module.exports = require("dcd3dec0f87d46b2").getBundleURL("ff8Dz") + "1.bb08120e.png" + "?" + Date.now();

},{"dcd3dec0f87d46b2":"dhz1j"}],"8erHk":[function(require,module,exports) {
module.exports = require("eebf16e8a3254366").getBundleURL("ff8Dz") + "2.1919af40.png" + "?" + Date.now();

},{"eebf16e8a3254366":"dhz1j"}],"c7iLU":[function(require,module,exports) {
module.exports = require("19e5610df5d1e72b").getBundleURL("ff8Dz") + "0.b9b166ae.png" + "?" + Date.now();

},{"19e5610df5d1e72b":"dhz1j"}],"8iXfv":[function(require,module,exports) {
module.exports = require("aac70e19d1058dcf").getBundleURL("ff8Dz") + "1.494dee77.png" + "?" + Date.now();

},{"aac70e19d1058dcf":"dhz1j"}],"9LBQ0":[function(require,module,exports) {
module.exports = require("ae941a8e8e8d6b9e").getBundleURL("ff8Dz") + "2.22409302.png" + "?" + Date.now();

},{"ae941a8e8e8d6b9e":"dhz1j"}],"5YAVC":[function(require,module,exports) {
module.exports = require("ee578c576eba58f3").getBundleURL("ff8Dz") + "0.b53c2dc9.png" + "?" + Date.now();

},{"ee578c576eba58f3":"dhz1j"}],"eUc8K":[function(require,module,exports) {
module.exports = require("416b9a0a3c209ca5").getBundleURL("ff8Dz") + "1.3a2fef45.png" + "?" + Date.now();

},{"416b9a0a3c209ca5":"dhz1j"}],"cXWVy":[function(require,module,exports) {
module.exports = require("7fe7d74ef07ea2f2").getBundleURL("ff8Dz") + "2.a436573c.png" + "?" + Date.now();

},{"7fe7d74ef07ea2f2":"dhz1j"}],"3eBmC":[function(require,module,exports) {
module.exports = require("a43525d00af38502").getBundleURL("ff8Dz") + "0.47fafcca.png" + "?" + Date.now();

},{"a43525d00af38502":"dhz1j"}],"7xEe4":[function(require,module,exports) {
module.exports = require("c487826468352286").getBundleURL("ff8Dz") + "1.07a7f6f3.png" + "?" + Date.now();

},{"c487826468352286":"dhz1j"}],"3SaRU":[function(require,module,exports) {
module.exports = require("fb45732c2c3c5435").getBundleURL("ff8Dz") + "2.8adc8632.png" + "?" + Date.now();

},{"fb45732c2c3c5435":"dhz1j"}],"6usFi":[function(require,module,exports) {
module.exports = require("6428376b33d9427e").getBundleURL("ff8Dz") + "3.70eb75c6.png" + "?" + Date.now();

},{"6428376b33d9427e":"dhz1j"}],"8cyV8":[function(require,module,exports) {
module.exports = require("e886c0c01ae39020").getBundleURL("ff8Dz") + "4.ce12d47a.png" + "?" + Date.now();

},{"e886c0c01ae39020":"dhz1j"}],"kEbAN":[function(require,module,exports) {
module.exports = require("42f161fd08631bca").getBundleURL("ff8Dz") + "5.071c1240.png" + "?" + Date.now();

},{"42f161fd08631bca":"dhz1j"}],"FHdhZ":[function(require,module,exports) {
module.exports = require("47512f34302bca57").getBundleURL("ff8Dz") + "6.8684514b.png" + "?" + Date.now();

},{"47512f34302bca57":"dhz1j"}],"fYG3O":[function(require,module,exports) {
module.exports = require("6689781c5de173f1").getBundleURL("ff8Dz") + "0.b9d8eb08.png" + "?" + Date.now();

},{"6689781c5de173f1":"dhz1j"}],"6HuVg":[function(require,module,exports) {
module.exports = require("6784f78d3c6a46a8").getBundleURL("ff8Dz") + "1.02d137e6.png" + "?" + Date.now();

},{"6784f78d3c6a46a8":"dhz1j"}],"1nL3h":[function(require,module,exports) {
module.exports = require("4645d75fc46b110b").getBundleURL("ff8Dz") + "2.937b6f73.png" + "?" + Date.now();

},{"4645d75fc46b110b":"dhz1j"}],"aNh58":[function(require,module,exports) {
module.exports = require("62f4d641cb2c0d42").getBundleURL("ff8Dz") + "3.53511686.png" + "?" + Date.now();

},{"62f4d641cb2c0d42":"dhz1j"}],"gvo2K":[function(require,module,exports) {
module.exports = require("9a0f07881ba9567d").getBundleURL("ff8Dz") + "4.e0b9e2d0.png" + "?" + Date.now();

},{"9a0f07881ba9567d":"dhz1j"}],"djw68":[function(require,module,exports) {
module.exports = require("c43dc279ef6fc5fd").getBundleURL("ff8Dz") + "5.44f19494.png" + "?" + Date.now();

},{"c43dc279ef6fc5fd":"dhz1j"}],"7v1aO":[function(require,module,exports) {
module.exports = require("331ad86734d1f376").getBundleURL("ff8Dz") + "6.ae7d27e4.png" + "?" + Date.now();

},{"331ad86734d1f376":"dhz1j"}],"j4o2e":[function(require,module,exports) {
module.exports = require("dc5adeec93b9d14b").getBundleURL("ff8Dz") + "0.8fa95051.png" + "?" + Date.now();

},{"dc5adeec93b9d14b":"dhz1j"}],"emXDC":[function(require,module,exports) {
module.exports = require("c437a6829ccf430d").getBundleURL("ff8Dz") + "1.b89394f0.png" + "?" + Date.now();

},{"c437a6829ccf430d":"dhz1j"}],"iEyez":[function(require,module,exports) {
module.exports = require("d21b0847d8f0ffe6").getBundleURL("ff8Dz") + "2.86e25a86.png" + "?" + Date.now();

},{"d21b0847d8f0ffe6":"dhz1j"}],"7Bztg":[function(require,module,exports) {
module.exports = require("b86ad78e71ef5302").getBundleURL("ff8Dz") + "3.cbf74ba1.png" + "?" + Date.now();

},{"b86ad78e71ef5302":"dhz1j"}],"hSHbc":[function(require,module,exports) {
module.exports = require("b786ad20174ebfa4").getBundleURL("ff8Dz") + "4.cf20c243.png" + "?" + Date.now();

},{"b786ad20174ebfa4":"dhz1j"}],"hlnaH":[function(require,module,exports) {
module.exports = require("61c5b3f7f68a0ff6").getBundleURL("ff8Dz") + "5.52e02548.png" + "?" + Date.now();

},{"61c5b3f7f68a0ff6":"dhz1j"}],"aouTd":[function(require,module,exports) {
module.exports = require("41c3ffea1e4706e5").getBundleURL("ff8Dz") + "6.d5751dd7.png" + "?" + Date.now();

},{"41c3ffea1e4706e5":"dhz1j"}],"9D8PP":[function(require,module,exports) {
module.exports = require("3e811e9cc31c195f").getBundleURL("ff8Dz") + "0.7bf4b80b.png" + "?" + Date.now();

},{"3e811e9cc31c195f":"dhz1j"}],"vsssO":[function(require,module,exports) {
module.exports = require("e20c9e055941afaf").getBundleURL("ff8Dz") + "1.1e459d26.png" + "?" + Date.now();

},{"e20c9e055941afaf":"dhz1j"}],"ilQyO":[function(require,module,exports) {
module.exports = require("65aa6d13b02527d5").getBundleURL("ff8Dz") + "2.2fdb3422.png" + "?" + Date.now();

},{"65aa6d13b02527d5":"dhz1j"}],"4zffB":[function(require,module,exports) {
module.exports = require("b825346671811e16").getBundleURL("ff8Dz") + "0.02fcac5d.png" + "?" + Date.now();

},{"b825346671811e16":"dhz1j"}],"5PyAS":[function(require,module,exports) {
module.exports = require("a0d3e5a13d0260f5").getBundleURL("ff8Dz") + "1.d47ded85.png" + "?" + Date.now();

},{"a0d3e5a13d0260f5":"dhz1j"}],"liDiH":[function(require,module,exports) {
module.exports = require("666f9ce01c912348").getBundleURL("ff8Dz") + "2.fd8d1431.png" + "?" + Date.now();

},{"666f9ce01c912348":"dhz1j"}],"jkpK9":[function(require,module,exports) {
module.exports = require("15410b7a8088e097").getBundleURL("ff8Dz") + "0.d58179f3.png" + "?" + Date.now();

},{"15410b7a8088e097":"dhz1j"}],"fm8gO":[function(require,module,exports) {
module.exports = require("e5cb0dd8f8b3398f").getBundleURL("ff8Dz") + "1.c90533b8.png" + "?" + Date.now();

},{"e5cb0dd8f8b3398f":"dhz1j"}],"8clkH":[function(require,module,exports) {
module.exports = require("3544400e7f0d9e56").getBundleURL("ff8Dz") + "2.e531ead6.png" + "?" + Date.now();

},{"3544400e7f0d9e56":"dhz1j"}],"jCqJA":[function(require,module,exports) {
module.exports = require("889e619ecd6f0fc7").getBundleURL("ff8Dz") + "0.1ca82a97.png" + "?" + Date.now();

},{"889e619ecd6f0fc7":"dhz1j"}],"iHnxI":[function(require,module,exports) {
module.exports = require("1695f5507efe05a7").getBundleURL("ff8Dz") + "1.183544ea.png" + "?" + Date.now();

},{"1695f5507efe05a7":"dhz1j"}],"dhF6W":[function(require,module,exports) {
module.exports = require("b3f27193e6b644eb").getBundleURL("ff8Dz") + "2.925ff2fe.png" + "?" + Date.now();

},{"b3f27193e6b644eb":"dhz1j"}],"bjQBN":[function(require,module,exports) {
module.exports = require("22230d03fa54aeb7").getBundleURL("ff8Dz") + "0.7f2655b9.png" + "?" + Date.now();

},{"22230d03fa54aeb7":"dhz1j"}],"cexnc":[function(require,module,exports) {
module.exports = require("3c12ec0609cbe803").getBundleURL("ff8Dz") + "1.29b1634a.png" + "?" + Date.now();

},{"3c12ec0609cbe803":"dhz1j"}],"j6xb7":[function(require,module,exports) {
module.exports = require("f63390842c83407e").getBundleURL("ff8Dz") + "2.e9ae6571.png" + "?" + Date.now();

},{"f63390842c83407e":"dhz1j"}],"fktHr":[function(require,module,exports) {
module.exports = require("eff4efcd0237901e").getBundleURL("ff8Dz") + "0.f67f4ca5.png" + "?" + Date.now();

},{"eff4efcd0237901e":"dhz1j"}],"dkJqj":[function(require,module,exports) {
module.exports = require("35aabe9444b57b45").getBundleURL("ff8Dz") + "1.7a00a821.png" + "?" + Date.now();

},{"35aabe9444b57b45":"dhz1j"}],"1PoDp":[function(require,module,exports) {
module.exports = require("43a4436449d45db9").getBundleURL("ff8Dz") + "2.0fd24eab.png" + "?" + Date.now();

},{"43a4436449d45db9":"dhz1j"}],"29w52":[function(require,module,exports) {
module.exports = require("4173ccae8eb7a6c6").getBundleURL("ff8Dz") + "0.d664e154.png" + "?" + Date.now();

},{"4173ccae8eb7a6c6":"dhz1j"}],"b8Ryi":[function(require,module,exports) {
module.exports = require("4d2d5bffe1b06194").getBundleURL("ff8Dz") + "1.84e98fe3.png" + "?" + Date.now();

},{"4d2d5bffe1b06194":"dhz1j"}],"28BWP":[function(require,module,exports) {
module.exports = require("d307373f55f15525").getBundleURL("ff8Dz") + "0.25491624.png" + "?" + Date.now();

},{"d307373f55f15525":"dhz1j"}],"etNAd":[function(require,module,exports) {
module.exports = require("1a3d508cf8566a4e").getBundleURL("ff8Dz") + "1.72447919.png" + "?" + Date.now();

},{"1a3d508cf8566a4e":"dhz1j"}],"da5Qj":[function(require,module,exports) {
module.exports = require("13eadd11f39169c0").getBundleURL("ff8Dz") + "0.69e48132.png" + "?" + Date.now();

},{"13eadd11f39169c0":"dhz1j"}],"c3SRE":[function(require,module,exports) {
module.exports = require("34f92cb7761f87b1").getBundleURL("ff8Dz") + "1.bed8f360.png" + "?" + Date.now();

},{"34f92cb7761f87b1":"dhz1j"}],"8wVFX":[function(require,module,exports) {
module.exports = require("2a0fce67ab40d6aa").getBundleURL("ff8Dz") + "0.a945627c.png" + "?" + Date.now();

},{"2a0fce67ab40d6aa":"dhz1j"}],"lXP0C":[function(require,module,exports) {
module.exports = require("62455c6ed71b8255").getBundleURL("ff8Dz") + "1.d67f7f85.png" + "?" + Date.now();

},{"62455c6ed71b8255":"dhz1j"}],"fIbgq":[function(require,module,exports) {
module.exports = require("8de01ed8ea96ff14").getBundleURL("ff8Dz") + "2.856e4f6a.png" + "?" + Date.now();

},{"8de01ed8ea96ff14":"dhz1j"}],"1iLlr":[function(require,module,exports) {
module.exports = require("643a3329b745b307").getBundleURL("ff8Dz") + "0.789fd4a1.png" + "?" + Date.now();

},{"643a3329b745b307":"dhz1j"}],"kxlsn":[function(require,module,exports) {
module.exports = require("d6990282c9a18c8").getBundleURL("ff8Dz") + "1.8b40dd4a.png" + "?" + Date.now();

},{"d6990282c9a18c8":"dhz1j"}],"cYeBO":[function(require,module,exports) {
module.exports = require("b1d57d40acf32f66").getBundleURL("ff8Dz") + "2.ca95d9a6.png" + "?" + Date.now();

},{"b1d57d40acf32f66":"dhz1j"}],"c97zJ":[function(require,module,exports) {
module.exports = require("750f283e84c40081").getBundleURL("ff8Dz") + "0.4458cafc.png" + "?" + Date.now();

},{"750f283e84c40081":"dhz1j"}],"7cxt5":[function(require,module,exports) {
module.exports = require("340c79e7d3bdee3f").getBundleURL("ff8Dz") + "1.b03a4630.png" + "?" + Date.now();

},{"340c79e7d3bdee3f":"dhz1j"}],"8O7lJ":[function(require,module,exports) {
module.exports = require("1d209162ddadbda1").getBundleURL("ff8Dz") + "2.51782ce6.png" + "?" + Date.now();

},{"1d209162ddadbda1":"dhz1j"}],"hnvcZ":[function(require,module,exports) {
module.exports = require("7b68883902980d2a").getBundleURL("ff8Dz") + "0.344dfc5d.png" + "?" + Date.now();

},{"7b68883902980d2a":"dhz1j"}],"iNm5p":[function(require,module,exports) {
module.exports = require("ec3d4b7b97d4774e").getBundleURL("ff8Dz") + "1.6cfd4c0f.png" + "?" + Date.now();

},{"ec3d4b7b97d4774e":"dhz1j"}],"i1KCo":[function(require,module,exports) {
module.exports = require("743ef01ff6bd4bdf").getBundleURL("ff8Dz") + "2.d3829fbe.png" + "?" + Date.now();

},{"743ef01ff6bd4bdf":"dhz1j"}],"1qjRI":[function(require,module,exports) {
module.exports = require("c21748d3a152cfde").getBundleURL("ff8Dz") + "3.f973e4e6.png" + "?" + Date.now();

},{"c21748d3a152cfde":"dhz1j"}],"kYx5D":[function(require,module,exports) {
module.exports = require("39be6490252ab10d").getBundleURL("ff8Dz") + "0.8a16c0d1.png" + "?" + Date.now();

},{"39be6490252ab10d":"dhz1j"}],"3CpXl":[function(require,module,exports) {
module.exports = require("84aff684dfcb1d82").getBundleURL("ff8Dz") + "1.b7e32682.png" + "?" + Date.now();

},{"84aff684dfcb1d82":"dhz1j"}],"bbHSK":[function(require,module,exports) {
module.exports = require("83e2bd2a59940cd1").getBundleURL("ff8Dz") + "2.56781b8b.png" + "?" + Date.now();

},{"83e2bd2a59940cd1":"dhz1j"}],"a6uVO":[function(require,module,exports) {
module.exports = require("7beb411952131576").getBundleURL("ff8Dz") + "3.9ad0da0e.png" + "?" + Date.now();

},{"7beb411952131576":"dhz1j"}],"11TqK":[function(require,module,exports) {
module.exports = require("3ae5adabdf063588").getBundleURL("ff8Dz") + "0.67ca11be.png" + "?" + Date.now();

},{"3ae5adabdf063588":"dhz1j"}],"kJmA9":[function(require,module,exports) {
module.exports = require("7ad5f174662b6bf7").getBundleURL("ff8Dz") + "1.58a318a4.png" + "?" + Date.now();

},{"7ad5f174662b6bf7":"dhz1j"}],"7t0Ni":[function(require,module,exports) {
module.exports = require("2986b7d4f00b0046").getBundleURL("ff8Dz") + "2.3a2455c9.png" + "?" + Date.now();

},{"2986b7d4f00b0046":"dhz1j"}],"f1HyC":[function(require,module,exports) {
module.exports = require("10fdbd425f91e3c").getBundleURL("ff8Dz") + "3.2eddc175.png" + "?" + Date.now();

},{"10fdbd425f91e3c":"dhz1j"}],"603Fu":[function(require,module,exports) {
module.exports = require("df734dfa8fa472a4").getBundleURL("ff8Dz") + "0.6d26c893.png" + "?" + Date.now();

},{"df734dfa8fa472a4":"dhz1j"}],"4npBo":[function(require,module,exports) {
module.exports = require("8ce51b1d80989fe").getBundleURL("ff8Dz") + "1.a7ad66df.png" + "?" + Date.now();

},{"8ce51b1d80989fe":"dhz1j"}],"bWfsu":[function(require,module,exports) {
module.exports = require("e4ac40e00d3ecd4d").getBundleURL("ff8Dz") + "2.4d31e85d.png" + "?" + Date.now();

},{"e4ac40e00d3ecd4d":"dhz1j"}],"7wh1z":[function(require,module,exports) {
module.exports = require("1d6317c373094f2d").getBundleURL("ff8Dz") + "3.03170b54.png" + "?" + Date.now();

},{"1d6317c373094f2d":"dhz1j"}],"kkhtC":[function(require,module,exports) {
module.exports = require("12a3c679da6ece2f").getBundleURL("ff8Dz") + "0.32920bc1.png" + "?" + Date.now();

},{"12a3c679da6ece2f":"dhz1j"}],"4kU6f":[function(require,module,exports) {
module.exports = require("887c897c38daffec").getBundleURL("ff8Dz") + "1.e87a028f.png" + "?" + Date.now();

},{"887c897c38daffec":"dhz1j"}],"eGwR4":[function(require,module,exports) {
module.exports = require("624c841d121585b8").getBundleURL("ff8Dz") + "2.461f64a2.png" + "?" + Date.now();

},{"624c841d121585b8":"dhz1j"}],"5BBif":[function(require,module,exports) {
module.exports = require("95d4b50890b2b405").getBundleURL("ff8Dz") + "3.7d1e4de7.png" + "?" + Date.now();

},{"95d4b50890b2b405":"dhz1j"}],"3ZFqu":[function(require,module,exports) {
module.exports = require("d487ac840dce24d7").getBundleURL("ff8Dz") + "0.feb1f169.png" + "?" + Date.now();

},{"d487ac840dce24d7":"dhz1j"}],"2B6GF":[function(require,module,exports) {
module.exports = require("e29047a3aa0ae703").getBundleURL("ff8Dz") + "1.9864c0d8.png" + "?" + Date.now();

},{"e29047a3aa0ae703":"dhz1j"}],"5hNxT":[function(require,module,exports) {
module.exports = require("87d7049b5694b218").getBundleURL("ff8Dz") + "2.96b03293.png" + "?" + Date.now();

},{"87d7049b5694b218":"dhz1j"}],"1PzCT":[function(require,module,exports) {
module.exports = require("27e2f660e7561493").getBundleURL("ff8Dz") + "3.9b35045e.png" + "?" + Date.now();

},{"27e2f660e7561493":"dhz1j"}],"hw4pW":[function(require,module,exports) {
module.exports = require("6d9bc30c618485f0").getBundleURL("ff8Dz") + "0.519e3560.png" + "?" + Date.now();

},{"6d9bc30c618485f0":"dhz1j"}],"ejcmf":[function(require,module,exports) {
module.exports = require("ad9f3106ab3768e5").getBundleURL("ff8Dz") + "1.df870eb6.png" + "?" + Date.now();

},{"ad9f3106ab3768e5":"dhz1j"}],"92Daq":[function(require,module,exports) {
module.exports = require("de739abd116e36e3").getBundleURL("ff8Dz") + "2.05831082.png" + "?" + Date.now();

},{"de739abd116e36e3":"dhz1j"}],"9ecHa":[function(require,module,exports) {
module.exports = require("8f7a960b24f3540f").getBundleURL("ff8Dz") + "3.9e4676ba.png" + "?" + Date.now();

},{"8f7a960b24f3540f":"dhz1j"}],"9WB01":[function(require,module,exports) {
module.exports = require("217b82ff6a92001a").getBundleURL("ff8Dz") + "4.cfbe719f.png" + "?" + Date.now();

},{"217b82ff6a92001a":"dhz1j"}],"lMdFn":[function(require,module,exports) {
module.exports = require("589077cd8affc81").getBundleURL("ff8Dz") + "5.d69f4ebb.png" + "?" + Date.now();

},{"589077cd8affc81":"dhz1j"}],"gJ9to":[function(require,module,exports) {
module.exports = require("1dc4df4654fd26e8").getBundleURL("ff8Dz") + "6.3e30cbe5.png" + "?" + Date.now();

},{"1dc4df4654fd26e8":"dhz1j"}],"6hwBu":[function(require,module,exports) {
module.exports = require("8595faeb3ad57112").getBundleURL("ff8Dz") + "0.de9a1197.png" + "?" + Date.now();

},{"8595faeb3ad57112":"dhz1j"}],"6QcWc":[function(require,module,exports) {
module.exports = require("28a18cd42f16a839").getBundleURL("ff8Dz") + "1.f144bb4a.png" + "?" + Date.now();

},{"28a18cd42f16a839":"dhz1j"}],"cuCwu":[function(require,module,exports) {
module.exports = require("c4d2385d65654b24").getBundleURL("ff8Dz") + "2.e5258106.png" + "?" + Date.now();

},{"c4d2385d65654b24":"dhz1j"}],"gUkcE":[function(require,module,exports) {
module.exports = require("f2994c71d83af299").getBundleURL("ff8Dz") + "3.2a976c28.png" + "?" + Date.now();

},{"f2994c71d83af299":"dhz1j"}],"bTZet":[function(require,module,exports) {
module.exports = require("1d028fe825628ae2").getBundleURL("ff8Dz") + "4.aa561ad9.png" + "?" + Date.now();

},{"1d028fe825628ae2":"dhz1j"}],"9eGOi":[function(require,module,exports) {
module.exports = require("f1620c14111f0387").getBundleURL("ff8Dz") + "5.cb5750b3.png" + "?" + Date.now();

},{"f1620c14111f0387":"dhz1j"}],"2AKVa":[function(require,module,exports) {
module.exports = require("e8382a9b37f1dfb1").getBundleURL("ff8Dz") + "6.45b87dec.png" + "?" + Date.now();

},{"e8382a9b37f1dfb1":"dhz1j"}],"huYsy":[function(require,module,exports) {
module.exports = require("23571b0aa9820c6b").getBundleURL("ff8Dz") + "0.a86e0f14.png" + "?" + Date.now();

},{"23571b0aa9820c6b":"dhz1j"}],"4pukm":[function(require,module,exports) {
module.exports = require("e187f8506f9fac2").getBundleURL("ff8Dz") + "1.198fb7df.png" + "?" + Date.now();

},{"e187f8506f9fac2":"dhz1j"}],"crgdf":[function(require,module,exports) {
module.exports = require("202f52db2cd97dee").getBundleURL("ff8Dz") + "2.95895dc3.png" + "?" + Date.now();

},{"202f52db2cd97dee":"dhz1j"}],"6zkUo":[function(require,module,exports) {
module.exports = require("849342082eaadc0f").getBundleURL("ff8Dz") + "3.d9d409b4.png" + "?" + Date.now();

},{"849342082eaadc0f":"dhz1j"}],"6VZ1g":[function(require,module,exports) {
module.exports = require("b0b97e68f4df7b52").getBundleURL("ff8Dz") + "4.9adab829.png" + "?" + Date.now();

},{"b0b97e68f4df7b52":"dhz1j"}],"7JkX0":[function(require,module,exports) {
module.exports = require("42fc7352b2f20cda").getBundleURL("ff8Dz") + "5.e1e413c6.png" + "?" + Date.now();

},{"42fc7352b2f20cda":"dhz1j"}],"iZKXC":[function(require,module,exports) {
module.exports = require("c2030e68118d787e").getBundleURL("ff8Dz") + "6.822d523f.png" + "?" + Date.now();

},{"c2030e68118d787e":"dhz1j"}],"4bhXU":[function(require,module,exports) {
module.exports = require("f3af2096920dabf").getBundleURL("ff8Dz") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.622bc019.MP4" + "?" + Date.now();

},{"f3af2096920dabf":"dhz1j"}],"b5ke7":[function(require,module,exports) {
module.exports = require("d7d208204af476d9").getBundleURL("ff8Dz") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.6a4c9c74.MP4" + "?" + Date.now();

},{"d7d208204af476d9":"dhz1j"}],"i7mgv":[function(require,module,exports) {
module.exports = require("247d9bc1a7b7c441").getBundleURL("ff8Dz") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.ca27e8d7.MP4" + "?" + Date.now();

},{"247d9bc1a7b7c441":"dhz1j"}],"2OeqU":[function(require,module,exports) {
module.exports = require("552cfbd3e52d7608").getBundleURL("ff8Dz") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.7e1a6fe0.MP4" + "?" + Date.now();

},{"552cfbd3e52d7608":"dhz1j"}],"HHtM3":[function(require,module,exports) {
module.exports = require("b58f465fa2964ada").getBundleURL("ff8Dz") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.71195177.MP4" + "?" + Date.now();

},{"b58f465fa2964ada":"dhz1j"}],"cfVWC":[function(require,module,exports) {
module.exports = require("3227a171e0dad237").getBundleURL("ff8Dz") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.0174dd88.MP4" + "?" + Date.now();

},{"3227a171e0dad237":"dhz1j"}],"lqOeN":[function(require,module,exports) {
module.exports = require("4aca2fe1e0e49848").getBundleURL("ff8Dz") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.123228f5.MP4" + "?" + Date.now();

},{"4aca2fe1e0e49848":"dhz1j"}],"847hz":[function(require,module,exports) {
module.exports = require("9c90589581c7e053").getBundleURL("ff8Dz") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b253633b.MP4" + "?" + Date.now();

},{"9c90589581c7e053":"dhz1j"}],"kx4RT":[function(require,module,exports) {
module.exports = require("28fc28b17c8b8837").getBundleURL("ff8Dz") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.06dd88ee.MP4" + "?" + Date.now();

},{"28fc28b17c8b8837":"dhz1j"}],"aJvas":[function(require,module,exports) {
module.exports = require("b8d16d4ba9bed039").getBundleURL("ff8Dz") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.d0558e52.MP4" + "?" + Date.now();

},{"b8d16d4ba9bed039":"dhz1j"}],"ddlG9":[function(require,module,exports) {
module.exports = require("ed4fa1973f1805b8").getBundleURL("ff8Dz") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.db86c704.MP4" + "?" + Date.now();

},{"ed4fa1973f1805b8":"dhz1j"}],"kiaVj":[function(require,module,exports) {
module.exports = require("feeb741ea3d07942").getBundleURL("ff8Dz") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.fbfc1b21.MP4" + "?" + Date.now();

},{"feeb741ea3d07942":"dhz1j"}],"2xxcp":[function(require,module,exports) {
module.exports = require("21993a3e273bf921").getBundleURL("ff8Dz") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.4026b1b9.MP4" + "?" + Date.now();

},{"21993a3e273bf921":"dhz1j"}],"cRhBz":[function(require,module,exports) {
module.exports = require("76dd2f86b71cc923").getBundleURL("ff8Dz") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.9ee181f7.MP4" + "?" + Date.now();

},{"76dd2f86b71cc923":"dhz1j"}],"4Pjpt":[function(require,module,exports) {
module.exports = require("66770ee3ffe6d781").getBundleURL("ff8Dz") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.992112fd.MP4" + "?" + Date.now();

},{"66770ee3ffe6d781":"dhz1j"}],"eViYn":[function(require,module,exports) {
module.exports = require("639b3e9db07aa73e").getBundleURL("ff8Dz") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.e83c0f3a.MP4" + "?" + Date.now();

},{"639b3e9db07aa73e":"dhz1j"}],"dmfY8":[function(require,module,exports) {
module.exports = require("fa8f641dcd3d7ada").getBundleURL("ff8Dz") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.d879fa06.MP4" + "?" + Date.now();

},{"fa8f641dcd3d7ada":"dhz1j"}],"dOaLH":[function(require,module,exports) {
module.exports = require("5557aba960ed59cd").getBundleURL("ff8Dz") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.fb1b0300.MP4" + "?" + Date.now();

},{"5557aba960ed59cd":"dhz1j"}],"eYlDl":[function(require,module,exports) {
module.exports = require("a2e91c9235849664").getBundleURL("ff8Dz") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.58840480.MP4" + "?" + Date.now();

},{"a2e91c9235849664":"dhz1j"}],"2Cz6m":[function(require,module,exports) {
module.exports = require("8adbe3ead3ce6c02").getBundleURL("ff8Dz") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.5728a622.MP4" + "?" + Date.now();

},{"8adbe3ead3ce6c02":"dhz1j"}],"fpeg1":[function(require,module,exports) {
module.exports = require("a607b9fc868e39b2").getBundleURL("ff8Dz") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.4d11b1bd.MP4" + "?" + Date.now();

},{"a607b9fc868e39b2":"dhz1j"}],"8Anfn":[function(require,module,exports) {
module.exports = require("2c2f893f2d760519").getBundleURL("ff8Dz") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.efd250da.MP4" + "?" + Date.now();

},{"2c2f893f2d760519":"dhz1j"}],"6P0Zu":[function(require,module,exports) {
module.exports = require("e7a704a83d1f3ac8").getBundleURL("ff8Dz") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.042ad484.MP4" + "?" + Date.now();

},{"e7a704a83d1f3ac8":"dhz1j"}],"5lFXr":[function(require,module,exports) {
module.exports = require("f9a72640340b8dfd").getBundleURL("ff8Dz") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.0f278cb4.MP4" + "?" + Date.now();

},{"f9a72640340b8dfd":"dhz1j"}],"7LPfk":[function(require,module,exports) {
module.exports = require("d9c5d27b21af7134").getBundleURL("ff8Dz") + "2021_09_11 22_49_16    @   Portugal Sintra @.29b755d2.MP4" + "?" + Date.now();

},{"d9c5d27b21af7134":"dhz1j"}],"43XHq":[function(require,module,exports) {
module.exports = require("e7f9a17f5cdbc3dc").getBundleURL("ff8Dz") + "2021_09_11 22_49_16    @   Portugal Sintra @.dc60a31b.MP4" + "?" + Date.now();

},{"e7f9a17f5cdbc3dc":"dhz1j"}],"2GGg8":[function(require,module,exports) {
module.exports = require("2fb94195f92cc9e5").getBundleURL("ff8Dz") + "2021_09_11 22_49_16    @   Portugal Sintra @.03f64803.MP4" + "?" + Date.now();

},{"2fb94195f92cc9e5":"dhz1j"}],"kyIIj":[function(require,module,exports) {
module.exports = require("b780e5ac823f2b5d").getBundleURL("ff8Dz") + "2021_09_11 18_36_02    @   Portugal Obidos @.72fa430a.MP4" + "?" + Date.now();

},{"b780e5ac823f2b5d":"dhz1j"}],"o1mLN":[function(require,module,exports) {
module.exports = require("dcbc1795e399368d").getBundleURL("ff8Dz") + "2021_09_11 18_15_50    @   Portugal Obidos @.db01c981.MP4" + "?" + Date.now();

},{"dcbc1795e399368d":"dhz1j"}],"92xae":[function(require,module,exports) {
module.exports = require("7adeb8303a2dcc3e").getBundleURL("ff8Dz") + "2021_09_11 17_56_56    @   Portugal Obidos @.acb207c4.MP4" + "?" + Date.now();

},{"7adeb8303a2dcc3e":"dhz1j"}],"8H8sh":[function(require,module,exports) {
module.exports = require("f89a2a843d814aa8").getBundleURL("ff8Dz") + "2021_09_11 18_36_02    @   Portugal Obidos @.5b6bd0f0.MP4" + "?" + Date.now();

},{"f89a2a843d814aa8":"dhz1j"}],"jGqFh":[function(require,module,exports) {
module.exports = require("2c615ca40cf4e614").getBundleURL("ff8Dz") + "2021_09_11 18_15_50    @   Portugal Obidos @.eb6a3c48.MP4" + "?" + Date.now();

},{"2c615ca40cf4e614":"dhz1j"}],"lOty5":[function(require,module,exports) {
module.exports = require("7dc53ae8414e4030").getBundleURL("ff8Dz") + "2021_09_11 17_56_56    @   Portugal Obidos @.3b06e62c.MP4" + "?" + Date.now();

},{"7dc53ae8414e4030":"dhz1j"}],"gETKN":[function(require,module,exports) {
module.exports = require("3b3449b7553ff3db").getBundleURL("ff8Dz") + "2021_09_11 18_36_02    @   Portugal Obidos @.e282e9f3.MP4" + "?" + Date.now();

},{"3b3449b7553ff3db":"dhz1j"}],"gCcTm":[function(require,module,exports) {
module.exports = require("c79bd34f64ae1047").getBundleURL("ff8Dz") + "2021_09_11 18_15_50    @   Portugal Obidos @.54eb92dc.MP4" + "?" + Date.now();

},{"c79bd34f64ae1047":"dhz1j"}],"ez4mp":[function(require,module,exports) {
module.exports = require("73409151375f05bf").getBundleURL("ff8Dz") + "2021_09_11 17_56_56    @   Portugal Obidos @.2bca2198.MP4" + "?" + Date.now();

},{"73409151375f05bf":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["leQ09","2oGnw"], "2oGnw", "parcelRequire3c64")

//# sourceMappingURL=014detalle-obidos.9bc11ce5.js.map
