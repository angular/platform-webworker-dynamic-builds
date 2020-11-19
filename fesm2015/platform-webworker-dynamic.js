/**
 * @license Angular v9.1.12+10.sha-5b38050
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ɵPLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { Version, createPlatformFactory, COMPILER_OPTIONS, PLATFORM_ID } from '@angular/core';
import { ɵResourceLoaderImpl, ɵplatformCoreDynamic } from '@angular/platform-browser-dynamic';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-webworker-dynamic/src/version.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in a future version
 *     of Angular
 * @type {?}
 */
const VERSION = new Version('9.1.12+10.sha-5b38050');

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-webworker-dynamic/src/platform-webworker-dynamic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = { providers: [{ provide: ResourceLoader, useClass: ɵResourceLoaderImpl, deps: [] }] }, ɵ1 = ɵPLATFORM_WORKER_UI_ID;
/**
 * \@publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in a future version
 *     of Angular
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
 * Generated from: packages/platform-webworker-dynamic/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-webworker-dynamic/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VERSION, platformWorkerAppDynamic };
//# sourceMappingURL=platform-webworker-dynamic.js.map
