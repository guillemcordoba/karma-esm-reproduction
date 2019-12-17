/* eslint-disable import/no-extraneous-dependencies */
const cjsTransformer = require("es-dev-commonjs-transformer");
const { createDefaultConfig } = require("@open-wc/testing-karma");
const deepmerge = require("deepmerge");

module.exports = config => {
  const defaultConfig = createDefaultConfig(config);
  config.set(
    deepmerge(defaultConfig, {
      // see the karma-esm docs for all options
      esm: {
        babel: true,
        nodeResolve: true,
        fileExtensions: [".ts"],
        responseTransformers: [
          cjsTransformer([
            ...defaultConfig.esm.babelModernExclude,
            "**/node_modules/@open-wc/**/*",
            "**/node_modules/chai-dom/**/*",
            "**/node_modules/sinon-chai/**/*",
            "**/node_modules/graphql/**/*"
          ])
        ]
      },

      logLevel: config.LOG_DEBUG,

      files: [
        {
          pattern: config.grep ? config.grep : "./test/**/*.test.ts",
          type: "module"
        },
        {
          pattern: config.grep ? config.grep : "**/node_modules/graphql/**/*.mjs",
          type: "module"
        }
      ]
    })
  );

  return config;
};
