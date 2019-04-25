/**
 * @license Angular v8.0.0-beta.14+32.sha-75a23ab.with-local-changes
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

import { ɵPLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { Version, createPlatformFactory, COMPILER_OPTIONS, PLATFORM_ID } from '@angular/core';
import { ɵplatformCoreDynamic, ɵResourceLoaderImpl } from '@angular/platform-browser-dynamic';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const VERSION = new Version('8.0.0-beta.14+32.sha-75a23ab.with-local-changes');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = { providers: [{ provide: ResourceLoader, useClass: ɵResourceLoaderImpl, deps: [] }] }, ɵ1 = ɵPLATFORM_WORKER_UI_ID;
/**
 * \@publicApi
 * @type {?}
 */
const platformWorkerAppDynamic = createPlatformFactory(ɵplatformCoreDynamic, 'workerAppDynamic', [
    {
        provide: COMPILER_OPTIONS,
        useValue: ɵ0,
        multi: true
    },
    { provide: PLATFORM_ID, useValue: ɵ1 }
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VERSION, platformWorkerAppDynamic };
//# sourceMappingURL=platform-webworker-dynamic.js.map
