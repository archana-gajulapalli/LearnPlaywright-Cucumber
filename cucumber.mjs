
  // cucumber.mjs
export default {
  default: {
    require: [
      'features/support/hooks.js',
      'features/step_definitions/*.js'
    ],
    format: ['json:reports/cucumber_report.json'],
    // Other configurations...
  }
};
