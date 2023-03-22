import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetObjectAclOutput, GetObjectAclRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetObjectAclCommand}.
 */
export interface GetObjectAclCommandInput extends GetObjectAclRequest {
}
/**
 * The output of {@link GetObjectAclCommand}.
 */
export interface GetObjectAclCommandOutput extends GetObjectAclOutput, __MetadataBearer {
}
/**
 * <p>Returns the access control list (ACL) of an object. To use this operation, you must have
 *             <code>s3:GetObjectAcl</code> permissions or <code>READ_ACP</code> access to the object.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#acl-access-policy-permission-mapping">Mapping of ACL permissions and access policy permissions</a> in the <i>Amazon S3
 *             User Guide</i>
 *          </p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>
 *             <b>Versioning</b>
 *          </p>
 *          <p>By default, GET returns ACL information about the current version of an object. To
 *          return ACL information about a different version, use the versionId subresource.</p>
 *          <note>
 *             <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership,
 *             requests to read ACLs are still supported and return the <code>bucket-owner-full-control</code>
 *             ACL with the owner being the account that created the bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">
 *                Controlling object ownership and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <p>The following operations are related to <code>GetObjectAcl</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectAclCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectAclCommandInput} for command's `input` shape.
 * @see {@link GetObjectAclCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchKey} (client fault)
 *  <p>The specified key does not exist.</p>
 *
 *
 * @example To retrieve object ACL
 * ```javascript
 * // The following example retrieves access control list (ACL) of an object.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new GetObjectAclCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Grants": [
 *     {
 *       "Grantee": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         "Type": "CanonicalUser"
 *       },
 *       "Permission": "WRITE"
 *     },
 *     {
 *       "Grantee": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         "Type": "CanonicalUser"
 *       },
 *       "Permission": "WRITE_ACP"
 *     },
 *     {
 *       "Grantee": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         "Type": "CanonicalUser"
 *       },
 *       "Permission": "READ"
 *     },
 *     {
 *       "Grantee": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "852b113eexamplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         "Type": "CanonicalUser"
 *       },
 *       "Permission": "READ_ACP"
 *     }
 *   ],
 *   "Owner": {
 *     "DisplayName": "owner-display-name",
 *     "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   }
 * }
 * *\/
 * // example id: to-retrieve-object-acl-1481833557740
 * ```
 *
 */
export declare class GetObjectAclCommand extends $Command<GetObjectAclCommandInput, GetObjectAclCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectAclCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetObjectAclCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectAclCommandInput, GetObjectAclCommandOutput>;
    private serialize;
    private deserialize;
}