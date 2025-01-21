import { consumeFromQueue } from '../../src/amqp/consumer.js';
export const startConsumers = async () => {
    await consumeFromQueue('restaurantQueue', (message) => console.log("reçu ", message));
    console.log('Consumers started');
};
