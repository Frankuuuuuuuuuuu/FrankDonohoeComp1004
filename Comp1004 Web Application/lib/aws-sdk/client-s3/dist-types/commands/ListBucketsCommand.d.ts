import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListBucketsOutput } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandInput {
}
/**
 * The output of {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandOutput extends ListBucketsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of all buckets owned by the authenticated sender of the request. To use
 *         this operation, you must have the <code>s3:ListAllMyBuckets</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new ListBucketsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBucketsCommandInput} for command's `input` shape.
 * @see {@link ListBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To list object versions
 * ```javascript
 * // The following example return versions of an object with specific key name prefix. The request limits the number of items returned to two. If there are are more than two object version, S3 returns NextToken in the response. You can specify this token value in your next request to fetch next set of object versions.
 * const input = undefined;
 * const command = new ListBucketsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Buckets": [
 *     {
 *       "CreationDate": "2012-02-15T21: 03: 02.000Z",
 *       "Name": "examplebucket"
 *     },
 *     {
 *       "CreationDate": "2011-07-24T19: 33: 50.000Z",
 *       "Name": "examplebucket2"
 *     },
 *     {
 *       "CreationDate": "2010-12-17T00: 56: 49.000Z",
 *       "Name": "examplebucket3"
 *     }
 *   ],
 *   "Owner": {
 *     "DisplayName": "own-display-name",
 *     "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31"
 *   }
 * }
 * *\/
 * // example id: to-list-object-versions-1481910996058
 * ```
 *
 */
export declare class ListBucketsCommand extends $Command<ListBucketsCommandInput, ListBucketsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListBucketsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: ListBucketsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBucketsCommandInput, ListBucketsCommandOutput>;
    private serialize;
    private deserialize;
}