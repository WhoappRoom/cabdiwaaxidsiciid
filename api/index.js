const novax = require('novaxjs2');
const app = new novax();
app.serveStatic('public')
app.get('/', (req, res) => app.sendFile('./index.html', res));
app.at(3000, 'localhost', () => console.log('Server is running on port 3000'));