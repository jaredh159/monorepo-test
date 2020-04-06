exports.handler = function (event, context, callback) {
  console.log(process.env);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(process.env, null, 2),
  });
};
