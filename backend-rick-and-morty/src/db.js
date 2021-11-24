require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')

const { DB_PG_USER, DB_PG_PASSWORD, DB_PG_HOST, DB_PG_PORT, DB_PG_DATABASE, DATABASE_URL } = process.env

const isProduction = process.env.NODE_ENV === 'production'
const connectionString = isProduction ? DATABASE_URL : `postgres://${DB_PG_USER}:${DB_PG_PASSWORD}@${DB_PG_HOST}:${DB_PG_PORT}/${DB_PG_DATABASE}`

const sequelize = new Sequelize(connectionString, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

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

const { Episode, Character } = sequelize.models

Episode.belongsToMany(Character, {through: 'characters_episodes'})
Character.belongsToMany(Episode, {through: 'characters_episodes'})

module.exports = {
  ...sequelize.models,
  conn: sequelize
}