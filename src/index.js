const app = require('./app');
const Loaders = require('./service/index');



Loaders.start();

app.listen(3000,() => console.log('Servidor On'));