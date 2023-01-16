const path = require("path");

const CSS_MODULE_LOCAL_IDENT_NAME = "[local]___[hash:base64:5]";

// This is really not necessary, i just want a base config to test storybook with a craco config
module.exports = {
    style: {
        modules: {
            localIdentName: CSS_MODULE_LOCAL_IDENT_NAME
        }
    },
    eslint: {
        mode: "file"
    },
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components")
        }
    }
};