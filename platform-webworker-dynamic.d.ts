/**
 * @license Angular v8.0.0-beta.4+46.sha-96b597c
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
