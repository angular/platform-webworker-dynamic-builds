/**
 * @license Angular v6.1.0-beta.2
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/compiler'), require('@angular/core'), require('@angular/platform-browser-dynamic')) :
	typeof define === 'function' && define.amd ? define('@angular/platform-webworker-dynamic', ['exports', '@angular/common', '@angular/compiler', '@angular/core', '@angular/platform-browser-dynamic'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.platformWebworkerDynamic = {}),global.ng.common,global.ng.compiler,global.ng.core,global.ng.platformBrowserDynamic));
}(this, (function (exports,common,compiler,core,platformBrowserDynamic) { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
var VERSION = new core.Version('6.1.0-beta.2');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @experimental API related to bootstrapping are still under review.
 */
var platformWorkerAppDynamic = core.createPlatformFactory(platformBrowserDynamic.ɵplatformCoreDynamic, 'workerAppDynamic', [
    {
        provide: core.COMPILER_OPTIONS,
        useValue: { providers: [{ provide: compiler.ResourceLoader, useClass: platformBrowserDynamic.ɵResourceLoaderImpl, deps: [] }] },
        multi: true
    },
    { provide: core.PLATFORM_ID, useValue: common.ɵPLATFORM_WORKER_UI_ID }
]);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file is not used to build this module. It is only used during editing
// by the TypeScript language service and during build for verification. `ngc`
// replaces this file with production index.ts when it rewrites private symbol
// names.

/**
 * Generated bundle index. Do not edit.
 */

exports.platformWorkerAppDynamic = platformWorkerAppDynamic;
exports.VERSION = VERSION;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=platform-webworker-dynamic.umd.js.map
