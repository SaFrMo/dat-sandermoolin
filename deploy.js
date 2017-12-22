const deploy = require('fh-deploy')
const path = require('path')
const settings = require('./.deployrc.js').default

deploy(settings)
