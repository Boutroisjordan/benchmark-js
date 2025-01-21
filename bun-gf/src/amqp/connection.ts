import {connect, type Connection, type Channel} from 'amqplib';

let connection: Connection;
let channel: Channel;

export const connectRabbitMQ = async () => {
    try {
    connection = await connect(process.env.RABBITMQ_URL ?? "none");
    channel = await connection.createChannel();
    console.log('RabbitMQ connected');
    return { connection, channel };
    } catch(e: any) {
        throw Error("Cannot connect to RabbitMQ: ", e)
    }
};

export const getChannel = () => {
    if (!channel) {
        throw new Error('RabbitMQ channel not initialized');
    }
    return channel;
};
