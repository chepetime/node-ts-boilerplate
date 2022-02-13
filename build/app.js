"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("@/utils/math");
function loadEnv() {
    const EXAMPLE_KEY = `${process.env.EXAMPLE_KEY}`;
    console.log({ EXAMPLE_KEY });
}
function start() {
    console.log('Hi', (0, math_1.sum)(1, 19));
    loadEnv();
}
exports.default = start;
