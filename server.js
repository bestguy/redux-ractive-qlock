const config = require('./webpack.config')
const express = require('express')
const webpack = require('webpack')
const webpackDMW = require('webpack-dev-middleware')
const webpackHMW = require('webpack-hot-middleware')

const app = new express()

const port = 3000 || process.env.port

const compiler = webpack(config)

app.use(express.static(`${__dirname}/public`))
app.use(webpackDMW(compiler, {publicPath: config.output.publicPath}))
app.use(webpackHMW(compiler))

app.listen(port, (err) => {
  if (err) console.error(err)

  console.log(`Listening on ${port}`)
})
