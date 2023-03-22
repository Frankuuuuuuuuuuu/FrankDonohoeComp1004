import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutBucketVersioningRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link PutBucketVersioningCommand}.
 */
export interface PutBucketVersioningCommandInput extends PutBucketVersioningRequest {
}
/**
 * The output of {@link PutBucketVersioningCommand}.
 */
export interface PutBucketVersioningCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the versioning state of an existing bucket.</p>
 *          <p>You can set the versioning state with one of the following values:</p>
 *          <p>
 *             <b>Enabled</b>—Enables versioning for the objects in the
 *          bucket. All objects added to the bucket receive a unique version ID.</p>
 *          <p>
 *             <b>Suspended</b>—Disables versioning for the objects in the
 *          bucket. All objects added to the bucket receive the version ID null.</p>
 *          <p>If the versioning state has never been set on a bucket, it has no versioning state; a
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a> request does not return a versioning state value.</p>
 *          <p>In order to enable MFA Delete, you must be the bucket owner. If you are the bucket owner
 *          and want to enable MFA Delete in the bucket versioning configuration, you must
 *          include the <code>x-amz-mfa request</code> header and the
 *             <code>Status</code> and the <code>MfaDelete</code> request elements in a request to set
 *          the versioning state of the bucket.</p>
 *          <important>
 *             <p>If you have an object expiration lifecycle policy in your non-versioned bucket and
 *             you want to maintain the same permanent delete behavior when you enable versioning, you
 *             must add a noncurrent expiration policy. The noncurrent expiration lifecycle policy will
 *             manage the deletes of the noncurrent object versions in the version-enabled bucket. (A
 *             version-enabled bucket maintains one current and zero or more noncurrent object
 *             versions.) For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html#lifecycle-and-other-bucket-config">Lifecycle and Versioning</a>.</p>
 *          </important>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketVersioningCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketVersioningCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketVersioningCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketVersioningCommandInput} for command's `input` shape.
 * @see {@link PutBucketVersioningCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example Set versioning configuration on a bucket
 * ```javascript
 * // The following example sets versioning configuration on bucket. The configuration enables versioning on the bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "VersioningConfiguration": {
 *     "MFADelete": "Disabled",
 *     "Status": "Enabled"
 *   }
 * };
 * const command = new PutBucketVersioningCommand(input);
 * await client.send(command);
 * // example id: set-versioning-configuration-on-a-bucket-1482344186279
 * ```
 *
 */
export declare class PutBucketVersioningCommand extends $Command<PutBucketVersioningCommandInput, PutBucketVersioningCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketVersioningCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: PutBucketVersioningCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketVersioningCommandInput, PutBucketVersioningCommandOutput>;
    private serialize;
    private deserialize;
}
