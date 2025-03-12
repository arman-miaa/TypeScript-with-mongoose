"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ekhono eta use kora hoi ni pore eta use korbo
/**
 * ---------------------- async handler -----------------------
 *
 * @param fn controller function that need to resolve async requests
 * @returns return a promise
 */
const asyncHanlder = (fn) => {
    return (req, res, next) => Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
exports.default = asyncHanlder;
