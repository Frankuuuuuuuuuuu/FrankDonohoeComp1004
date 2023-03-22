import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetObjectRetentionOutput, GetObjectRetentionRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetObjectRetentionCommand}.
 */
export interface GetObjectRetentionCommandInput extends GetObjectRetentionRequest {
}
/**
 * The output of {@link GetObjectRetentionCommand}.
 */
export interface GetObjectRetentionCommandOutput extends GetObjectRetentionOutput, __MetadataBearer {
}
/**
 * <p>Retrieves an object's retention settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectRetention</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectRetentionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectRetentionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectRetentionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectRetentionCommandInput} for command's `input` shape.
 * @see {@link GetObjectRetentionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class GetObjectRetentionCommand extends $Command<GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectRetentionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetObjectRetentionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput>;
    private serialize;
    private deserialize;
}