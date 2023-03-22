import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListMultipartUploadsOutput, ListMultipartUploadsRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link ListMultipartUploadsCommand}.
 */
export interface ListMultipartUploadsCommandInput extends ListMultipartUploadsRequest {
}
/**
 * The output of {@link ListMultipartUploadsCommand}.
 */
export interface ListMultipartUploadsCommandOutput extends ListMultipartUploadsOutput, __MetadataBearer {
}
/**
 * <p>This action lists in-progress multipart uploads. An in-progress multipart upload is a
 *          multipart upload that has been initiated using the Initiate Multipart Upload request, but
 *          has not yet been completed or aborted.</p>
 *          <p>This action returns at most 1,000 multipart uploads in the response. 1,000 multipart
 *          uploads is the maximum number of uploads a response can include, which is also the default
 *          value. You can further limit the number of uploads in a response by specifying the
 *             <code>max-uploads</code> parameter in the response. If additional multipart uploads
 *          satisfy the list criteria, the response will contain an <code>IsTruncated</code> element
 *          with the value true. To list the additional multipart uploads, use the
 *             <code>key-marker</code> and <code>upload-id-marker</code> request parameters.</p>
 *          <p>In the response, the uploads are sorted by key. If your application has initiated more
 *          than one multipart upload using the same object key, then uploads in the response are first
 *          sorted by key. Additionally, uploads are sorted in ascending order within each key by the
 *          upload initiation time.</p>
 *          <p>For more information on multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart
 *             Upload</a>.</p>
 *          <p>For information on permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and
 *          Permissions</a>.</p>
 *          <p>The following operations are related to <code>ListMultipartUploads</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListMultipartUploadsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListMultipartUploadsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new ListMultipartUploadsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultipartUploadsCommandInput} for command's `input` shape.
 * @see {@link ListMultipartUploadsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To list in-progress multipart uploads on a bucket
 * ```javascript
 * // The following example lists in-progress multipart uploads on a specific bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new ListMultipartUploadsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Uploads": [
 *     {
 *       "Initiated": "2014-05-01T05:40:58.000Z",
 *       "Initiator": {
 *         "DisplayName": "display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Key": "JavaFile",
 *       "Owner": {
 *         "DisplayName": "display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "StorageClass": "STANDARD",
 *       "UploadId": "examplelUa.CInXklLQtSMJITdUnoZ1Y5GACB5UckOtspm5zbDMCkPF_qkfZzMiFZ6dksmcnqxJyIBvQMG9X9Q--"
 *     },
 *     {
 *       "Initiated": "2014-05-01T05:41:27.000Z",
 *       "Initiator": {
 *         "DisplayName": "display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Key": "JavaFile",
 *       "Owner": {
 *         "DisplayName": "display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "StorageClass": "STANDARD",
 *       "UploadId": "examplelo91lv1iwvWpvCiJWugw2xXLPAD7Z8cJyX9.WiIRgNrdG6Ldsn.9FtS63TCl1Uf5faTB.1U5Ckcbmdw--"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-in-progress-multipart-uploads-on-a-bucket-1481852775260
 * ```
 *
 * @example List next set of multipart uploads when previous result is truncated
 * ```javascript
 * // The following example specifies the upload-id-marker and key-marker from previous truncated response to retrieve next setup of multipart uploads.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "KeyMarker": "nextkeyfrompreviousresponse",
 *   "MaxUploads": "2",
 *   "UploadIdMarker": "valuefrompreviousresponse"
 * };
 * const command = new ListMultipartUploadsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Bucket": "acl1",
 *   "IsTruncated": true,
 *   "KeyMarker": "",
 *   "MaxUploads": "2",
 *   "NextKeyMarker": "someobjectkey",
 *   "NextUploadIdMarker": "examplelo91lv1iwvWpvCiJWugw2xXLPAD7Z8cJyX9.WiIRgNrdG6Ldsn.9FtS63TCl1Uf5faTB.1U5Ckcbmdw--",
 *   "UploadIdMarker": "",
 *   "Uploads": [
 *     {
 *       "Initiated": "2014-05-01T05:40:58.000Z",
 *       "Initiator": {
 *         "DisplayName": "ownder-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Key": "JavaFile",
 *       "Owner": {
 *         "DisplayName": "mohanataws",
 *         "ID": "852b113e7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "StorageClass": "STANDARD",
 *       "UploadId": "gZ30jIqlUa.CInXklLQtSMJITdUnoZ1Y5GACB5UckOtspm5zbDMCkPF_qkfZzMiFZ6dksmcnqxJyIBvQMG9X9Q--"
 *     },
 *     {
 *       "Initiated": "2014-05-01T05:41:27.000Z",
 *       "Initiator": {
 *         "DisplayName": "ownder-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Key": "JavaFile",
 *       "Owner": {
 *         "DisplayName": "ownder-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "StorageClass": "STANDARD",
 *       "UploadId": "b7tZSqIlo91lv1iwvWpvCiJWugw2xXLPAD7Z8cJyX9.WiIRgNrdG6Ldsn.9FtS63TCl1Uf5faTB.1U5Ckcbmdw--"
 *     }
 *   ]
 * }
 * *\/
 * // example id: list-next-set-of-multipart-uploads-when-previous-result-is-truncated-1482428106748
 * ```
 *
 */
export declare class ListMultipartUploadsCommand extends $Command<ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListMultipartUploadsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: ListMultipartUploadsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput>;
    private serialize;
    private deserialize;
}