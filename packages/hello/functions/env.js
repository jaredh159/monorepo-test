exports.handler = function (event, context, callback) {
  console.log(process.env);
  console.log(event);
  console.log(context);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(
      {
        env: process.env,
        event,
        context,
      },
      null,
      2
    ),
  });
};
