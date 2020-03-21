exports.config = {
  allScriptsTimeout: 11000,
  specs: [
      './src/features/**/*.feature'
  ],
  capabilities: {
      browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  seleniumAddress: 'http://localhost:4444/wd/hub',
  cucumberOpts: {
      require: './src/step_definitions/**/*.steps.ts',

      tags: [],
      strict: true,
      dryRun: false,
      compiler: 'ts:ts-node/register',
      format: [
          'node_modules/cucumber-pretty'
      ],
  },

  onPrepare() {
      require('ts-node').register({
          project: require('path').join(__dirname, './tsconfig.e2e-cucumber.json')
      });
  }
};
