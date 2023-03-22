import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketLocationOutput, GetBucketLocationRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandInput extends GetBucketLocationRequest {
}
/**
 * The output of {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandOutput extends GetBucketLocationOutput, __MetadataBearer {
}
/**
 * <p>Returns the Region the bucket resides in. You set the bucket's Region using the
 *             <code>LocationConstraint</code> request parameter in a <code>CreateBucket</code>
 *          request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>.</p>
 *          <p>To use this implementation of the operation, you must be the bucket owner.</p>
 *          <p>To use this API against an access point, provide the alias of the access point in place of the bucket name.</p>
 *          <p>The following operations are related to <code>GetBucketLocation</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLocationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketLocationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketLocationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To get bucket location
 * ```javascript
 * // The following example returns bucket location.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketLocationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LocationConstraint": "us-west-2"
 * }
 * *\/
 * // example id: to-get-bucket-location-1481594573609
 * ```
 *
 */
export declare class GetBucketLocationCommand extends $Command<GetBucketLocationCommandInput, GetBucketLocationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketLocationCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketLocationCommandInput, GetBucketLocationCommandOutput>;
    private serialize;
    private deserialize;
}