import Fastify from 'fastify';

const PORT = 3000;
const app = Fastify({ logger: true });

app.get('/healthcheck', (request, reply) => {
    return { "message": 'server node is up and running' };
});

try {
    await app.listen({ port: PORT });
} catch (error) {
    app.log.error("Cant start node server with port 3000");
    process.exit(1);
}