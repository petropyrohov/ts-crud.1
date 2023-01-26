import type Brand from "../types/brand";
import type Car from "../types/car";
import type Model from "../types/model";

type CarsCollectionProps = {
model:Model[],
car: Car[],
brand:Brand[],
};

class CarsCollection {
 private  model: Model[];
 private  car:Car[];
 private brand :Brand[];

 constructor({model,car,brand}:CarsCollection) {
    this.model = JSON.parse(JSON.stringify(model));
    this.brand = JSON.parse(JSON.stringify(brand));
    this.car = JSON.parse(JSON.stringify(car));
 
 }
}

export default CarsCollection;
