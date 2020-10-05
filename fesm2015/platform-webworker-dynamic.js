/**
 * @license Angular v10.1.4+23.sha-4c30f51
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ɵPLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { Version, createPlatformFactory, COMPILER_OPTIONS, PLATFORM_ID } from '@angular/core';
import { ɵResourceLoaderImpl, ɵplatformCoreDynamic } from '@angular/platform-browser-dynamic';

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
const VERSION = new Version('10.1.4+23.sha-4c30f51');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ɵ0 = { providers: [{ provide: ResourceLoader, useClass: ɵResourceLoaderImpl, deps: [] }] }, ɵ1 = ɵPLATFORM_WORKER_UI_ID;
/**
 * @publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in a future version
 *     of Angular
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

export { VERSION, platformWorkerAppDynamic, ɵ0, ɵ1 };
//# sourceMappingURL=platform-webworker-dynamic.js.map
