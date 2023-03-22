import { getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { RestoreObjectOutputFilterSensitiveLog, RestoreObjectRequestFilterSensitiveLog, } from "../models/models_1";
import { deserializeAws_restXmlRestoreObjectCommand, serializeAws_restXmlRestoreObjectCommand, } from "../protocols/Aws_restXml";
export class RestoreObjectCommand extends $Command {
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
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, RestoreObjectCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use(getFlexibleChecksumsPlugin(configuration, {
            input: this.input,
            requestAlgorithmMember: "ChecksumAlgorithm",
            requestChecksumRequired: false,
        }));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "S3Client";
        const commandName = "RestoreObjectCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: RestoreObjectRequestFilterSensitiveLog,
            outputFilterSensitiveLog: RestoreObjectOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_restXmlRestoreObjectCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_restXmlRestoreObjectCommand(output, context);
    }
}