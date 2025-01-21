import { consumeFromQueue } from '@/src/amqp/consumer.js';
// import { handleCreateRestaurantMessage } from './handlers/restaurantHandler';

export const startConsumers = async () => {
    // Lancer un consommateur pour une file
    await consumeFromQueue('restaurantQueue', (message: unknown) => console.log("reçu ", message));
    console.log('Consumers started');
};
