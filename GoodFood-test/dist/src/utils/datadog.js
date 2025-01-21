import tracer from "dd-trace";
tracer.init({
    hostname: 'datadog-agent',
    env: 'production',
    service: 'node-app',
    logInjection: true,
    port: 8126
});
tracer.use('express', {
    service: 'node-api'
});
