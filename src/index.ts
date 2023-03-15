type KnapsackItem = {
  weight: number;
  profit: number;
}

class KnapsackInstance {
  /**
   * atributos de clase
   */
  private items: KnapsackItem[];
  private capacity: number;

  /**
   * declarar que es un singleton
   */
  private static knapsackInstance: KnapsackInstance;

  /**
   * constructor privado
   */
  private constructor() {
    this.items = [];
    this.capacity = 0;
  }

  /**
   * getter de la clase
   * @returns unica instancia del objeto KnapsackInstance
   */
  public static getKnapsackInstance(): KnapsackInstance {
    if (!KnapsackInstance.knapsackInstance) {
      KnapsackInstance.knapsackInstance = new KnapsackInstance();
    }
    return KnapsackInstance.knapsackInstance;
  }

  /**
   * metodo para obtener la capacidad de la mochila
   * @returns capacidad de la calse
   */
  getCapacity() {
    return KnapsackInstance.knapsackInstance.capacity;
  }

  /**
   * metodo para definir la capacidad de la mochila
   * @param capacity 
   */
  setCapacity(capacity: number) {
    KnapsackInstance.knapsackInstance.capacity = capacity;
  }

  /**
   * metodo para obtener el array de cosas de la mochila
   * @returns 
   */
  getItems() {
    return KnapsackInstance.knapsackInstance.items;
  }

  /**
   * metood para definir los objetos de la mochila
   * @param items 
   */
  setItems(items: KnapsackItem[]) {
    KnapsackInstance.knapsackInstance.items = items;
  }
  /**
   * metodo para obtener el objeto index del array de la mochila
   * @param index 
   * @returns 
   */
  getItem(index: number) {
    if (index >= KnapsackInstance.knapsackInstance.getNumberOfItems()) {
      return undefined;
    }
    return KnapsackInstance.knapsackInstance.items[index];
  }
  /**
   * añadir un objeto a la mochila
   * @param item 
   */
  addItem(item: KnapsackItem) {
    KnapsackInstance.knapsackInstance.items.push(item);
  }
  /**
   * obtener la cantidad de objetos
   * @returns 
   */
  getNumberOfItems() {
    return KnapsackInstance.knapsackInstance.items.length;
  }
}

const knapsackInstance = KnapsackInstance.getKnapsackInstance();
knapsackInstance.addItem({weight: 10, profit: 30});
const secondKnapsackInstance = KnapsackInstance.getKnapsackInstance();
secondKnapsackInstance.addItem({weight: 20, profit: 20});
secondKnapsackInstance.setCapacity(3)

if (knapsackInstance === secondKnapsackInstance) {
  console.log('We are the same object');
} else {
  console.log('We are different objects');
}

KnapsackInstance.getKnapsackInstance().getItems().forEach((item) =>
  console.log(item));