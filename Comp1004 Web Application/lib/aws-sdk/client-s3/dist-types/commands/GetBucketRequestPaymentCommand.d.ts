import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketRequestPaymentOutput, GetBucketRequestPaymentRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketRequestPaymentCommand}.
 */
export interface GetBucketRequestPaymentCommandInput extends GetBucketRequestPaymentRequest {
}
/**
 * The output of {@link GetBucketRequestPaymentCommand}.
 */
export interface GetBucketRequestPaymentCommandOutput extends GetBucketRequestPaymentOutput, __MetadataBearer {
}
/**
 * <p>Returns the request payment configuration of a bucket. To use this version of the
 *          operation, you must be the bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>.</p>
 *          <p>The following operations are related to <code>GetBucketRequestPayment</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketRequestPaymentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketRequestPaymentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketRequestPaymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketRequestPaymentCommandInput} for command's `input` shape.
 * @see {@link GetBucketRequestPaymentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To get bucket versioning configuration
 * ```javascript
 * // The following example retrieves bucket versioning configuration.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketRequestPaymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Payer": "BucketOwner"
 * }
 * *\/
 * // example id: to-get-bucket-versioning-configuration-1483037183929
 * ```
 *
 */
export declare class GetBucketRequestPaymentCommand extends $Command<GetBucketRequestPaymentCommandInput, GetBucketRequestPaymentCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketRequestPaymentCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketRequestPaymentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketRequestPaymentCommandInput, GetBucketRequestPaymentCommandOutput>;
    private serialize;
    private deserialize;
}
