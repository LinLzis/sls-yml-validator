import { Region } from "./enum";

export interface YmlObj<T> {
  org?: string;
  app?: string;
  stage?: string;
  component: string;
  name: string;
  inputs: T;
}

export interface BucketSrc {
  bucket: string;
  object: string;
}

export interface ZiptSrc {
  src: string;
  bucket?: string;
  exclude?: string[];
}

export interface CommonInput {
  src?: string | BucketSrc | ZiptSrc;
  region: Region;
  runtime?: string;
}

export interface Tag {
  key: string;
  value: string;
}

export interface UsagePlanConfig {
  usagePlanId?: string;
  usagePlanName?: string;
  usagePlanDesc?: string;
  /**
   * @type integer
   */
  maxRequestNum?: number;
}

export interface AuthConfig {
  secretName: string;
  secretIds?: string;
}
