import "mocha";
import { expect } from "chai";
import { ImperialLength } from "../src/index";
import { MetricLength } from "../src/index";
import { Adapter } from "../src/index";

let variable = new ImperialLength(10)

describe("index imperial test", () => {
  it("setpies", () => {
    variable.setPies(20)
  });
  it("getpies", () => {
    expect(variable.getPies()).to.be.equal(20);
  });
  it("getpies mal", () => {
    expect(variable.getPies()).to.not.be.equal(10);
  });
  it("setmillas", () => {
    variable.setMillas(20)
  });
  it("getmillas bien", () => {
    expect(variable.getMillas()).to.be.equal(20);
  });
  it("getmillas mal", () => {
    expect(variable.getMillas()).to.not.be.equal(10);
  });
  it("setyardas", () => {
    variable.setYardas(20)
  });
  it("getyardas bien", () => {
    expect(variable.getYardas()).to.be.equal(20);
  });
  it("getyardas mal", () => {
    expect(variable.getYardas()).to.not.be.equal(10);
  });
  it("setpulgadas", () => {
    variable.setPulgadas(20)
  });
  it("getpulgadas bien", () => {
    expect(variable.getPulgadas()).to.be.equal(20);
  });
  it("getpulgadas mal", () => {
    expect(variable.getPulgadas()).to.not.be.equal(10);
  });

});


let metrico = new MetricLength(10)

describe("index metrica test", () => {
  it("setmetros", () => {
    metrico.setMetros(20)
  });
  it("setmetros", () => {
    expect(metrico.getMetros()).to.be.equal(20)
  });
  it("setmetros", () => {
    metrico.setKilometros(20)
  });
  it("setmetros", () => {
    expect(metrico.getKilometros()).to.be.equal(20)
  });
  it("setmetros", () => {
    metrico.setCentimetros(20)
  });
  it("setmetros", () => {
    expect(metrico.getCentimetros()).to.be.equal(20)
  });
});

const systemA = new MetricLength(281)
const sistemB = new ImperialLength(85.6488)

const adaptador = new Adapter(sistemB)

describe("index adaptador test", () => {
  it("sistema metrico ", () => {
    expect(systemA.getMetros()).to.be.equal(281)
  });
  it("sistema metrico ", () => {
    systemA.setMetros(32)
  });
  it("sistema metrico ", () => {
    expect(adaptador.getPies()).to.be.equal(281.0137128)
  });
});