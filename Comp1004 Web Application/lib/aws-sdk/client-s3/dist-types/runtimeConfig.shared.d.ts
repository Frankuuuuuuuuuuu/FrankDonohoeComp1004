import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { S3ClientConfig } from "./S3Client";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: S3ClientConfig) => {
    apiVersion: string;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    disableHostPrefix: boolean;
    endpointProvider: (endpointParams: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@aws-sdk/types").Logger | undefined;
    }) => import("@aws-sdk/types").EndpointV2;
    logger: import("@aws-sdk/types").Logger;
    serviceId: string;
    signerConstructor: (new (options: import("@aws-sdk/signature-v4").SignatureV4Init & import("@aws-sdk/signature-v4").SignatureV4CryptoInit) => import("@aws-sdk/types").RequestSigner) | typeof SignatureV4MultiRegion;
    signingEscapePath: boolean;
    urlParser: import("@aws-sdk/types").UrlParser;
    useArnRegion: boolean | import("@aws-sdk/types").Provider<boolean>;
    utf8Decoder: import("@aws-sdk/types").Decoder;
    utf8Encoder: import("@aws-sdk/types").Encoder;
};