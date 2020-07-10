const Ajv = require("ajv");
import { validateValues } from "./validator";

interface AjvError {
  keyword: string;
  dataPath: string;
  schemaPath: string;
  params: any;
  message: string;
}

const validateDataType = (data: any, type: string) => {
  let isValid: boolean = true;
  let errMsg: string[] = [];

  const schema = require(`../src/datas/${type}.json`);

  var ajv = new Ajv({ extendRefs: true });
  var valid = ajv.validate(schema, data);
  if (!valid) {
    // console.log(JSON.stringify(ajv.errors));
    // TODO: format error message
    // E.g.:  [{"keyword":"enum","dataPath":".inputs.protocol[0]","schemaPath":"#/properties/protocol/items/enum","params":{"allowedValues":["http","https"]},"message":"should be equal to one of the allowed values"}]
    // E.g.:  [{"keyword":"type","dataPath":".inputs.protocol","schemaPath":"#/properties/protocol/type","params":{"type":"array"},"message":"should be array"}]
    // E.g.:  [{"keyword":"maxItems","dataPath":".inputs.protocol","schemaPath":"#/properties/protocol/maxItems","params":{"limit":1},"message":"should NOT have more than 1 items"}]
    // E.g.:  [{"keyword":"type","dataPath":".inputs.test","schemaPath":"#/properties/test/type","params":{"type":"string,number"},"message":"should be string,number"}]
    // E.g.:  [{"keyword":"required","dataPath":".inputs","schemaPath":"#/required","params":{"missingProperty":"name"},"message":"should have required property 'name'"}]

    // E.g.:  [{"keyword":"type","dataPath":".inputs.test.a","schemaPath":"#/definitions/TestObj/properties/a/type","params":{"type":"string"},"message":"should be string"},
    // {"keyword":"type","dataPath":".inputs.test","schemaPath":"#/properties/test/anyOf/1/type","params":{"type":"string"},"message":"should be string"},
    // {"keyword":"anyOf","dataPath":".inputs.test","schemaPath":"#/properties/test/anyOf","params":{},"message":"should match some schema in anyOf"}]

    // E.g.:  [{"keyword":"required","dataPath":".inputs.src","schemaPath":"#/definitions/BucketSrc/required","params":{"missingProperty":"bucket"},"message":"should have required property 'bucket'"},
    // {"keyword":"type","dataPath":".inputs.src.exclude","schemaPath":"#/definitions/ZiptSrc/properties/exclude/type","params":{"type":"array"},"message":"should be array"},
    // {"keyword":"type","dataPath":".inputs.src","schemaPath":"#/properties/src/anyOf/2/type","params":{"type":"string"},"message":"should be string"},
    // {"keyword":"anyOf","dataPath":".inputs.src","schemaPath":"#/properties/src/anyOf","params":{},"message":"should match some schema in anyOf"}]

    // assert by keyword then format message with dataPath+message
    errMsg = ajv.errors.map((item: AjvError) => {
      if (item?.keyword === "enum") {
        return `Param path:${item.dataPath}, ${item.message}:${item.params.allowedValues.toString()}`;
      } else if (item?.keyword === "anyOf") {
        return `Param path:${item.dataPath}, should match one fo the target schema`;
      } else {
        return `Param path:${item.dataPath}, ${item.message}`;
      }
    });
  }

  return { isValid, errMsg };
};

// need to build json schema files at first
export function validate(data: any): any {
  if (!data?.component) {
    console.log("component is required.");
    return { isValid: false, errMsg: ["component is required."] };
  } else {
    const validateDataTypeResult = validateDataType(data, data.component);
    console.log(validateDataTypeResult);

    const validateDataValueResult = validateValues(data);
    console.log(validateDataValueResult);

    const errorMessages = validateDataTypeResult.errMsg.concat(
      validateDataValueResult.errMsg
    );

    return {
      isValid: validateDataTypeResult.isValid && validateDataValueResult.errMsg,
      errMsg: errorMessages,
    };
  }
}

const data = {
  org: "orgDemo",
  app: "appDemo",
  stage: "dev",
  component: "cos",
  name: "cosDemo",
  inputs: {
    src: "./files",
    targetDir: "/",
    website: false,
    bucket: "my-bucket",
    region: "ap-guangzhou",
    protocol: ["https"],
    acl: {
      permissions: "private",
      grantRead: 'id="1234567"',
      grantWrite: 'id="1234567"',
      grantFullControl: 'id="1234567"',
    },
    cors: [
      {
        id: "abc",
        maxAgeSeconds: 10,
        allowedMethods: ["GET"],
        allowedOrigins: ["https://tencent.com"],
        allowedHeaders: ["FIRST_ALLOWED_HEADER"],
        exposeHeaders: ["FIRST_EXPOSED_HEADER}"],
      },
    ],
    tags: [
      {
        key: "abc",
        value: "xyz",
      },
    ],
  },
};

validate(data);
