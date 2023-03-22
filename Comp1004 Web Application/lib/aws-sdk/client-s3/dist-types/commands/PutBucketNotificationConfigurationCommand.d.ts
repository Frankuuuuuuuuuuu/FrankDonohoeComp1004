import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutBucketNotificationConfigurationRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link PutBucketNotificationConfigurationCommand}.
 */
export interface PutBucketNotificationConfigurationCommandInput extends PutBucketNotificationConfigurationRequest {
}
/**
 * The output of {@link PutBucketNotificationConfigurationCommand}.
 */
export interface PutBucketNotificationConfigurationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables notifications of specified events for a bucket. For more information about event
 *          notifications, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event
 *             Notifications</a>.</p>
 *          <p>Using this API, you can replace an existing notification configuration. The
 *          configuration is an XML file that defines the event types that you want Amazon S3 to publish and
 *          the destination where you want Amazon S3 to publish an event notification when it detects an
 *          event of the specified type.</p>
 *          <p>By default, your bucket has no event notifications configured. That is, the notification
 *          configuration will be an empty <code>NotificationConfiguration</code>.</p>
 *          <p>
 *             <code><NotificationConfiguration></code>
 *          </p>
 *          <p>
 *             <code></NotificationConfiguration></code>
 *          </p>
 *          <p>This action replaces the existing notification configuration with the configuration
 *          you include in the request body.</p>
 *          <p>After Amazon S3 receives this request, it first verifies that any Amazon Simple Notification
 *          Service (Amazon SNS) or Amazon Simple Queue Service (Amazon SQS) destination exists, and
 *          that the bucket owner has permission to publish to it by sending a test notification. In
 *          the case of Lambda destinations, Amazon S3 verifies that the Lambda function permissions
 *          grant Amazon S3 permission to invoke the function from the Amazon S3 bucket. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Notifications for Amazon S3
 *             Events</a>.</p>
 *          <p>You can disable notifications by adding the empty NotificationConfiguration
 *          element.</p>
 *          <p>For more information about the number of event notification configurations that you can create per bucket, see
 *          <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#limits_s3">Amazon S3 service quotas</a> in <i>Amazon Web Services General Reference</i>.</p>
 *          <p>By default, only the bucket owner can configure notifications on a bucket. However,
 *          bucket owners can use a bucket policy to grant permission to other users to set this
 *          configuration with <code>s3:PutBucketNotification</code> permission.</p>
 *          <note>
 *             <p>The PUT notification is an atomic operation. For example, suppose your notification
 *             configuration includes SNS topic, SQS queue, and Lambda function configurations. When
 *             you send a PUT request with this configuration, Amazon S3 sends test messages to your SNS
 *             topic. If the message fails, the entire PUT action will fail, and Amazon S3 will not add
 *             the configuration to your bucket.</p>
 *          </note>
 *          <p>
 *             <b>Responses</b>
 *          </p>
 *          <p>If the configuration in the request body includes only one
 *             <code>TopicConfiguration</code> specifying only the
 *             <code>s3:ReducedRedundancyLostObject</code> event type, the response will also include
 *          the <code>x-amz-sns-test-message-id</code> header containing the message ID of the test
 *          notification sent to the topic.</p>
 *          <p>The following action is related to
 *          <code>PutBucketNotificationConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html">GetBucketNotificationConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketNotificationConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketNotificationConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example Set notification configuration for a bucket
 * ```javascript
 * // The following example sets notification configuration on a bucket to publish the object created events to an SNS topic.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "NotificationConfiguration": {
 *     "TopicConfigurations": [
 *       {
 *         "Events": [
 *           "s3:ObjectCreated:*"
 *         ],
 *         "TopicArn": "arn:aws:sns:us-west-2:123456789012:s3-notification-topic"
 *       }
 *     ]
 *   }
 * };
 * const command = new PutBucketNotificationConfigurationCommand(input);
 * await client.send(command);
 * // example id: set-notification-configuration-for-a-bucket-1482270296426
 * ```
 *
 */
export declare class PutBucketNotificationConfigurationCommand extends $Command<PutBucketNotificationConfigurationCommandInput, PutBucketNotificationConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketNotificationConfigurationCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: PutBucketNotificationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketNotificationConfigurationCommandInput, PutBucketNotificationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}