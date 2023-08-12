import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Ford',
        model: 'F150'
    },
    {
        id: uuid(),
        brand: 'Bmw',
        model: 'M3'
    },
    {
        id: uuid(),
        brand: 'Jepp',
        model: 'Cherokee'
    }
]