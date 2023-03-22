import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketCorsOutput, GetBucketCorsRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketCorsCommand}.
 */
export interface GetBucketCorsCommandInput extends GetBucketCorsRequest {
}
/**
 * The output of {@link GetBucketCorsCommand}.
 */
export interface GetBucketCorsCommandOutput extends GetBucketCorsOutput, __MetadataBearer {
}
/**
 * <p>Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the
 *          bucket.</p>
 *          <p> To use this operation, you must have permission to perform the
 *             <code>s3:GetBucketCORS</code> action. By default, the bucket owner has this permission
 *          and can grant it to others.</p>
 *          <p> For more information about CORS, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html"> Enabling Cross-Origin Resource
 *          Sharing</a>.</p>
 *          <p>The following operations are related to <code>GetBucketCors</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html">PutBucketCors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html">DeleteBucketCors</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketCorsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketCorsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketCorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketCorsCommandInput} for command's `input` shape.
 * @see {@link GetBucketCorsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To get cors configuration set on a bucket
 * ```javascript
 * // The following example returns cross-origin resource sharing (CORS) configuration set on a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketCorsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CORSRules": [
 *     {
 *       "AllowedHeaders": [
 *         "Authorization"
 *       ],
 *       "AllowedMethods": [
 *         "GET"
 *       ],
 *       "AllowedOrigins": [
 *         "*"
 *       ],
 *       "MaxAgeSeconds": 3000
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-cors-configuration-set-on-a-bucket-1481596855475
 * ```
 *
 */
export declare class GetBucketCorsCommand extends $Command<GetBucketCorsCommandInput, GetBucketCorsCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketCorsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketCorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketCorsCommandInput, GetBucketCorsCommandOutput>;
    private serialize;
    private deserialize;
}