/**
 * TIME COMPLEXITY: O(n).
 */

/**
 * FUNCTION que retorna os valores duplicados de um ARRAY de INTEGER -> ANOTHER APPROACH.
 * @param {number[]} arr
 * @returns {number[]}
 */
// const findDuplicateNumbers = (arr) => {
//   /**
//    * @type {number[]}
//    */
//   const duplicateNumbers = arr
//     /**
//      * Método sort() usado para ordenar os valores passados deixando, assim, os valores duplicados lado a lado.
//      * OBS: A maioria dos métodos de SORTING possuem complexidade de tempo = O(n log n).
//      */
//     .sort()
//     /**
//      * Método filter() usado para retornar os números em um novo ARRAY se o valor da iteração atual for igual ao da próxima e diferente da próxima + 1
//        (para casos onde o valor se repete mais de 2 vezes partindo do pressuposto que valores triplicados, quadriplicados... são, lógicamente,
//        duplicados em um estado anterior).
//      */
//     .filter(
//       (item, index, currentArr) =>
//         item === currentArr[index + 1] && item !== currentArr[index + 2]
//     );

//   if (!duplicateNumbers.length) {
//     return [];
//   }

//   return duplicateNumbers;
// };

/**
 * FUNCTION que retorna os valores duplicados de um ARRAY de INTEGER -> HASH MAP DATA STRUCTURE APPROACH.
 * OBS: Essa abordagem acaba sendo mais performática do que a acima devido ao fato que não preciso ordenar os itens do ARRAY antes de fazer as validações,
   assim, percorrendo este mesmo ARRAY apenas uma vez.
 * @param {number[]} arr
 * @returns {number[]}
 */
const findDuplicateNumbers = (arr) => {
  /**
   * @type {number[]}
   */
  const duplicateNumbers = [];

  /**
   * Armazenamento do tamanho do ARRAY para evitar fazer esse cálculo em todas iterações do FOR LOOP, assim, garantindo mais performance.
   * @type {number}
   */
  const len = arr.length;

  /**
   * @type {[key]: number}
   */
  const aux = {};

  for (let i = 0; i < len; i++) {
    /**
     * Se o valor da iteração atual não existir no OBJECT, o mesmo é criado e atribuído a contagem de 1 a ele. O FOR LOOP passa para a próxima iteração.
     */
    if (!aux[arr[i]]) {
      aux[arr[i]] = 1;

      continue;
    }

    /**
     * Contagem de quantas vezes o valor se repete.
     */
    aux[arr[i]] += 1;

    /**
     * Se a contagem for igual à 2, significa que o valor está duplicado e esse valor é inserido no ARRAY duplicateNumbers que é retornado no fim.
     */
    if (aux[arr[i]] === 2) {
      duplicateNumbers.push(arr[i]);

      continue;
    }
  }

  if (!duplicateNumbers.length) {
    return [];
  }

  return duplicateNumbers;
};

console.log(findDuplicateNumbers([4, 5, 44, 98, 4, 5, 6, 7]));

// console.log(findDuplicateNumbers([1, 1, 2, 3, 4, 5, 44, 44]));
// console.log(findDuplicateNumbers([1, 1, 1, 2, 3, 4, 5, 44, 44]));
// console.log(findDuplicateNumbers([44, 98, 4, 5, 6, 7]));
