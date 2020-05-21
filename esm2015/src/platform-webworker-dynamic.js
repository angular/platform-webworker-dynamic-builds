/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵPLATFORM_WORKER_UI_ID as PLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { COMPILER_OPTIONS, createPlatformFactory, PLATFORM_ID } from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic, ɵResourceLoaderImpl as ResourceLoaderImpl } from '@angular/platform-browser-dynamic';
export { VERSION } from './version';
const ɵ0 = { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }] }, ɵ1 = PLATFORM_WORKER_UI_ID;
/**
 * @publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in a future version
 *     of Angular
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0td2Vid29ya2VyLWR5bmFtaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS13ZWJ3b3JrZXItZHluYW1pYy9zcmMvcGxhdGZvcm0td2Vid29ya2VyLWR5bmFtaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLHNCQUFzQixJQUFJLHFCQUFxQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQThCLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBQyxvQkFBb0IsSUFBSSxtQkFBbUIsRUFBRSxtQkFBbUIsSUFBSSxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXpJLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7V0FZaEIsRUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFDLE9BRzNELHFCQUFxQjtBQVo1RDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQ2pDLHFCQUFxQixDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFO0lBQzdEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLElBQWtGO1FBQzFGLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxJQUF1QixFQUFDO0NBQ3hELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHvJtVBMQVRGT1JNX1dPUktFUl9VSV9JRCBhcyBQTEFURk9STV9XT1JLRVJfVUlfSUR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1Jlc291cmNlTG9hZGVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge0NPTVBJTEVSX09QVElPTlMsIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeSwgUExBVEZPUk1fSUQsIFBsYXRmb3JtUmVmLCBTdGF0aWNQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge8m1cGxhdGZvcm1Db3JlRHluYW1pYyBhcyBwbGF0Zm9ybUNvcmVEeW5hbWljLCDJtVJlc291cmNlTG9hZGVySW1wbCBhcyBSZXNvdXJjZUxvYWRlckltcGx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmV4cG9ydCB7VkVSU0lPTn0gZnJvbSAnLi92ZXJzaW9uJztcblxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXByZWNhdGVkIHBsYXRmb3JtLXdlYndvcmtlciBpcyBkZXByZWNhdGVkIGluIEFuZ3VsYXIgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uXG4gKiAgICAgb2YgQW5ndWxhclxuICovXG5leHBvcnQgY29uc3QgcGxhdGZvcm1Xb3JrZXJBcHBEeW5hbWljID1cbiAgICBjcmVhdGVQbGF0Zm9ybUZhY3RvcnkocGxhdGZvcm1Db3JlRHluYW1pYywgJ3dvcmtlckFwcER5bmFtaWMnLCBbXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IENPTVBJTEVSX09QVElPTlMsXG4gICAgICAgIHVzZVZhbHVlOiB7cHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFJlc291cmNlTG9hZGVyLCB1c2VDbGFzczogUmVzb3VyY2VMb2FkZXJJbXBsLCBkZXBzOiBbXX1dfSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7cHJvdmlkZTogUExBVEZPUk1fSUQsIHVzZVZhbHVlOiBQTEFURk9STV9XT1JLRVJfVUlfSUR9XG4gICAgXSk7XG4iXX0=