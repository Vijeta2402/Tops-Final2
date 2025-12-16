const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// ✅ API routes
server.use('/api', router);

// ✅ React build serve
server.use(
  jsonServer.defaults({
    static: path.join(__dirname, '../Frontend/build')
  })
);

// ✅ React routing fix
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
