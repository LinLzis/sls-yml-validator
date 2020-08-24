import { CommonInput, YmlObj, Tag } from './common'
import { Protocol, HttpMethod } from './enum'

enum AclPermission {
  'private' = 'private',
  'public-read' = 'public-read',
  'public-read-write' = 'public-read-write',
  'authenticated-read' = 'authenticated-read'
}

interface Acl {
  permissions?: AclPermission
  /**
   * grant id, e.g:id="1234567"
   * @pattern ^id=
   */
  grantRead?: string
  /**
   * grant id, e.g:id="1234567"
   * @pattern ^id=
   */
  grantWrite?: string
  /**
   * grant id, e.g:id="1234567"
   * @pattern ^id=
   */
  grantFullControl?: string
}

interface Cors {
  id?: string
  /**
   * 设置OPTIONS请求得到结果的有效期
   * @type integer
   */
  maxAgeSeconds: number
  allowedMethods: HttpMethod[]
  //TODO：正则表达式校验网址， e.g.: 协议://域名[:端口]
  allowedOrigins: string[]
  allowedHeaders: string[]
  exposeHeaders: string[]
}

interface CosInput extends CommonInput {
  bucket: string
  /**
   * Protocol content
   * @minItems 1
   * @maxItems 2
   */
  protocol?: Protocol[]
  targetDir?: string
  website?: boolean
  acl?: Acl
  cors?: Cors[]
  tags?: Tag[]
}

export interface Cos extends YmlObj<CosInput> {}
