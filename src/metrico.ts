/**
 * clase sistema metrico longitud
 */
export class MetricLength{
  /**
   * constructor de la clase
   * @param numero 
   */
  constructor(private numero: number = 0){}
  /**
   * set de metros
   * @param numerito 
   */
  setMetros(numerito: number){
    this.numero = numerito
  }
  /**
   * get de metros
   * @returns 
   */
  getMetros(){
    return this.numero
  }
  /**
   * set de kilometros
   * @param numerito 
   */
  setKilometros(numerito: number){
    this.numero = numerito * 1000
  }
  /**
   * get d ekilometros
   */
  getKilometros(){
    return this.numero / 1000
  }
  /**
   * setter de centimetros
   * @param numerito 
   */
  setCentimetros(numerito: number){
    this.numero = numerito / 100
  }
  /**
   * gette de centimetros
   * @returns 
   */
  getCentimetros(){
    return this.numero * 100
  }
}