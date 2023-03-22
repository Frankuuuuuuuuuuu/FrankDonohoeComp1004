import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListObjectsOutput, ListObjectsRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link ListObjectsCommand}.
 */
export interface ListObjectsCommandInput extends ListObjectsRequest {
}
/**
 * The output of {@link ListObjectsCommand}.
 */
export interface ListObjectsCommandOutput extends ListObjectsOutput, __MetadataBearer {
}
/**
 * <p>Returns some or all (up to 1,000) of the objects in a bucket. You can use the request
 *          parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK
 *          response can contain valid or invalid XML. Be sure to design your application to parse the
 *          contents of the response and handle it appropriately.</p>
 *          <important>
 *             <p>This action has been revised. We recommend that you use the newer version, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html">ListObjectsV2</a>, when developing applications. For backward compatibility,
 *             Amazon S3 continues to support <code>ListObjects</code>.</p>
 *          </important>
 *          <p>The following operations are related to <code>ListObjects</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new ListObjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectsCommandInput} for command's `input` shape.
 * @see {@link ListObjectsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchBucket} (client fault)
 *  <p>The specified bucket does not exist.</p>
 *
 *
 * @example To list objects in a bucket
 * ```javascript
 * // The following example list two objects in a bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "MaxKeys": "2"
 * };
 * const command = new ListObjectsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Contents": [
 *     {
 *       "ETag": "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
 *       "Key": "example1.jpg",
 *       "LastModified": "2014-11-21T19:40:05.000Z",
 *       "Owner": {
 *         "DisplayName": "myname",
 *         "ID": "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Size": 11,
 *       "StorageClass": "STANDARD"
 *     },
 *     {
 *       "ETag": "\"9c8af9a76df052144598c115ef33e511\"",
 *       "Key": "example2.jpg",
 *       "LastModified": "2013-11-15T01:10:49.000Z",
 *       "Owner": {
 *         "DisplayName": "myname",
 *         "ID": "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Size": 713193,
 *       "StorageClass": "STANDARD"
 *     }
 *   ],
 *   "NextMarker": "eyJNYXJrZXIiOiBudWxsLCAiYm90b190cnVuY2F0ZV9hbW91bnQiOiAyfQ=="
 * }
 * *\/
 * // example id: to-list-objects-in-a-bucket-1473447646507
 * ```
 *
 */
export declare class ListObjectsCommand extends $Command<ListObjectsCommandInput, ListObjectsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListObjectsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: ListObjectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListObjectsCommandInput, ListObjectsCommandOutput>;
    private serialize;
    private deserialize;
}