export function HTTPError(message, statusCode) {
  return {
    message,
    statusCode,
  };
}

export function exceptionHandler(err, request, response, _) {
  if (err.statusCode) {
    return response.status(err.statusCode).send({
      message: err.message,
    });
  }

  console.error(err);

  return response.sendStatus(500);
}
