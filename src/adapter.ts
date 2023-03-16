import { ImperialLength } from "./imperial";
import { MetricLength } from "./metrico";
/**
 * clase adaptadora entre la clase metric y la clase imperial
 */
export class Adapter extends MetricLength{
  /**
   * constructor de la clase
   * @param service 
   */
  constructor(private service: ImperialLength){
    super();
  }
  /**
   * seter de pies
   * @param numerito 
   */
  setPies(numerito: number){
    let variable = numerito / 3.281
    this.service.setPies(numerito / 3.281)
  }
  /**
   * getter de pies
   * @returns 
   */
  getPies() {
    return this.service.getPies() * 3.281
  }

  /**
   * seter de pulgadas
   * @param numerito 
   */
  setPulgadas(numerito: number) {
    this.service.setPulgadas(numerito / 39.37    )
  }
  /**
   * getter de pulgadas
   * @returns 
   */
  getPulgadas() {
    return this.service.getPulgadas() * 39.37
  }

  /**
   * seter de yardas
   * @param numerito 
   */
  setYardas(numerito: number) {
    this.service.setYardas(numerito / 1.094)
  }
  /**
   * getter de yardas
   * @returns 
   */
  getYardas() {
    return this.service.getYardas() * 1.094
  }
  /**
   * setter de millas
   * @param numerito 
   */
  setMillas(numerito: number) {
    this.service.setMillas(numerito * 1609      )
  }
  /**
   * getter de millas
   * @returns 
   */
  getMillas() {
    return this.service.getMillas() * 1609
  }

}
