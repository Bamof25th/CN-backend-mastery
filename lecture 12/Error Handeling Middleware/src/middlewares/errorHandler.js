// Please don't change the pre-written code

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
    this.errMessage = errMessage;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  // Write your code here
  if (err instanceof customErrorHandler) {
    res.status(err.statusCode).send(err.errMessage)
  }
  res.status(500).send('Oops! Something went wrong... Please try again later!')
};

