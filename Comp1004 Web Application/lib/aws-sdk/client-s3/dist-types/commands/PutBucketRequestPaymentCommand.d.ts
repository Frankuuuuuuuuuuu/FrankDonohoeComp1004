import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutBucketRequestPaymentRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link PutBucketRequestPaymentCommand}.
 */
export interface PutBucketRequestPaymentCommandInput extends PutBucketRequestPaymentRequest {
}
/**
 * The output of {@link PutBucketRequestPaymentCommand}.
 */
export interface PutBucketRequestPaymentCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the request payment configuration for a bucket. By default, the bucket owner pays
 *          for downloads from the bucket. This configuration parameter enables the bucket owner (only)
 *          to specify that the person requesting the download will be charged for the download. For
 *          more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays
 *             Buckets</a>.</p>
 *          <p>The following operations are related to <code>PutBucketRequestPayment</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html">GetBucketRequestPayment</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketRequestPaymentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketRequestPaymentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketRequestPaymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketRequestPaymentCommandInput} for command's `input` shape.
 * @see {@link PutBucketRequestPaymentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example Set request payment configuration on a bucket.
 * ```javascript
 * // The following example sets request payment configuration on a bucket so that person requesting the download is charged.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "RequestPaymentConfiguration": {
 *     "Payer": "Requester"
 *   }
 * };
 * const command = new PutBucketRequestPaymentCommand(input);
 * await client.send(command);
 * // example id: set-request-payment-configuration-on-a-bucket-1482343596680
 * ```
 *
 */
export declare class PutBucketRequestPaymentCommand extends $Command<PutBucketRequestPaymentCommandInput, PutBucketRequestPaymentCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketRequestPaymentCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: PutBucketRequestPaymentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketRequestPaymentCommandInput, PutBucketRequestPaymentCommandOutput>;
    private serialize;
    private deserialize;
}