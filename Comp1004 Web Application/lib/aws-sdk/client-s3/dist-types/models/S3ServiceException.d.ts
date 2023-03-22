import { ServiceException as __ServiceException, ServiceExceptionOptions as __ServiceExceptionOptions } from "@aws-sdk/smithy-client";
/**
 * Base exception class for all service exceptions from S3 service.
 */
export declare class S3ServiceException extends __ServiceException {
    /**
     * @internal
     */
    constructor(options: __ServiceExceptionOptions);
}
