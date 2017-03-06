module.exports = {
  secretKey: process.env.SECRET_KEY || 'DevelopmentSecretKey',
  port: process.env.PORT || 3001,
  db: process.env.PROD_MONGODB || 'mongodb://localhost/LetsVote'
};