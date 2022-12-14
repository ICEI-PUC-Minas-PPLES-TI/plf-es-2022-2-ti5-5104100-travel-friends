import { useCallback } from 'react';
import { getAllRoadmap } from '../../services/api/Requests/roadmap';
import { CardBox, FallbackWrapper, Navigation } from '../../components';
import { usePromise } from '../../hooks';
import { Container } from 'react-bootstrap';
import React from 'react';
import { connect } from 'amqplib';
import { AMQPClient } from '@cloudamqp/amqp-client';

const Home = () => {
  // const queue = connect('amqps://kcxhzzfu:st4kIkVZpGgzrTtRqjkzK3Ews-97uo8v@hawk.rmq.cloudamqp.com/kcxhzzfu');

  async function run() {
    try {
      const amqp = new AMQPClient("amqps://kcxhzzfu:st4kIkVZpGgzrTtRqjkzK3Ews-97uo8v@hawk.rmq.cloudamqp.com/kcxhzzfu")
      const conn = await amqp.connect()
      const ch = await conn.channel()
      const q = await ch.queue()
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
  }

  const getRoadMaps = useCallback(async () => {
    return getAllRoadmap();
  }, []);

  const { data, ...promiseStatus } = usePromise(getRoadMaps);

  const renderContent = () => {
    return (
      <Navigation>
        <Container className='p-5'onLoad={() => run()}>
        <CardBox data={data} />
        </Container>
      </Navigation>
    );
  };

  return (
    <FallbackWrapper
      renderContent={renderContent}
      {...promiseStatus}
    />
  );
}

export default Home;
