import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetObjectLegalHoldOutput, GetObjectLegalHoldRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandInput extends GetObjectLegalHoldRequest {
}
/**
 * The output of {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandOutput extends GetObjectLegalHoldOutput, __MetadataBearer {
}
/**
 * <p>Gets an object's current legal hold status. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking
 *          Objects</a>.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectLegalHold</code>:</p>
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
 * import { S3Client, GetObjectLegalHoldCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectLegalHoldCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectLegalHoldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectLegalHoldCommandInput} for command's `input` shape.
 * @see {@link GetObjectLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class GetObjectLegalHoldCommand extends $Command<GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectLegalHoldCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetObjectLegalHoldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput>;
    private serialize;
    private deserialize;
}
