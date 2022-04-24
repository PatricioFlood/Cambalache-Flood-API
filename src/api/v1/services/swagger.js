const swaggerUi = require('swagger-ui-express')
const docs = require('../docs')

const uiOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Cambalache Challenge - DOCS'
}

exports.serve = swaggerUi.serve
exports.docs = swaggerUi.setup(docs, uiOptions)