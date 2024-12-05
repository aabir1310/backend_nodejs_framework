import { RequestSchema } from './RequestSchema';
let Joi = require('joi');

export enum SchemaType {
  TYPE_1 = 'type1',
  TYPE_2 = 'type2',
  TYPE_3 = 'type3',
  TYPE_4 = 'type4',
  TYPE_5 = 'type5',
  TYPE_6 = 'type6',
  TYPE_7 = 'type7',
  TYPE_8 = 'type8',
  TYPE_9 = 'type9',
  TYPE_10 ='type10',
  TYPE_11 ='type11'
}

export enum RequestReaderType {
  HEADERS = 'headers',
  BODY = 'body',
  QUERY = 'query'
}

export class RequestReader {
  public requestReaderType: RequestReaderType;
  public schemaType: SchemaType;

  constructor(schemaType: SchemaType, requestReaderType: RequestReaderType) {
    this.schemaType = schemaType;
    this.requestReaderType = requestReaderType;
  }
}

export function validate(requestReaderArray: RequestReader[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<Function>
  ) {
    const method = descriptor.value || function () { };
    descriptor.value = function (...args: Array<any>) {
      const response = args[1];
      const next = args[args.length - 1];
      let data = {};
      for (let requestReader of requestReaderArray) {
        let requestData;
        let requestReaderType = requestReader.requestReaderType;

        switch (requestReaderType) {
          case RequestReaderType.HEADERS:
            requestData = getValidationRequest(
              args[0].headers,
              RequestSchema[requestReader.schemaType]
            );
            break;
          case RequestReaderType.BODY:
            requestData = getValidationRequest(
              args[0].body,
              RequestSchema[requestReader.schemaType]
            );
            break;
          case RequestReaderType.QUERY:
            requestData = getValidationRequest(
              args[0].query,
              RequestSchema[requestReader.schemaType]
            );
            break;
        }

        if (requestData && 0 == Object.keys(requestData).length) {
          return response.send({
            error:
              `Request ${requestReaderType} (` +
              Object.keys(RequestSchema[requestReader.schemaType]) +
              `) required`
          });
        }

        try {
          // const { error, value } = Joi.validate(
          //   requestData,
          //   RequestSchema[requestReader.schemaType]
          // );
          const validateSchema = Joi.object(RequestSchema[requestReader.schemaType]);
          const { error, value } = validateSchema.validate(requestData);
          if (error) {
            return response.send({ error: error.details[0].message });
          }
          data[requestReaderType] = value;
        } catch (e) {
          return next(`Internal Server Error... ${e}`);
        }
      }

      if (Object.keys(data).length > 0) {
        return method.call(this, ...args, data);
      } else {
        return response.send({ error: `Request parameters required` });
      }
    };
  };
}

function getValidationRequest(headers: any, schema: any) {

  let requestHeadersData = {};
  for (let key in schema) {
    if (Reflect.get(headers, key)) {
      const value = headers[key];
      requestHeadersData[key] = value;
    }
  }

  return requestHeadersData;
}
