/**
 *  CLASE para tratar con datos de tipo imperial
 * la cual almacena sus datos en pies
 */
export class ImperialLength {
  /**
   * constructor de la clase
   * @param numero numero en pies
   */
  constructor(private numero: number = 0) {}
  /**
   * setter de pies
   * @param numerito numero que se está en pies
   */
  setPies(numerito: number){
    this.numero = numerito
  }
  /**
   * getter de pies
   * @returns pies
   */
  getPies() {
    return this.numero
  }
  /**
   * 
   * @param numerito 
   */
  setPulgadas(numerito: number) {
    this.numero = numerito * 12
  }
  /**
   * getter de pulgadas
   * @returns 
   */
  getPulgadas() {
    return this.numero / 12
  }
  /**
   * setter de yardas
   * @param numerito 
   */
  setYardas(numerito: number) {
    this.numero = numerito * 3
  }
  /**
   * getter de yardas
   * @returns 
   */
  getYardas() {
    return this.numero / 3
  }
  /**
   * setter de millas
   * @param numerito 
   */
  setMillas(numerito: number) {
    this.numero = numerito * 5280
  }
  /**
   * getter de millas
   * @returns 
   */
  getMillas() {
    return this.numero / 5280
  }
}