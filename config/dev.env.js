'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  
  baseUrl: '"https://api.neople.co.kr/"',
  imgUrl: '"https://img-api.neople.co.kr/"'
})
