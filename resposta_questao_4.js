/**
 * TIME COMPLEXITY: O(n)
 */

/**
 * FUNCTION que retorna, dado uma certa matriz contendo ano de ínicio (X) de trabalho e aposentadoria (Y), o(s) ano(s) onde teve o maior número de trabalhadores.
 * @param {number[][]} arr
 * @returns {string}
 */
const yearsOfMoreWork = (arr) => {
  /**
   * Armazenamento do tamanho do ARRAY para evitar fazer esse cálculo em todas iterações do FOR LOOP, assim, garantindo mais performance.
   * @type {number}
   */
  const len = arr.length;

  /**
   * @type {{lowestStartYear: number, biggestStartYear: number, lowestEndYear: number, biggestEndYear: number}}
   */
  const yearsObj = {
    lowestStartYear: 0,
    biggestStartYear: 0,
    lowestEndYear: 0,
    biggestEndYear: 0,
  };

  for (let i = 0; i < len; i++) {
    /**
     * Armazenamento do tamanho do ARRAY para evitar fazer esse cálculo em todas iterações do FOR LOOP, assim, garantindo mais performance.
     * @type {number}
     */
    const len2 = arr[i].length;

    for (let j = 0; j < len2; j++) {
      /**
       * Se X, Y for igual a zero ou X >= Y, retorna "Dados incorretos".
       */
      if (arr[i][j] <= 0 || arr[i][j] >= arr[i][j + 1]) {
        return "Dados incorretos";
      }

      /**
       * Validações para armazenar o menor e maior valor referente ao ano de início de trabalho (X).
       */
      if (j === 0) {
        if (arr[i][j] > yearsObj.biggestStartYear) {
          yearsObj.biggestStartYear = arr[i][j];
        }

        if (yearsObj.lowestStartYear === 0) {
          yearsObj.lowestStartYear = arr[i][j];

          continue;
        }

        if (arr[i][j] < yearsObj.lowestStartYear) {
          yearsObj.lowestStartYear = arr[i][j];
        }

        continue;
      }

      /**
       * Validações para armazenar o menor e maior valor referente ao ano de término de trabalho (Y).
       */
      if (arr[i][j] > yearsObj.biggestEndYear) {
        yearsObj.biggestEndYear = arr[i][j];
      }

      if (yearsObj.lowestEndYear === 0) {
        yearsObj.lowestEndYear = arr[i][j];

        continue;
      }

      if (arr[i][j] < yearsObj.lowestEndYear) {
        yearsObj.lowestEndYear = arr[i][j];
      }
    }
  }

  /**
   * Se o maior ano de início de trabalho for maior que o menor ano de término de trabalho, significa que não houve nenhuma intersecção entre os anos, concluindo 
     assim que, em todos esses anos houve apenas 1 trabalhador (em cada período) e todos os anos informados representam os anos que tiveram mais trabalhadores.
   */
  if (yearsObj.biggestStartYear > yearsObj.lowestEndYear) {
    return `O(s) ano(s) que mais teve trabalhadores foi de ${yearsObj.lowestStartYear} até, incluindo, ${yearsObj.biggestStartYear}`;
  }

  /**
   * Caso a validação acima seja negativa, houve intersecção e o maior ano de início até o menor ano de término, representam os anos que tiveram mais trabalhadores.
   */
  return `O(s) ano(s) que mais teve trabalhadores foi de ${yearsObj.biggestStartYear} até, incluindo, ${yearsObj.lowestEndYear}`;
};

console.log(
  yearsOfMoreWork([
    [1960, 2005],
    [1945, 2008],
    [1938, 1999],
  ])
);

// console.log(
//   yearsOfMoreWork([
//     [1960, 1965],
//     [1966, 1970],
//     [1971, 1975],
//   ])
// );
