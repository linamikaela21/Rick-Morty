const config = {
  //Siempre en deploy tiene que ir con false ! 
  //Sino puedo poner TRUE borrar la BD y volver a subirlo con false si necesito borrar toda la BD
  force: false,
  // development: {
  //   username: 'root',
  //   password: null,
  //   database: 'database_dev',
  //   host: '127.0.0.1',
  //   dialect: 'postgres'
  // },
  // production: {
  //   username: 'root',
  //   password: null,
  //   database: 'database',
  //   host: '127.0.0.1',
  //   dialect: 'postgres'
  // }
}


module.exports = config