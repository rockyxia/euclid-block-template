module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        libraryName: "@ebg/euclid-ui",
        styleLibraryName: "theme-default"
      }
    ]
  ]
};
