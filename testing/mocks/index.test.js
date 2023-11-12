const { error } = require('./src/constants')
const File = require("./src/file")
const assert = require('assert')

//IFEE
;(async () => {
  
  //criando escopo para remover variaveis apos a execução
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/header-invalid.csv'
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/fiveItems-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/threeItems-valid.csv'
    const expected = [
      {
        id: 1,
        name: 'Ana',
        profession: 'developer',
        age: 28,
      },
      {
        id: 2,
        name: 'Maria',
        profession: 'manager',
        age: 34,
      },
      {
        id: 3,
        name: 'Jorge',
        profession: 'qa',
        age: 24,
      },
    ]
    const result = await File.csvToJSON(filePath)
    await assert.deepEqual(result, expected)
  }

})()