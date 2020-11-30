/**
 * TIME COMPLEXITY: O(n)
 */

/**
 * FUNCTION que retorna o número de possibilidades diferentes de arranjos por meio de recursão.
 * @param {number} value
 * @returns {number}
 */

const getPossibilities = (value) => {
  /**
   * Caso o valor seja igual ou menor que 1 (no cálculo fatorial n!, o fatorial de 0 é considerado 1 devido a lógica de 0*(-1!)) a recursão para e retorna
     1.
   */
  if (value <= 1) {
    return 1;
  }

  /**
   * Como se trata de um cálculo fatorial, o valor atual multiplica o próximo valor inteiro menor que ele (EX: 5! === 5*4*3*2*1) 
     e assim segue até 1 gerando o valor final da operação.
   */
  return value * getPossibilities(value - 1);
};

console.log(getPossibilities(6));

// console.log(getPossibilities(5));
// console.log(getPossibilities(1));
// console.log(getPossibilities(0));
