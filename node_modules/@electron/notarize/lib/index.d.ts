import { NotarizeOptions, NotarizeOptionsLegacy, NotarizeOptionsNotaryTool } from './types';
export { NotarizeOptions };
export { validateNotaryToolAuthorizationArgs as validateAuthorizationArgs } from './validate-args';
declare function notarize(args: NotarizeOptionsNotaryTool): Promise<void>;
/** @deprecated */
declare function notarize(args: NotarizeOptionsLegacy): Promise<void>;
export { notarize };
