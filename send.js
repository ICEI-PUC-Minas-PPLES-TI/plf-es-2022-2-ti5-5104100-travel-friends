#!/usr/bin/env node
const amqp = require("amqplib/callback_api");

amqp.connect('amqps://kcxhzzfu:st4kIkVZpGgzrTtRqjkzK3Ews-97uo8v@hawk.rmq.cloudamqp.com/kcxhzzfu', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel((err, channel) => {
        if (err) {
          throw new Error(err);
        }
        var mainQueue = "calc_sum";
    
        channel.assertQueue(
          "",
          { exclusive: true },
          (err, queue) => {
            if (err) {
              throw new Error(err);
            }
            channel.bindQueue(queue.queue, mainQueue, "");
            channel.consume(queue.que, (msg) => {
              var result = JSON.stringify({
                result: Object.values(
                  JSON.parse(msg.content.toString()).task
                ).reduce(
                  (accumulator, currentValue) =>
                    parseInt(accumulator) + parseInt(currentValue)
                ),
              });
              calcSocket.emit("calc", result);
            });
          },
          { noAck: true }
        );
      });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});