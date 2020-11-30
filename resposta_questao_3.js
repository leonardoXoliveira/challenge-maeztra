/**
 * TIME COMPLEXITY: O(n)
 */

/**
 * FUNCTION que retorna se a sequência de STRING passada é válida ou não -> HASH MAP DATA STRUCTURE APPROACH.
 * @param {string} sequence
 * @returns {string}
 */

const isValidString = (sequence) => {
  /**
   * Se a sequência informada tiver tamanho 1 ou abaixo, retorna "Dados incorretos" devido ao fato que não tem como ter um padrão dessa forma.
   */
  if (sequence.length <= 1) {
    return "Dados incorretos";
  }

  /**
   * @type {string[]}
   */
  let aux = [];

  /**
   * Armazenamento do tamanho da STRING para evitar fazer esse cálculo em todas iterações do FOR LOOP, assim, garantindo mais performance.
   * @type {number}
   */
  const len = sequence.length;

  /**
   * A solução está totalmente atrelhada a este objeto que serve de base para a validação se um carectere de fechamento é correspondente ao seu correto caractere
     de abertura.
   * @type {{")": string, "}": string, "]": string}}
   */
  const mappingObj = { ")": "(", "}": "{", "]": "[" };

  /**
   * @type {{"(": string, "{": string, "[": string}}
   */
  const mappingObjReturn = { "(": "parêntese", "{": "chave", "[": "colchete" };

  for (let i = 0; i < len; i++) {
    /**
     * Se o valor da iteração atual da sequência existir no OBJECT de fechamentos, remove o último elemento do ARRAY aux (ou primeiro da STACK(pilha)) e armazena este 
       elemento na variável lastElement.
     */
    if (mappingObj[sequence[i]]) {
      let lastElement = aux.pop();

      /**
       * Se o valor do OBJECT correspondente a iteração atual for diferente do último elemento do array, retorna que não é uma sequência válida.
       */
      if (mappingObj[sequence[i]] !== lastElement) {
        return `Não é uma sequência válida (Há um(a) ${mappingObjReturn[lastElement]} posicionado(a) incorretamente)`;
      }

      continue;
    }

    /**
     * Em caso negativo da validação acima, o valor da iteração atual da sequência é adicionado no topo do ARRAY aux.
     */
    aux.push(sequence[i]);
  }

  /**
   * Caso a váriavel aux possua algum elemento, se deve ao fato que tem algum caractere de abertura no final da seqûencia e, assim, é retornado que 
     não é uma sequência válida.
   */
  if (aux.length) {
    return `Não é uma sequência válida (Há um(a) ${
      mappingObjReturn[sequence[len - 1]]
    } posicionado(a) incorretamente)`;
  }

  return "É uma sequênica válida";
};

console.log(isValidString("{[()(){}[]]{}}"));
console.log(isValidString("{[(()]"));
console.log(isValidString("{}[]()"));
console.log(isValidString("((){}[[])"));

// console.log(isValidString("{}[](){"));
