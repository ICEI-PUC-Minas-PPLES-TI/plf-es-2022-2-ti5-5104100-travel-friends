#!/usr/bin/env node
var amqp = require("amqplib/callback_api");
module.exports = (callback) => {
  amqp.connect(
    "amqps://kcxhzzfu:st4kIkVZpGgzrTtRqjkzK3Ews-97uo8v@hawk.rmq.cloudamqp.com/kcxhzzfu",
    (error, conection) => {
      if (error) {
        throw new Error(error);
      }

      callback(conection);
    }
  );
};
