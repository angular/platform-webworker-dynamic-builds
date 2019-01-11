/**
 * @license Angular v7.2.0+126.sha-df292c2
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

import { ɵPLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { Version, createPlatformFactory, COMPILER_OPTIONS, PLATFORM_ID } from '@angular/core';
import { ɵplatformCoreDynamic, ɵResourceLoaderImpl } from '@angular/platform-browser-dynamic';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const VERSION = new Version('7.2.0+126.sha-df292c2');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const platformWorkerAppDynamic = createPlatformFactory(ɵplatformCoreDynamic, 'workerAppDynamic', [
    {
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ɵResourceLoaderImpl, deps: [] }] },
        multi: true
    },
    { provide: PLATFORM_ID, useValue: ɵPLATFORM_WORKER_UI_ID }
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VERSION, platformWorkerAppDynamic };
//# sourceMappingURL=platform-webworker-dynamic.js.map
