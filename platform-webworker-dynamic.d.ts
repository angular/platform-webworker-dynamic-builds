/**
 * @license Angular v8.0.0-rc.0+11.sha-6c86ae7.with-local-changes
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

import { PlatformRef } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { Version } from '@angular/core';

/**
 * @publicApi
 */
export declare const platformWorkerAppDynamic: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

/**
 * @publicApi
 */
export declare const VERSION: Version;

export { }
