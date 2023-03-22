import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketVersioningOutput, GetBucketVersioningRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketVersioningCommand}.
 */
export interface GetBucketVersioningCommandInput extends GetBucketVersioningRequest {
}
/**
 * The output of {@link GetBucketVersioningCommand}.
 */
export interface GetBucketVersioningCommandOutput extends GetBucketVersioningOutput, __MetadataBearer {
}
/**
 * <p>Returns the versioning state of a bucket.</p>
 *          <p>To retrieve the versioning state of a bucket, you must be the bucket owner.</p>
 *          <p>This implementation also returns the MFA Delete status of the versioning state. If the
 *          MFA Delete status is <code>enabled</code>, the bucket owner must use an authentication
 *          device to change the versioning state of the bucket.</p>
 *          <p>The following operations are related to <code>GetBucketVersioning</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketVersioningCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketVersioningCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketVersioningCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketVersioningCommandInput} for command's `input` shape.
 * @see {@link GetBucketVersioningCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To get bucket versioning configuration
 * ```javascript
 * // The following example retrieves bucket versioning configuration.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketVersioningCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MFADelete": "Disabled",
 *   "Status": "Enabled"
 * }
 * *\/
 * // example id: to-get-bucket-versioning-configuration-1483037183929
 * ```
 *
 */
export declare class GetBucketVersioningCommand extends $Command<GetBucketVersioningCommandInput, GetBucketVersioningCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketVersioningCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketVersioningCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketVersioningCommandInput, GetBucketVersioningCommandOutput>;
    private serialize;
    private deserialize;
}
