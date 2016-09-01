
module.exports = function(app) {
  app.use('/weapons', require('./api/weapons'))
  app.use('/armor', require('./api/armor'))
}
