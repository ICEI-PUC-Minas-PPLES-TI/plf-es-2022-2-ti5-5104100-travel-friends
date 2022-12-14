#!/usr/bin/env node
// const amqp = require("amqplib/callback_api");
const amqp = require("@cloudamqp/amqp-client");
// amqp.AMQPWebSocketClient

const fila = new amqp.AMQPClient('amqps://kcxhzzfu:st4kIkVZpGgzrTtRqjkzK3Ews-97uo8v@hawk.rmq.cloudamqp.com/kcxhzzfu');

async function run() {
  try {
const conn = await fila.connect()
    const ch = await conn.channel()
    const q = await ch.queue("messaging")
    const consumer = await q.subscribe({noAck: true}, async (msg) => {
      console.log(msg.bodyToString())
      await consumer.cancel()
    })
    await q.publish("Hello World", {deliveryMode: 2})
    await consumer.wait() // will block until consumer is canceled or throw an error if server closed channel/connection
    await conn.close()
  } catch (e) {
    console.error("ERROR", e)
    e.connection.close()
    setTimeout(run, 1000) // will try to reconnect in 1s
  }
};

run();

// amqp.connect('amqps://kcxhzzfu:st4kIkVZpGgzrTtRqjkzK3Ews-97uo8v@hawk.rmq.cloudamqp.com/kcxhzzfu', function(error0, connection) {
//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel((err, channel) => {
//         if (err) {
//           throw new Error(err);
//         }
//         var mainQueue = "calc_sum";
    
//         channel.assertQueue(
//           "",
//           { exclusive: true },
//           (err, queue) => {
//             if (err) {
//               throw new Error(err);
//             }
//             channel.bindQueue(queue.queue, mainQueue, "");
//             channel.consume(queue.que, (msg) => {
//               var result = JSON.stringify({
//                 result: Object.values(
//                   JSON.parse(msg.content.toString()).task
//                 ).reduce(
//                   (accumulator, currentValue) =>
//                     parseInt(accumulator) + parseInt(currentValue)
//                 ),
//               });
//               calcSocket.emit("calc", result);
//             });
//           },
//           { noAck: true }
//         );
//       });
//     setTimeout(function() {
//         connection.close();
//         process.exit(0);
//     }, 500);
// });