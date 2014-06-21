var components = {
    "packages": [
        {
            "name": "admin-js",
            "main": "admin-js-built.js"
        },
        {
            "name": "backbone",
            "main": "backbone-built.js"
        },
        {
            "name": "bootstrap3",
            "main": "bootstrap3-built.js"
        },
        {
            "name": "jquery",
            "main": "jquery-built.js"
        },
        {
            "name": "jquery-ui",
            "main": "jquery-ui-built.js"
        },
        {
            "name": "underscore",
            "main": "underscore-built.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore"
            ],
            "exports": "Backbone"
        },
        "bootstrap3": {
            "deps": [
                "jquery"
            ]
        },
        "jquery-ui": {
            "deps": [
                "jquery"
            ],
            "exports": "jQuery"
        },
        "underscore": {
            "exports": "_"
        }
    },
    "baseUrl": "components"
};
if (typeof require !== "undefined" && require.config) {
    require.config(components);
} else {
    var require = components;
}
if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = components;
}