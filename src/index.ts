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
  getPulgadas() {
    return this.numero / 12
  }

  setYardas(numerito: number) {
    this.numero = numerito * 3
  }
  getYardas() {
    return this.numero / 3
  }

  setMillas(numerito: number) {
    this.numero = numerito * 5280
  }
  getMillas() {
    return this.numero / 5280
  }
}

export class MetricLength{
  constructor(private numero: number = 0){}
  setMetros(numerito: number){
    this.numero = numerito
  }
  getMetros(){
    return this.numero
  }

  setKilometros(numerito: number){
    this.numero = numerito * 1000
  }
  getKilometros(){
    return this.numero / 1000
  }

  setCentimetros(numerito: number){
    this.numero = numerito / 100
  }
  getCentimetros(){
    return this.numero * 100
  }
}
//cliente trabaja en metrico y adapta pasa a imperial
export class Adapter extends MetricLength{
  constructor(private service: ImperialLength){
    super();
  }
  getDatos(){
    return this.service.getPies() / 3.281
  }
  setPies(numerito: number){
    let variable = numerito / 3.281
    this.service.setPies(numerito / 3.281)
  }

  getPies() {
    return this.service.getPies() * 3.281
  }

  setPulgadas(numerito: number) {
    this.service.setPulgadas(numerito / 39.37    )
  }
  getPulgadas() {
    return this.service.getPulgadas() * 39.37
  }

  setYardas(numerito: number) {
    this.service.setYardas(numerito / 1.094)
  }
  getYardas() {
    return this.service.getYardas() * 1.094
  }

  setMillas(numerito: number) {
    this.service.setMillas(numerito * 1609      )
  }
  getMillas() {
    return this.service.getMillas() * 1609
  }

}

const systemA = new MetricLength(281)
const sistemB = new ImperialLength(85.6488)

console.log(systemA.getMetros())

const adaptador = new Adapter(sistemB)

console.log(adaptador.getPies())


