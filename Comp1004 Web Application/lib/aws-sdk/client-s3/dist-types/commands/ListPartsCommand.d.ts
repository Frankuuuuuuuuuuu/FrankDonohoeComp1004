import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListPartsOutput, ListPartsRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link ListPartsCommand}.
 */
export interface ListPartsCommandInput extends ListPartsRequest {
}
/**
 * The output of {@link ListPartsCommand}.
 */
export interface ListPartsCommandOutput extends ListPartsOutput, __MetadataBearer {
}
/**
 * <p>Lists the parts that have been uploaded for a specific multipart upload. This operation
 *          must include the upload ID, which you obtain by sending the initiate multipart upload
 *          request (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>).
 *          This request returns a maximum of 1,000 uploaded parts. The default number of parts
 *          returned is 1,000 parts. You can restrict the number of parts returned by specifying the
 *             <code>max-parts</code> request parameter. If your multipart upload consists of more than
 *          1,000 parts, the response returns an <code>IsTruncated</code> field with the value of true,
 *          and a <code>NextPartNumberMarker</code> element. In subsequent <code>ListParts</code>
 *          requests you can include the part-number-marker query string parameter and set its value to
 *          the <code>NextPartNumberMarker</code> field value from the previous response.</p>
 *          <p>If the upload was created using a checksum algorithm, you will need to have permission
 *            to the <code>kms:Decrypt</code> action for the request to succeed.
 *        </p>
 *          <p>For more information on multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart
 *             Upload</a>.</p>
 *          <p>For information on permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and
 *          Permissions</a>.</p>
 *          <p>The following operations are related to <code>ListParts</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListPartsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListPartsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPartsCommandInput} for command's `input` shape.
 * @see {@link ListPartsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To list parts of a multipart upload.
 * ```javascript
 * // The following example lists parts uploaded for a specific multipart upload.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "bigobject",
 *   "UploadId": "example7YPBOJuoFiQ9cz4P3Pe6FIZwO4f7wN93uHsNBEw97pl5eNwzExg0LAT2dUN91cOmrEQHDsP3WA60CEg--"
 * };
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Initiator": {
 *     "DisplayName": "owner-display-name",
 *     "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   },
 *   "Owner": {
 *     "DisplayName": "owner-display-name",
 *     "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   },
 *   "Parts": [
 *     {
 *       "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\"",
 *       "LastModified": "2016-12-16T00:11:42.000Z",
 *       "PartNumber": "1",
 *       "Size": 26246026
 *     },
 *     {
 *       "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\"",
 *       "LastModified": "2016-12-16T00:15:01.000Z",
 *       "PartNumber": "2",
 *       "Size": 26246026
 *     }
 *   ],
 *   "StorageClass": "STANDARD"
 * }
 * *\/
 * // example id: to-list-parts-of-a-multipart-upload-1481852006923
 * ```
 *
 */
export declare class ListPartsCommand extends $Command<ListPartsCommandInput, ListPartsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListPartsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: ListPartsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPartsCommandInput, ListPartsCommandOutput>;
    private serialize;
    private deserialize;
}