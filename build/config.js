'use strict'

const SRC = 'src'
const DEST = 'dist'
const PROJECT_NAME = 'andrew_test'
const TESTS_SRC = 'test'

const config = {
  SRC: SRC,
  dest: DEST,
  projectName: PROJECT_NAME,
  js: {
    src: [
      SRC + '/**/*.js'
    ]
  },
  jade: {
    src: [
      SRC + '/**/*.jade'
    ]
  },
  stylus: {
    src: [
      SRC + '/**/*.styl'
    ]
  },
  tests: {
    src: [TESTS_SRC]
  }
}

module.exports = config
