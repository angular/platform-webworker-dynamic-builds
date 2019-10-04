/**
 * @license Angular v9.0.0-next.9+39.sha-480b775.with-local-changes
 * (c) 2010-2019 Google LLC. https://angular.io/
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
