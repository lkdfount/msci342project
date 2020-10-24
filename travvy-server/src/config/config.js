
module.exports = {
  port: 3306,
  db: {
    database: process.env.DB_NAME || 'MSCI342_Travvy',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'MSCI342travvy',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'msci342-travvy.casvre0ezula.us-east-1.rds.amazonaws.com'
    }
  }
}