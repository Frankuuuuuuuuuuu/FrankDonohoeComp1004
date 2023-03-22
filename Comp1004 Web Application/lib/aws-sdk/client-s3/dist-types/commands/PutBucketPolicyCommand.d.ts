import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutBucketPolicyRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link PutBucketPolicyCommand}.
 */
export interface PutBucketPolicyCommandInput extends PutBucketPolicyRequest {
}
/**
 * The output of {@link PutBucketPolicyCommand}.
 */
export interface PutBucketPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than
 *          the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the
 *             <code>PutBucketPolicy</code> permissions on the specified bucket and belong to the
 *          bucket owner's account in order to use this operation.</p>
 *          <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403
 *             Access Denied</code> error. If you have the correct permissions, but you're not using an
 *          identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not
 *             Allowed</code> error.</p>
 *          <important>
 *             <p> As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 *             always use this operation, even if the policy explicitly denies the root user the
 *             ability to perform this action. </p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html">Bucket policy examples</a>.</p>
 *          <p>The following operations are related to <code>PutBucketPolicy</code>:</p>
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
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketPolicyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketPolicyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example Set bucket policy
 * ```javascript
 * // The following example sets a permission policy on a bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Policy": "{\"Version\": \"2012-10-17\", \"Statement\": [{ \"Sid\": \"id-1\",\"Effect\": \"Allow\",\"Principal\": {\"AWS\": \"arn:aws:iam::123456789012:root\"}, \"Action\": [ \"s3:PutObject\",\"s3:PutObjectAcl\"], \"Resource\": [\"arn:aws:s3:::acl3/*\" ] } ]}"
 * };
 * const command = new PutBucketPolicyCommand(input);
 * await client.send(command);
 * // example id: set-bucket-policy-1482448903302
 * ```
 *
 */
export declare class PutBucketPolicyCommand extends $Command<PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketPolicyCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: PutBucketPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput>;
    private serialize;
    private deserialize;
}