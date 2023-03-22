import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutBucketLoggingRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link PutBucketLoggingCommand}.
 */
export interface PutBucketLoggingCommandInput extends PutBucketLoggingRequest {
}
/**
 * The output of {@link PutBucketLoggingCommand}.
 */
export interface PutBucketLoggingCommandOutput extends __MetadataBearer {
}
/**
 * <p>Set the logging parameters for a bucket and to specify permissions for who can view and
 *          modify the logging parameters. All logs are saved to buckets in the same Amazon Web Services Region as the
 *          source bucket. To set the logging status of a bucket, you must be the bucket owner.</p>
 *          <p>The bucket owner is automatically granted FULL_CONTROL to all logs. You use the <code>Grantee</code> request element to grant access to other people. The
 *             <code>Permissions</code> request element specifies the kind of access the grantee has to
 *          the logs.</p>
 *          <important>
 *             <p>If the target bucket for log delivery uses the bucket owner enforced
 *             setting for S3 Object Ownership, you can't use the <code>Grantee</code> request element
 *             to grant access to others. Permissions can only be granted using policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general">Permissions for server access log delivery</a> in the
 *                <i>Amazon S3 User Guide</i>.</p>
 *          </important>
 *          <p>
 *             <b>Grantee Values</b>
 *          </p>
 *          <p>You can specify the person (grantee) to whom you're assigning access rights (using
 *          request elements) in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>By the person's ID:</p>
 *                <p>
 *                   <code><Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName>
 *                   </Grantee></code>
 *                </p>
 *                <p>DisplayName is optional and ignored in the request.</p>
 *             </li>
 *             <li>
 *                <p>By Email address:</p>
 *                <p>
 *                   <code> <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress></Grantee></code>
 *                </p>
 *                <p>The grantee is resolved to the CanonicalUser and, in a response to a GET Object
 *                acl request, appears as the CanonicalUser.</p>
 *             </li>
 *             <li>
 *                <p>By URI:</p>
 *                <p>
 *                   <code><Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee></code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>To enable logging, you use LoggingEnabled and its children request elements. To disable
 *          logging, you use an empty BucketLoggingStatus request element:</p>
 *          <p>
 *             <code><BucketLoggingStatus xmlns="http://doc.s3.amazonaws.com/2006-03-01"
 *             /></code>
 *          </p>
 *          <p>For more information about server access logging, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html">Server Access Logging</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <p>For more information about creating a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>. For more
 *          information about returning the logging status of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html">GetBucketLogging</a>.</p>
 *          <p>The following operations are related to <code>PutBucketLogging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html">GetBucketLogging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketLoggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketLoggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketLoggingCommandInput} for command's `input` shape.
 * @see {@link PutBucketLoggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example Set logging configuration for a bucket
 * ```javascript
 * // The following example sets logging policy on a bucket. For the Log Delivery group to deliver logs to the destination bucket, it needs permission for the READ_ACP action which the policy grants.
 * const input = {
 *   "Bucket": "sourcebucket",
 *   "BucketLoggingStatus": {
 *     "LoggingEnabled": {
 *       "TargetBucket": "targetbucket",
 *       "TargetGrants": [
 *         {
 *           "Grantee": {
 *             "Type": "Group",
 *             "URI": "http://acs.amazonaws.com/groups/global/AllUsers"
 *           },
 *           "Permission": "READ"
 *         }
 *       ],
 *       "TargetPrefix": "MyBucketLogs/"
 *     }
 *   }
 * };
 * const command = new PutBucketLoggingCommand(input);
 * await client.send(command);
 * // example id: set-logging-configuration-for-a-bucket-1482269119909
 * ```
 *
 */
export declare class PutBucketLoggingCommand extends $Command<PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketLoggingCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: PutBucketLoggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput>;
    private serialize;
    private deserialize;
}