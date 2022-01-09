const path = require('path');

const openAPI = require('@openapi/openapi2typescript');

const gen = async () => {
  await openAPI.generateService({
    requestLibPath: "import request  from 'umi-request';",
    schemaPath: `${__dirname}/example-files/antd.json`,
    serversPath: './src',
    buildForSinglePackage: true
  });
};

gen();
