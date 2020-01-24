/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-webworker-dynamic/src/platform-webworker-dynamic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const ɵ0 = { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }] }, ɵ1 = PLATFORM_WORKER_UI_ID;
/**
 * \@publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in version 10
 * @type {?}
 */
export const platformWorkerAppDynamic = createPlatformFactory(platformCoreDynamic, 'workerAppDynamic', [
    {
        provide: COMPILER_OPTIONS,
        useValue: ɵ0,
        multi: true
    },
    { provide: PLATFORM_ID, useValue: ɵ1 }
]);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0td2Vid29ya2VyLWR5bmFtaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS13ZWJ3b3JrZXItZHluYW1pYy9zcmMvcGxhdGZvcm0td2Vid29ya2VyLWR5bmFtaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLHNCQUFzQixJQUFJLHFCQUFxQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQStCLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBQyxtQkFBbUIsSUFBSSxrQkFBa0IsRUFBRSxvQkFBb0IsSUFBSSxtQkFBbUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXpJLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7V0FXaEIsRUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFDLE9BRzNELHFCQUFxQjs7Ozs7O0FBUDVELE1BQU0sT0FBTyx3QkFBd0IsR0FDakMscUJBQXFCLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUU7SUFDN0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsSUFBa0Y7UUFDMUYsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNELEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLElBQXVCLEVBQUM7Q0FDeEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHvJtVBMQVRGT1JNX1dPUktFUl9VSV9JRCBhcyBQTEFURk9STV9XT1JLRVJfVUlfSUR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1Jlc291cmNlTG9hZGVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge0NPTVBJTEVSX09QVElPTlMsIFBMQVRGT1JNX0lELCBQbGF0Zm9ybVJlZiwgU3RhdGljUHJvdmlkZXIsIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge8m1UmVzb3VyY2VMb2FkZXJJbXBsIGFzIFJlc291cmNlTG9hZGVySW1wbCwgybVwbGF0Zm9ybUNvcmVEeW5hbWljIGFzIHBsYXRmb3JtQ29yZUR5bmFtaWN9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmV4cG9ydCB7VkVSU0lPTn0gZnJvbSAnLi92ZXJzaW9uJztcblxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXByZWNhdGVkIHBsYXRmb3JtLXdlYndvcmtlciBpcyBkZXByZWNhdGVkIGluIEFuZ3VsYXIgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDEwXG4gKi9cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybVdvcmtlckFwcER5bmFtaWMgPVxuICAgIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeShwbGF0Zm9ybUNvcmVEeW5hbWljLCAnd29ya2VyQXBwRHluYW1pYycsIFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogQ09NUElMRVJfT1BUSU9OUyxcbiAgICAgICAgdXNlVmFsdWU6IHtwcm92aWRlcnM6IFt7cHJvdmlkZTogUmVzb3VyY2VMb2FkZXIsIHVzZUNsYXNzOiBSZXNvdXJjZUxvYWRlckltcGwsIGRlcHM6IFtdfV19LFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtwcm92aWRlOiBQTEFURk9STV9JRCwgdXNlVmFsdWU6IFBMQVRGT1JNX1dPUktFUl9VSV9JRH1cbiAgICBdKTtcbiJdfQ==