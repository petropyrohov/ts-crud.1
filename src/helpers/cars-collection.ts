import type Brand from "../types/brand";
import type Car from "../types/car";
import type Model from "../types/model";
import type CarJoined from "../types/car-joined";

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
  
    joinCar(model: Model):CarJoined{
        const temp =this.privateModelcategory
        .filter((modelcategory) => modelcategory.modelId ===model.id)
        .map((modelcategory)=>modelId.model.id);

       const.categories = this.privateModelcategory
       .filter((model) => modelId.includes(model.id));
       .join(',') 


        return {
            ...model,
            categories,
        };

    }
 get all(): CarJoined[]{
    return this.CarJoined.map(this.joinCar);
 }
}
}

export default CarsCollection;
