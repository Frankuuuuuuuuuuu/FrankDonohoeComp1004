import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { AbortMultipartUploadOutput, AbortMultipartUploadRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link AbortMultipartUploadCommand}.
 */
export interface AbortMultipartUploadCommandInput extends AbortMultipartUploadRequest {
}
/**
 * The output of {@link AbortMultipartUploadCommand}.
 */
export interface AbortMultipartUploadCommandOutput extends AbortMultipartUploadOutput, __MetadataBearer {
}
/**
 * <p>This action aborts a multipart upload. After a multipart upload is aborted, no
 *          additional parts can be uploaded using that upload ID. The storage consumed by any
 *          previously uploaded parts will be freed. However, if any part uploads are currently in
 *          progress, those part uploads might or might not succeed. As a result, it might be necessary
 *          to abort a given multipart upload multiple times in order to completely free all storage
 *          consumed by all parts. </p>
 *          <p>To verify that all parts have been removed, so you don't get charged for the part
 *          storage, you should call the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> action and ensure that
 *          the parts list is empty.</p>
 *          <p>For information about permissions required to use the multipart upload, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and
 *          Permissions</a>.</p>
 *          <p>The following operations are related to <code>AbortMultipartUpload</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a>
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
 * import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, AbortMultipartUploadCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new AbortMultipartUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link AbortMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchUpload} (client fault)
 *  <p>The specified multipart upload does not exist.</p>
 *
 *
 * @example To abort a multipart upload
 * ```javascript
 * // The following example aborts a multipart upload.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "bigobject",
 *   "UploadId": "xadcOB_7YPBOJuoFiQ9cz4P3Pe6FIZwO4f7wN93uHsNBEw97pl5eNwzExg0LAT2dUN91cOmrEQHDsP3WA60CEg--"
 * };
 * const command = new AbortMultipartUploadCommand(input);
 * await client.send(command);
 * // example id: to-abort-a-multipart-upload-1481853354987
 * ```
 *
 */
export declare class AbortMultipartUploadCommand extends $Command<AbortMultipartUploadCommandInput, AbortMultipartUploadCommandOutput, S3ClientResolvedConfig> {
    readonly input: AbortMultipartUploadCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: AbortMultipartUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AbortMultipartUploadCommandInput, AbortMultipartUploadCommandOutput>;
    private serialize;
    private deserialize;
}
