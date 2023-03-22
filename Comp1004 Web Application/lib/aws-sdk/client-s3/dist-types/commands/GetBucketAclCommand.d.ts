import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketAclOutput, GetBucketAclRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketAclCommand}.
 */
export interface GetBucketAclCommandInput extends GetBucketAclRequest {
}
/**
 * The output of {@link GetBucketAclCommand}.
 */
export interface GetBucketAclCommandOutput extends GetBucketAclOutput, __MetadataBearer {
}
/**
 * <p>This implementation of the <code>GET</code> action uses the <code>acl</code>
 *          subresource to return the access control list (ACL) of a bucket. To use <code>GET</code> to
 *          return the ACL of the bucket, you must have <code>READ_ACP</code> access to the bucket. If
 *             <code>READ_ACP</code> permission is granted to the anonymous user, you can return the
 *          ACL of the bucket without using an authorization header.</p>
 *          <note>
 *             <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership,
 *             requests to read ACLs are still supported and return the <code>bucket-owner-full-control</code>
 *             ACL with the owner being the account that created the bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">
 *                Controlling object ownership and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
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
 * import { S3Client, GetBucketAclCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketAclCommandInput} for command's `input` shape.
 * @see {@link GetBucketAclCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class GetBucketAclCommand extends $Command<GetBucketAclCommandInput, GetBucketAclCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketAclCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketAclCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketAclCommandInput, GetBucketAclCommandOutput>;
    private serialize;
    private deserialize;
}
