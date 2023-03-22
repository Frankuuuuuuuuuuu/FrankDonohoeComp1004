/// <reference types="node" />
import { NodeHttpHandler as RequestHandler } from "@aws-sdk/node-http-handler";
import { HashConstructor as __HashConstructor } from "@aws-sdk/types";
import { S3ClientConfig } from "./S3Client";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: S3ClientConfig) => {
    runtime: string;
    defaultsMode: import("@aws-sdk/types").Provider<import("@aws-sdk/smithy-client").ResolvedDefaultsMode>;
    bodyLengthChecker: import("@aws-sdk/types").BodyLengthCalculator;
    credentialDefaultProvider: (input: any) => import("@aws-sdk/types").Provider<import("@aws-sdk/types").Credentials>;
    defaultUserAgentProvider: import("@aws-sdk/types").Provider<import("@aws-sdk/types").UserAgent>;
    eventStreamSerdeProvider: import("@aws-sdk/types").EventStreamSerdeProvider;
    getAwsChunkedEncodingStream: import("@aws-sdk/types").GetAwsChunkedEncodingStream<any> | import("@aws-sdk/types").GetAwsChunkedEncodingStream<import("stream").Readable>;
    maxAttempts: number | import("@aws-sdk/types").Provider<number>;
    md5: __HashConstructor;
    region: string | import("@aws-sdk/types").Provider<string>;
    requestHandler: (import("@aws-sdk/types").RequestHandler<any, any, import("@aws-sdk/types").HttpHandlerOptions> & import("@aws-sdk/protocol-http").HttpHandler) | RequestHandler;
    retryMode: string | import("@aws-sdk/types").Provider<string>;
    sdkStreamMixin: import("@aws-sdk/types").SdkStreamMixinInjector;
    sha1: __HashConstructor;
    sha256: __HashConstructor;
    streamCollector: import("@aws-sdk/types").StreamCollector;
    streamHasher: import("@aws-sdk/types").StreamHasher<import("stream").Readable> | import("@aws-sdk/types").StreamHasher<Blob>;
    useArnRegion: boolean | import("@aws-sdk/types").Provider<boolean>;
    useDualstackEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    apiVersion: string;
    urlParser: import("@aws-sdk/types").UrlParser;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    utf8Decoder: import("@aws-sdk/types").Decoder;
    utf8Encoder: import("@aws-sdk/types").Encoder;
    disableHostPrefix: boolean;
    serviceId: string;
    signingEscapePath: boolean;
    logger: import("@aws-sdk/types").Logger;
    endpoint?: ((string | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | import("@aws-sdk/types").EndpointV2 | import("@aws-sdk/types").Provider<import("@aws-sdk/types").EndpointV2>) & (string | import("@aws-sdk/types").Provider<string> | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | import("@aws-sdk/types").EndpointV2 | import("@aws-sdk/types").Provider<import("@aws-sdk/types").EndpointV2>)) | undefined;
    endpointProvider: (endpointParams: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@aws-sdk/types").Logger | undefined;
    }) => import("@aws-sdk/types").EndpointV2;
    tls?: boolean | undefined;
    retryStrategy?: import("@aws-sdk/types").RetryStrategy | import("@aws-sdk/types").RetryStrategyV2 | undefined;
    credentials?: import("@aws-sdk/types").AwsCredentialIdentity | import("@aws-sdk/types").Provider<import("@aws-sdk/types").AwsCredentialIdentity> | undefined;
    signer?: import("@aws-sdk/types").RequestSigner | ((authScheme?: import("@aws-sdk/types").AuthScheme | undefined) => Promise<import("@aws-sdk/types").RequestSigner>) | undefined;
    systemClockOffset?: number | undefined;
    signingRegion?: string | undefined;
    signerConstructor: (new (options: import("@aws-sdk/signature-v4").SignatureV4Init & import("@aws-sdk/signature-v4").SignatureV4CryptoInit) => import("@aws-sdk/types").RequestSigner) | typeof import("@aws-sdk/signature-v4-multi-region").SignatureV4MultiRegion;
    forcePathStyle?: (boolean & (boolean | import("@aws-sdk/types").Provider<boolean>)) | undefined;
    useAccelerateEndpoint?: (boolean & (boolean | import("@aws-sdk/types").Provider<boolean>)) | undefined;
    disableMultiregionAccessPoints?: (boolean & (boolean | import("@aws-sdk/types").Provider<boolean>)) | undefined;
    customUserAgent?: string | import("@aws-sdk/types").UserAgent | undefined;
    useGlobalEndpoint?: boolean | import("@aws-sdk/types").Provider<boolean> | undefined;
};
