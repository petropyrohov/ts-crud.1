import type Brand from '../types/brand';
import type Car from '../types/car';
import type Model from '../types/model';
import type CarJoined from '../types/car-joined';

const carsCollection = new CarsCollection({
    Model,
    Car,
    Brand,
});
const plainCar = Model[0]
const joinCar = CarJoined.joinCar(plainCar)
console.table({
    plainCar,
    joinCar,
});

console.table(carsCollection.all)

import App from './components/app';

const app = new App('#root');
app.initialize();

