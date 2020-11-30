/**
 * TIME COMPLEXITY: O(n).
 */

/**
 * FUNCTION que verifica se um certo INTEGER positivo está ordenado ou não.
 * @param {number} value
 * @returns {string}
 */
const isOrdered = (value) => {
  if (!isPositiveInteger(value)) {
    return "O valor passado contém apenas um dígito ou não é um INTEIRO positivo";
  }

  /**
   * @type {number}
   */
  let currentDigit = 0;

  /**
   * @type {number}
   */
  let newValue = value;

  /**
   * OBS: Nesse caso, poderia ter sido usado métodos do JAVASCRIPT como toString().split("").map(Number) para transformar o valor em um ARRAY de 
     NUMBER e percorrer esse ARRAY por meio de um FOR LOOP. Em seguida, fazer as validações usando arr[i] em vez de executar cálculos para isolar os 
     dígitos. Optei por essa forma pois tanto o SPLIT como o MAP fazem diversas iterações e usando o WHILE LOOP com os cálculos, as iterações são limitadas 
     ao tamanho do valor passado, assim, garantindo mais performance.
   */
  while (newValue > 10) {
    /**
     * Último dígito do valor atual (EX: 12345 -> 5; 1234 -> 4).
     */
    currentDigit = newValue % 10;

    /**
     * Atualização do valor (EX: 12345 -> 1234; 1234 -> 123) até que seja menor que 10 e pare o WHILE LOOP.
     */
    newValue = parseInt(newValue / 10);

    /**
     * Se o último dígito do valor atual for igual ao último dígito do próximo valor, então, é passado para a próxima iteração.
     */
    if (currentDigit === newValue % 10) {
      continue;
    }

    /**
     * Se o último dígito do valor atual for igual ao ultimo dígito do segundo próximo valor, então, é retornado "Não está ordenado".
     * Essa é uma verificação necessária quando há uma crescente e uma decrescente no mesmo valor (EX: 123[4]5[4]321).
     */
    if (currentDigit === parseInt((newValue % 100) / 10)) {
      return "Não está ordenado";
    }

    /**
     * Se o último dígito do valor atual menos o último dígito do próximo for diferente de 1 e -1, então, é retornado "Não está ordenado".
     * Quando essa condição é atendida mostra que o intervalo é maior que 1 e, consequentemente, não é uma ordenação sequencial.
     */
    if (
      currentDigit - (newValue % 10) !== 1 &&
      currentDigit - (newValue % 10) !== -1
    ) {
      return "Não está ordenado";
    }
  }

  return "Está ordenado";
};

/**
 * FUNCTION que verifica se o valor passado contém mais do que um dígito (considero que uma ordenação sequencial só existe se tiver mais do que um dígito,
   consequentemente, um dígito apenas não pode ser considerado "Ordenado" e nem "Não ordenado") e se é um INTEGER positivo.
 * @param {number} value
 * @returns {boolean}
 */
const isPositiveInteger = (value) => {
  if (value >= 10 && Number.isInteger(value)) {
    return true;
  }
};

console.log(isOrdered(12345678));
console.log(isOrdered(1223455678));
console.log(isOrdered(876543210));
console.log(isOrdered(152456457));
console.log(isOrdered(12356789));
console.log(isOrdered(13579));
console.log(isOrdered(9765421));
console.log(isOrdered(123454321));
console.log(isOrdered(12222222));
console.log(isOrdered(2111111));
console.log(isOrdered(1599));

// console.log(isOrdered(1));
// console.log(isOrdered(10));
// console.log(isOrdered(11));
// console.log(isOrdered(12));
