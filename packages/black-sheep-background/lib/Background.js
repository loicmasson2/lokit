"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/jsx-props-no-spreading */
const react_1 = __importDefault(require("react"));
const BackgroundPrimaryLight_png_1 = __importDefault(require("../public/BackgroundPrimaryLight.png"));
const BackgroundSecondaryLight_png_1 = __importDefault(require("../public/BackgroundSecondaryLight.png"));
const Box_1 = require("./Box");
const backgroundMapping = {
    primary: BackgroundPrimaryLight_png_1.default,
    secondary: BackgroundSecondaryLight_png_1.default,
};
const Background = ({ id, children, variant = "primary" }) => (react_1.default.createElement(Box_1.Box, { css: {
        '@bp1': {
            px: 0
        },
        '@bp2': {
            px: 6
        },
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${backgroundMapping[variant]})`,
        backgroundSize: '100% 40%',
        backgroundPosition: '0 bottom',
        borderRadius: 8,
        width: 600,
        height: 400
    } }, children));
exports.default = Background;
