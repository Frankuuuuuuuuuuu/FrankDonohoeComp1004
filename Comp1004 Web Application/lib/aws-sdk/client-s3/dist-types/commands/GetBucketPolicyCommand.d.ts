import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketPolicyOutput, GetBucketPolicyRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketPolicyCommand}.
 */
export interface GetBucketPolicyCommandInput extends GetBucketPolicyRequest {
}
/**
 * The output of {@link GetBucketPolicyCommand}.
 */
export interface GetBucketPolicyCommandOutput extends GetBucketPolicyOutput, __MetadataBearer {
}
/**
 * <p>Returns the policy of a specified bucket. If you are using an identity other than the
 *          root user of the Amazon Web Services account that owns the bucket, the calling identity must have the
 *             <code>GetBucketPolicy</code> permissions on the specified bucket and belong to the
 *          bucket owner's account in order to use this operation.</p>
 *          <p>If you don't have <code>GetBucketPolicy</code> permissions, Amazon S3 returns a <code>403
 *             Access Denied</code> error. If you have the correct permissions, but you're not using an
 *          identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not
 *             Allowed</code> error.</p>
 *          <important>
 *             <p>As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 *             always use this operation, even if the policy explicitly denies the root user the
 *             ability to perform this action.</p>
 *          </important>
 *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 *             Policies</a>.</p>
 *          <p>The following action is related to <code>GetBucketPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketPolicyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketPolicyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link GetBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To get bucket policy
 * ```javascript
 * // The following example returns bucket policy associated with a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Policy": "{\"Version\":\"2008-10-17\",\"Id\":\"LogPolicy\",\"Statement\":[{\"Sid\":\"Enables the log delivery group to publish logs to your bucket \",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"111122223333\"},\"Action\":[\"s3:GetBucketAcl\",\"s3:GetObjectAcl\",\"s3:PutObject\"],\"Resource\":[\"arn:aws:s3:::policytest1/*\",\"arn:aws:s3:::policytest1\"]}]}"
 * }
 * *\/
 * // example id: to-get-bucket-policy-1481595098424
 * ```
 *
 */
export declare class GetBucketPolicyCommand extends $Command<GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketPolicyCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
