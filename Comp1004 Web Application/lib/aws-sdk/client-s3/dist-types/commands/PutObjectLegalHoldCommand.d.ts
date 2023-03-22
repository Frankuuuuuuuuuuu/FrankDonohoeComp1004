import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutObjectLegalHoldOutput, PutObjectLegalHoldRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link PutObjectLegalHoldCommand}.
 */
export interface PutObjectLegalHoldCommandInput extends PutObjectLegalHoldRequest {
}
/**
 * The output of {@link PutObjectLegalHoldCommand}.
 */
export interface PutObjectLegalHoldCommandOutput extends PutObjectLegalHoldOutput, __MetadataBearer {
}
/**
 * <p>Applies a legal hold configuration to the specified object. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking
 *             Objects</a>.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectLegalHoldCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectLegalHoldCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectLegalHoldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectLegalHoldCommandInput} for command's `input` shape.
 * @see {@link PutObjectLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class PutObjectLegalHoldCommand extends $Command<PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectLegalHoldCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: PutObjectLegalHoldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput>;
    private serialize;
    private deserialize;
}
