import { PlatformRef, Provider } from '@angular/core';
export { VERSION } from './version';
/**
 * @experimental API related to bootstrapping are still under review.
 */
export declare const platformWorkerAppDynamic: (extraProviders?: Provider[]) => PlatformRef;
