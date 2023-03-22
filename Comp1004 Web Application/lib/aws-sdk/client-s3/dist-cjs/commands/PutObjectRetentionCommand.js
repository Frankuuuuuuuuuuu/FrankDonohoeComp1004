"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutObjectRetentionCommand = void 0;
const middleware_endpoint_1 = require("@aws-sdk/middleware-endpoint");
const middleware_flexible_checksums_1 = require("@aws-sdk/middleware-flexible-checksums");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_1_1 = require("../models/models_1");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
class PutObjectRetentionCommand extends smithy_client_1.Command {
    static getEndpointParameterInstructions() {
        return {
            Bucket: { type: "contextParams", name: "Bucket" },
            ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
            UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
            DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
            Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
            UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, PutObjectRetentionCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use((0, middleware_flexible_checksums_1.getFlexibleChecksumsPlugin)(configuration, {
            input: this.input,
            requestAlgorithmMember: "ChecksumAlgorithm",
            requestChecksumRequired: true,
        }));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "S3Client";
        const commandName = "PutObjectRetentionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.PutObjectRetentionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.PutObjectRetentionOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restXml_1.serializeAws_restXmlPutObjectRetentionCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restXml_1.deserializeAws_restXmlPutObjectRetentionCommand)(output, context);
    }
}
exports.PutObjectRetentionCommand = PutObjectRetentionCommand;
