const { createSandbox } = require('sinon');
const Fibonacci = require('./fibonacci');
const sinon = createSandbox()
const assert = require('assert');


;(async() => {

  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(
      fibonacci,
      fibonacci.execute.name
    )

    // for (const sequencia of fibonacci.execute(5)) { }
    const results = [...fibonacci.execute(5)]
    
    //Testando quantidade de vezes a funcao recursiva foi chamada, evitando loop infinito
    const expectedCallCount = 6
    assert.strictEqual(spy.callCount, expectedCallCount)

    //Testando parametros da função - se foi chamada corretamente
    const { args } = spy.getCall(2)
    const expectedParams = [3, 1, 2]
    assert.deepStrictEqual(args, expectedParams, 'Parametros inválidos')

    //Testando o retorno da funcão
    const expectedResults = [0, 1, 1, 2, 3]
    assert.deepStrictEqual(results, expectedResults, 'Resultados inválidos')

  }

})()