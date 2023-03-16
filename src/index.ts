import { MetricLength } from "./metrico"
import { ImperialLength } from "./imperial";
import { Adapter } from "./adapter";


//cliente trabaja en metrico y adapta pasa a imperial

const systemA = new MetricLength(281)
const sistemB = new ImperialLength(85.6488)

console.log(systemA.getMetros())

const adaptador = new Adapter(sistemB)

console.log(adaptador.getPies())


