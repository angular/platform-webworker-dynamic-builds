/**
 * @license Angular v9.0.0-rc.1+736.sha-5b77e67
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ɵPLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { Version, createPlatformFactory, COMPILER_OPTIONS, PLATFORM_ID } from '@angular/core';
import { ɵplatformCoreDynamic, ɵResourceLoaderImpl } from '@angular/platform-browser-dynamic';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-webworker-dynamic/src/version.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in version 10
 * @type {?}
 */
const VERSION = new Version('0.0.0');

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-webworker-dynamic/src/platform-webworker-dynamic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in version 10
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
 * Generated from: packages/platform-webworker-dynamic/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-webworker-dynamic/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VERSION, platformWorkerAppDynamic };
//# sourceMappingURL=platform-webworker-dynamic.js.map
