import { NextFunction, Request, RequestHandler, Response } from "express";

// ekhono eta use kora hoi ni pore eta use korbo


/**
 * ---------------------- async handler -----------------------
 *
 * @param fn controller function that need to resolve async requests
 * @returns return a promise
 */
const asyncHanlder = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

export default asyncHanlder;
