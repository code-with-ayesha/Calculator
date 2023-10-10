#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const node_banner_1 = __importDefault(require("node-banner"));
const function_js_1 = require("./function.js");
const gradient_string_1 = __importDefault(require("gradient-string"));
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient_string_1.default.rainbow("Enter your first number:"),
    },
    {
        name: "num2",
        type: "number",
        message: gradient_string_1.default.rainbow("Enter your second number:"),
    },
    {
        name: "operation",
        type: "list",
        message: gradient_string_1.default.rainbow("Enter your operation:"),
        choices: ["add", "sub", "mul", "div"],
    },
];
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want to calculate again"
    }
];
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, node_banner_1.default)('Calculator', 'This can perform addition, subtraction, multiplication and division', "red", "blue");
}))();
function calculator() {
    return __awaiter(this, void 0, void 0, function* () {
        let condition = true;
        while (condition) {
            let { num2, num1, operation } = yield inquirer_1.default.prompt(answers);
            if (operation === "add") {
                console.log("The sum of two numbers:", (0, function_js_1.sum)(num1, num2));
            }
            else if (operation === "sub") {
                console.log("The difference of two numbers:", (0, function_js_1.subtraction)(num1, num2));
            }
            else if (operation === "mul") {
                console.log("The mul of two numbers:", (0, function_js_1.multiplication)(num1, num2));
            }
            else if (operation === "div") {
                console.log("The div of two numbers:", (0, function_js_1.division)(num1, num2));
            }
            let { again } = yield inquirer_1.default.prompt(answer);
            condition = again;
        }
    });
}
setTimeout(() => {
    calculator();
}, 1000);
