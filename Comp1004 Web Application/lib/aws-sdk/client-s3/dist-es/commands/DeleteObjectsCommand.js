import { getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteObjectsOutputFilterSensitiveLog, DeleteObjectsRequestFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restXmlDeleteObjectsCommand, serializeAws_restXmlDeleteObjectsCommand, } from "../protocols/Aws_restXml";
export class DeleteObjectsCommand extends $Command {
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
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteObjectsCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use(getFlexibleChecksumsPlugin(configuration, {
            input: this.input,
            requestAlgorithmMember: "ChecksumAlgorithm",
            requestChecksumRequired: true,
        }));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "S3Client";
        const commandName = "DeleteObjectsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteObjectsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DeleteObjectsOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_restXmlDeleteObjectsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_restXmlDeleteObjectsCommand(output, context);
    }
}