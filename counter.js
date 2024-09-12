import { sum } from './git-module-demo/index'
import { subtract } from '@bossjobmatt/toolkit-utils'

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

console.log('sum', sum(1,2))
console.log('subtract', subtract(1,2))
