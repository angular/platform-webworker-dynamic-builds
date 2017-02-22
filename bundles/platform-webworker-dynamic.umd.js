(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('@angular/platform-webworker-dynamic', ['exports', '@angular/compiler', '@angular/core', '@angular/platform-browser-dynamic'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('@angular/compiler'), require('@angular/core'), require('@angular/platform-browser-dynamic'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ng.compiler, global.ng.core, global.ng.platformBrowserDynamic);
    global.ng = global.ng || {};
    global.ng.platformWebworkerDynamic = mod.exports;
  }
})(this, function (exports, _compiler, _core, _platformBrowserDynamic) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.VERSION = exports.platformWorkerAppDynamic = undefined;


  /**
   * @stable
   */
  var VERSION = new _core.Version('0.0.0-PLACEHOLDER');

  /**
   * @experimental API related to bootstrapping are still under review.
   */
  /**
   * @license Angular v0.0.0-PLACEHOLDER
   * (c) 2010-2017 Google, Inc. https://angular.io/
   * License: MIT
   */
  var platformWorkerAppDynamic = (0, _core.createPlatformFactory)(_compiler.platformCoreDynamic, 'workerAppDynamic', [{
    provide: _core.COMPILER_OPTIONS,
    useValue: { providers: [{ provide: _compiler.ResourceLoader, useClass: _platformBrowserDynamic.ɵResourceLoaderImpl }] },
    multi: true
  }]);

  exports.platformWorkerAppDynamic = platformWorkerAppDynamic;
  exports.VERSION = VERSION;
});
