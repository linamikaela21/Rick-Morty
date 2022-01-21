require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')

// const { DB_PG_USER, DB_PG_PASSWORD, DB_PG_HOST, PORT, DB_PG_DATABASE, DATABASE_URL } = process.env

// const isProduction = process.env.NODE_ENV === 'production'
// const connectionString = isProduction ? DATABASE_URL : `postgres://${DB_PG_USER}:${DB_PG_PASSWORD}@${DB_PG_HOST}:${PORT}/${DB_PG_DATABASE}`

// const sequelize = new Sequelize(connectionString, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// })

const { DB_PG_USER, 
  DB_PG_PASSWORD, 
  DB_PG_HOST, 
  DB_PG_DIALECT, 
  DB_PG_DATABASE, 
  NODE_ENV } = process.env

const sequelize =
  NODE_ENV === "production"
    ? new Sequelize({
        database: DB_PG_DATABASE,
        dialect: DB_PG_DIALECT,
        host: DB_PG_HOST,
        port: 5432,
        username: DB_PG_USER,
        password: DB_PG_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `${DB_PG_DIALECT}://${DB_PG_USER}:${DB_PG_PASSWORD}@${DB_PG_HOST}/${DB_PG_DATABASE}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );

const basename = path.basename(__filename)

const modelDefiners = []

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize))
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

const { Episode, Character, Location } = sequelize.models

Episode.belongsToMany(Character, {through: 'character_episode'})
Character.belongsToMany(Episode, {through: 'character_episode'})

Character.hasOne(Location, {through: 'character_location'})
Location.belongsToMany(Character, {through: 'character_location'})

module.exports = {
  ...sequelize.models,
  conn: sequelize
}