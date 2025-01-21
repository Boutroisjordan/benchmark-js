import { getChannel } from '../../src/amqp/connection.js';
export const publishToQueue = async (queueName, message) => {
    const channel = getChannel();
    await channel.assertQueue(queueName, { durable: true });
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    console.log(`Message sent to queue ${queueName}:`, message);
};
