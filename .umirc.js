
export default {
  hash: true,
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  plugins: [
    [
      'umi-plugin-react', {
        antd: true,
      }
    ]
  ],
  targets: {
    ie: 11,
  },
  extraBabelPlugins: [
    ["import", {
      "libraryName": "gantd",
      "libraryDirectory": "lib",
      "style": "css"
    }],
    ["prismjs", {
      "languages": ["javascript", "css", "markup", "tsx", "json", "bash"],
      "plugins": ["line-numbers"],
      "theme": "okaidia",
      "css": true
    }]
  ],
  "theme": {
    "primary-color": "#27278a",
  },
  outputPath: 'docs'
}
