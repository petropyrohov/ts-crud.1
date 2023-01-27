import Car from '../types/car';
import Model from '../types/model';
import Brand from '../types/brand';
import CarJoined from '../types/car-joined';

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
  
     private.joinCar = ({ d, ...car}: Car) => {
        const { brands, models } = this.props;
        const carModel = models.find((model) => model.id === modelId);
        const carBrand = brands.find((brand) => brand.id === carModel?.brandId);
    
        return {
          ...car,
          brand: (carBrand && carBrand.title) ?? 'nodata',
          model: (carModel && carModel.title) ?? 'nodata',
        };
      };
 }
      public get all(): CarJoined[] {
        return this.props.cars.map(this.joinCar);
      }
}

export default CarsCollection;
