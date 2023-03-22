import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListObjectVersionsOutput, ListObjectVersionsRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link ListObjectVersionsCommand}.
 */
export interface ListObjectVersionsCommandInput extends ListObjectVersionsRequest {
}
/**
 * The output of {@link ListObjectVersionsCommand}.
 */
export interface ListObjectVersionsCommandOutput extends ListObjectVersionsOutput, __MetadataBearer {
}
/**
 * <p>Returns metadata about all versions of the objects in a bucket. You can also use request
 *          parameters as selection criteria to return metadata about a subset of all the object
 *          versions.</p>
 *          <important>
 *             <p>
 *             To use this operation, you must have permissions to perform the
 *             <code>s3:ListBucketVersions</code> action. Be aware of the name difference.
 *          </p>
 *          </important>
 *          <note>
 *             <p> A 200 OK response can contain valid or invalid XML. Make sure to design your
 *             application to parse the contents of the response and handle it appropriately.</p>
 *          </note>
 *          <p>To use this operation, you must have READ access to the bucket.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>The following operations are related to
 *             <code>ListObjectVersions</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html">ListObjectsV2</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListObjectVersionsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListObjectVersionsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new ListObjectVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectVersionsCommandInput} for command's `input` shape.
 * @see {@link ListObjectVersionsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To list object versions
 * ```javascript
 * // The following example return versions of an object with specific key name prefix. The request limits the number of items returned to two. If there are are more than two object version, S3 returns NextToken in the response. You can specify this token value in your next request to fetch next set of object versions.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Prefix": "HappyFace.jpg"
 * };
 * const command = new ListObjectVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Versions": [
 *     {
 *       "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *       "IsLatest": true,
 *       "Key": "HappyFace.jpg",
 *       "LastModified": "2016-12-15T01:19:41.000Z",
 *       "Owner": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Size": 3191,
 *       "StorageClass": "STANDARD",
 *       "VersionId": "null"
 *     },
 *     {
 *       "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *       "IsLatest": false,
 *       "Key": "HappyFace.jpg",
 *       "LastModified": "2016-12-13T00:58:26.000Z",
 *       "Owner": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Size": 3191,
 *       "StorageClass": "STANDARD",
 *       "VersionId": "PHtexPGjH2y.zBgT8LmB7wwLI2mpbz.k"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-object-versions-1481910996058
 * ```
 *
 */
export declare class ListObjectVersionsCommand extends $Command<ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListObjectVersionsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: ListObjectVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput>;
    private serialize;
    private deserialize;
}