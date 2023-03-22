import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
import { HeadObjectCommandInput } from "../commands/HeadObjectCommand";
import { S3Client } from "../S3Client";
export declare const waitForObjectNotExists: (
  params: WaiterConfiguration<S3Client>,
  input: HeadObjectCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilObjectNotExists: (
  params: WaiterConfiguration<S3Client>,
  input: HeadObjectCommandInput
) => Promise<WaiterResult>;