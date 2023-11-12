class Fibonacci {
  * execute(input, current = 0, next = 1) {
    //condição de parada
    if (input === 0) {
      return
    }

    //retona o valor
    yield current

    //delega a função mas não retorna o valor
    yield * this.execute(input-1, next, current + next)
  }
}

module.exports = Fibonacci