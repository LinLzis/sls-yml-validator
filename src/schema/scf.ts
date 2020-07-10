import {
  CommonInput,
  YmlObj,
  BucketSrc,
  ZiptSrc,
  Tag,
  UsagePlanConfig,
  AuthConfig,
} from "./common";
import { Protocol, NodeRuntime, Environment, HttpMethod } from "./enum";

enum ResponseType {
  HTML = "HTML",
  JSON = "JSON",
  TEST = "TEST",
  BINARY = "BINARY",
  XML = "XML",
}

enum ParamRequired {
  "TRUE" = "TRUE",
  "FALSE" = "FALSE",
}

interface FrontendParam {
  name?: string;
  position?: string;
  required?: ParamRequired;
  type?: string;
  defaultValue?: string;
  desc?: string;
}

interface ScfParam {
  isIntegratedResponse?: boolean;
  functionQualifier?: string;
}

interface Endpoint {
  path: string;
  method: HttpMethod;
  apiId?: string;
  description?: string;
  enableCORS?: boolean;
  responseType?: ResponseType;
  /**
   * @type integer
   */
  serviceTimeout: number;
  param?: FrontendParam;
  function?: ScfParam;
  usagePlan?: UsagePlanConfig;
  auth?: AuthConfig;
}

interface GwParam {
  endpoints: Endpoint[];
  environment: Environment;
  protocols?: Protocol[];
  description?: string;
  serviceId?: string;
  serviceName?: string;
}

interface ApiGwTrigger {
  apigw: { name: string; parameters: GwParam };
}

interface TimerTrigger {
  timer: {
    name: string;
    parameters: { cronExpression: string; enable?: boolean; argument?: object };
  };
}

interface CosParam {
  bucket: string;
  filter: {
    prefix: string;
    suffix: string;
  };
  events: string;
  enable?: boolean;
}

interface CosTrigger {
  cos: { name: string; parameters: CosParam };
}

interface CmqTigger {
  cmq: {
    name: string;
    parameters: {
      name: string;
      enable?: boolean;
    };
  };
}

interface KfkParam {
  name: string;
  topic: string;
  /**
   * @type integer
   */
  maxMsgNum: number;
  offset: string;
  enable?: boolean;
}

interface KfkTrigger {
  ckafka: {
    name: string;
    parameters: KfkParam;
  };
}

interface EnvVariable {
  variables: object[];
}

interface VpcConfig {
  vpcId: string;
  subnetId: string;
}

interface Layer {
  name?: string;
  version?: string;
}

interface DeadLetter {
  type: string;
  name: string;
  filterType?: string;
}

interface Cls {
  logsetId: string;
  topicId: string;
}

interface ScfInput extends CommonInput {
  src: string | BucketSrc | ZiptSrc;
  runtime: NodeRuntime;
  handler: string;
  name: string;
  namesapce?: string;
  enableRoleAuth?: boolean;
  role?: string;
  events?: TimerTrigger[] | ApiGwTrigger[] | CosTrigger[] | CmqTigger[] | KfkTrigger[];
  description?: string;
  /**
   * memory size scope: 64、128MB-3072MB,以128MB为阶梯
   * @minimum 64
   * @maximum 3072
   */
  memorySize?: number;
  /**
   * timeout scope: 1~900s
   * @minimum 1
   * @maximum 900
   */
  timeout?: number;
  environment?: EnvVariable;
  vpcConfig?: VpcConfig;
  layers?: Layer;
  deadLetter?: DeadLetter;
  cls?: Cls;
  eip?: boolean;
  tags?: Tag[];
  /**
   * traffic scope: 0~1，e.g.: 80% set to 0.8
   * @minimum 0
   * @maximum 1
   */
  traffic?: number;
}

export interface Scf extends YmlObj<ScfInput> {}
