/* const CosTestData1 = {
  org: 'orgDemo',
  app: 'appDemo',
  stage: 'dev',
  component: 'cos',
  name: 'cosDemo',
  inputs: {
    // src: {
    //   bucket: "test",
    //   object: "test",
    // },
    // src: {
    //   src: "./src/files",
    //   exclude: ["test"],
    // },
    src: './files',
    targetDir: '/',
    website: false,
    bucket: 'my-bucket',
    region: 'ap-guangzhou',
    protocol: ['https'],
    acl: {
      permissions: 'public-read'
    }
  }
}

const CosTestData2 = {
  org: 'orgDemo',
  app: 'appDemo',
  stage: 'dev',
  component: 'cos',
  name: 'cosDemo',
  inputs: {
    src: './files',
    targetDir: '/',
    website: false,
    bucket: 'my-bucket',
    region: 'ap-guangzhou',
    protocol: ['https'],
    acl: {
      permissions: 'private',
      grantRead: 'id="1234567"',
      grantWrite: 'id="1234567"',
      grantFullControl: 'id="1234567"'
    },
    cors: [
      {
        id: 'abc',
        maxAgeSeconds: 10,
        allowedMethods: ['GET'],
        allowedOrigins: ['https://tencent.com'],
        allowedHeaders: ['FIRST_ALLOWED_HEADER'],
        exposeHeaders: ['FIRST_EXPOSED_HEADER}']
      }
    ],
    tags: [
      {
        key: 'abc',
        value: 'xyz'
      }
    ]
  }
}

const ScfTestData1 = {
  org: 'orgDemo',
  app: 'appDemo',
  stage: 'dev',
  component: 'scf',
  name: 'scfDemo',
  inputs: {
    src: './src',
    runtime: 'Nodejs10.15',
    region: 'ap-guangzhou',
    handler: 'index.main_handler',
    events: [
      {
        apigw: {
          name: 'serverless_api',
          parameters: {
            protocols: ['http', 'https'],
            description: 'The service of Serverless Framework',
            environment: 'release',
            endpoints: [
              {
                path: '/',
                method: 'GET',
                serviceTimeout: 1000
              }
            ]
          }
        }
      }
    ]
  }
} */


// {
//   a:'a'
// }