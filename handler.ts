import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import * as pino from "pino";

export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  const logger = pino(
    {},
    {
      write(buffer: any, cb?: (err?: Error | null) => void) {
        console.log("\n" + buffer);
        if (cb) {
          cb(null);
        }
        return true;
      },
    }
  );

  logger.info("This is a log message from Pino, using console.log!");
  logger.warn("Just a warning...");

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      },
      null,
      2
    ),
  };
};
