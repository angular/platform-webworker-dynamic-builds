/**
 * @license Angular v10.1.0-next.7+31.sha-94a3e0e
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/compiler'), require('@angular/core'), require('@angular/platform-browser-dynamic')) :
    typeof define === 'function' && define.amd ? define('@angular/platform-webworker-dynamic', ['exports', '@angular/common', '@angular/compiler', '@angular/core', '@angular/platform-browser-dynamic'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.platformWebworkerDynamic = {}), global.ng.common, global.ng.compiler, global.ng.core, global.ng.platformBrowserDynamic));
}(this, (function (exports, common, compiler, core, platformBrowserDynamic) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     * @deprecated platform-webworker is deprecated in Angular and will be removed in a future version
     *     of Angular
     */
    var VERSION = new core.Version('10.1.0-next.7+31.sha-94a3e0e');

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     * @deprecated platform-webworker is deprecated in Angular and will be removed in a future version
     *     of Angular
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
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.VERSION = VERSION;
    exports.platformWorkerAppDynamic = platformWorkerAppDynamic;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=platform-webworker-dynamic.umd.js.map
