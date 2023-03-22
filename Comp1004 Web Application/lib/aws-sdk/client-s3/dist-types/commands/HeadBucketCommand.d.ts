import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { HeadBucketRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandInput extends HeadBucketRequest {
}
/**
 * The output of {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandOutput extends __MetadataBearer {
}
/**
 * <p>This action is useful to determine if a bucket exists and you have permission to
 *          access it. The action returns a <code>200 OK</code> if the bucket exists and you have
 *          permission to access it.</p>
 *          <p>If the bucket does not exist or you do not have permission to access it, the <code>HEAD</code> request
 *          returns a generic <code>404 Not Found</code> or <code>403 Forbidden</code> code. A message body is not
 *          included, so you cannot determine the exception beyond these error codes.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:ListBucket</code> action. The bucket owner has this permission by default and
 *          can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a>.</p>
 *          <p>To use this API against an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using the Amazon Web Services SDKs, you provide the ARN in place of the bucket name. For more information see, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, HeadBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, HeadBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new HeadBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HeadBucketCommandInput} for command's `input` shape.
 * @see {@link HeadBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NotFound} (client fault)
 *  <p>The specified content does not exist.</p>
 *
 *
 * @example To determine if bucket exists
 * ```javascript
 * // This operation checks to see if a bucket exists.
 * const input = {
 *   "Bucket": "acl1"
 * };
 * const command = new HeadBucketCommand(input);
 * await client.send(command);
 * // example id: to-determine-if-bucket-exists-1473110292262
 * ```
 *
 */
export declare class HeadBucketCommand extends $Command<HeadBucketCommandInput, HeadBucketCommandOutput, S3ClientResolvedConfig> {
    readonly input: HeadBucketCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: HeadBucketCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<HeadBucketCommandInput, HeadBucketCommandOutput>;
    private serialize;
    private deserialize;
}
