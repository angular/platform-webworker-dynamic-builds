/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵPLATFORM_WORKER_UI_ID as PLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { COMPILER_OPTIONS, PLATFORM_ID, createPlatformFactory } from '@angular/core';
import { ɵResourceLoaderImpl as ResourceLoaderImpl, ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
export { VERSION } from './version';
/**
 * \@experimental API related to bootstrapping are still under review.
 */
export const /** @type {?} */ platformWorkerAppDynamic = createPlatformFactory(platformCoreDynamic, 'workerAppDynamic', [
    {
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }] },
        multi: true
    },
    { provide: PLATFORM_ID, useValue: PLATFORM_WORKER_UI_ID }
]);
//# sourceMappingURL=platform-webworker-dynamic.js.map