"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _construct = require("babel-runtime/core-js/reflect/construct");

var _construct2 = _interopRequireDefault(_construct);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = (0, _construct2.default)(cls, (0, _from2.default)(arguments));
        (0, _setPrototypeOf2.default)(instance, (0, _getPrototypeOf2.default)(this));
        return instance;
    }

    ExtendableBuiltin.prototype = (0, _create2.default)(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (_setPrototypeOf2.default) {
        (0, _setPrototypeOf2.default)(ExtendableBuiltin, cls);
    } else {
        ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
}

class ModelError extends _extendableBuiltin(Error) {
    constructor(message = "", type = "", data = {}) {
        super();
        this.message = message;
        this.code = type;
        this.data = data;
    }
}

ModelError.INVALID_ATTRIBUTE = "INVALID_ATTRIBUTE";
ModelError.INVALID_ATTRIBUTES = "INVALID_ATTRIBUTES";
ModelError.ATTRIBUTE_NOT_FOUND = "ATTRIBUTE_NOT_FOUND";
ModelError.POPULATE_FAILED_NOT_OBJECT = "POPULATE_FAILED_NOT_OBJECT";

exports.default = ModelError;
//# sourceMappingURL=modelError.js.map
