/**
 * @license Angular v5.0.0-beta.3-38addac
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
import { ɵPLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader, platformCoreDynamic } from '@angular/compiler';
import { COMPILER_OPTIONS, PLATFORM_ID, Version, createPlatformFactory } from '@angular/core';
import { ɵResourceLoaderImpl } from '@angular/platform-browser-dynamic';
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
/**
 * @stable
 */
var VERSION = new Version('5.0.0-beta.3-38addac');
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
var platformWorkerAppDynamic = createPlatformFactory(platformCoreDynamic, 'workerAppDynamic', [
    {
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ɵResourceLoaderImpl, deps: [] }] },
        multi: true
    },
    { provide: PLATFORM_ID, useValue: ɵPLATFORM_WORKER_UI_ID }
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
 * Entry point for all public APIs of the platform-browser-dynamic package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
export { platformWorkerAppDynamic, VERSION };
//# sourceMappingURL=platform-webworker-dynamic.es5.js.map
