import { getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { PutBucketIntelligentTieringConfigurationRequestFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand, serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand, } from "../protocols/Aws_restXml";
export class PutBucketIntelligentTieringConfigurationCommand extends $Command {
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
        this.middlewareStack.use(getEndpointPlugin(configuration, PutBucketIntelligentTieringConfigurationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "S3Client";
        const commandName = "PutBucketIntelligentTieringConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutBucketIntelligentTieringConfigurationRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand(output, context);
    }
}
