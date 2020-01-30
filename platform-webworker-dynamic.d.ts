/**
 * @license Angular v9.0.0-rc.11+62.sha-36b8c03
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { PlatformRef } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { Version } from '@angular/core';

/**
 * @publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in version 10
 */
export declare const platformWorkerAppDynamic: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

/**
 * @publicApi
 * @deprecated platform-webworker is deprecated in Angular and will be removed in version 10
 */
export declare const VERSION: Version;

export { }
