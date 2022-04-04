"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styled = void 0;
const react_1 = require("@stitches/react");
exports.styled = (0, react_1.createStitches)({
    utils: {
        // Abbreviated margin properties
        m: (value) => ({
            margin: value,
        }),
        mt: (value) => ({
            marginTop: value,
        }),
        mr: (value) => ({
            marginRight: value,
        }),
        mb: (value) => ({
            marginBottom: value,
        }),
        ml: (value) => ({
            marginLeft: value,
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value,
        }),
        p: (value) => ({
            padding: value,
        }),
        pt: (value) => ({
            paddingTop: value,
        }),
        pr: (value) => ({
            paddingRight: value,
        }),
        pb: (value) => ({
            paddingBottom: value,
        }),
        pl: (value) => ({
            paddingLeft: value,
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        // A property for applying width/height together
        size: (value) => ({
            width: value,
            height: value,
        }),
        // A property to apply linear gradient
        linearGradient: (value) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),
        // An abbreviated property for border-radius
        br: (value) => ({
            borderRadius: value,
        }),
    },
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    theme: {
        colors: {
            black: 'rgba(19, 19, 21, 1)',
            white: 'rgba(255, 255, 255, 1)',
            gray: 'rgba(128, 128, 128, 1)',
            blue: 'rgba(3, 136, 252, 1)',
            red: 'rgba(249, 16, 74, 1)',
            yellow: 'rgba(255, 221, 0, 1)',
            pink: 'rgba(232, 141, 163, 1)',
            turq: 'rgba(0, 245, 196, 1)',
            orange: 'rgba(255, 135, 31, 1)',
        },
        fonts: {
            sans: 'Inter, sans-serif',
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '16px',
            4: '20px',
            5: '24px',
            6: '32px',
        },
        space: {
            1: '4px',
            2: '8px',
            3: '16px',
            4: '32px',
            5: '64px',
            6: '128px',
        },
        sizes: {
            1: '4px',
            2: '8px',
            3: '16px',
            4: '32px',
            5: '64px',
            6: '128px',
        },
        radii: {
            1: '2px',
            2: '4px',
            3: '8px',
            round: '9999px',
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    },
}).styled;
