/**
 * @license Angular v4.0.0-beta.8-88bc143
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
import { ResourceLoader, platformCoreDynamic } from '@angular/compiler';
import { COMPILER_OPTIONS, createPlatformFactory, Version } from '@angular/core';
import { ɵResourceLoaderImpl } from '@angular/platform-browser-dynamic';

/**
 * @stable
 */
var VERSION = new Version('4.0.0-beta.8-88bc143');

/**
 * @experimental API related to bootstrapping are still under review.
 */
var platformWorkerAppDynamic = createPlatformFactory(platformCoreDynamic, 'workerAppDynamic', [{
  provide: COMPILER_OPTIONS,
  useValue: { providers: [{ provide: ResourceLoader, useClass: ɵResourceLoaderImpl }] },
  multi: true
}]);

export { platformWorkerAppDynamic, VERSION };
