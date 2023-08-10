import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
    private cars:Car[] = [
        {
            id: uuid(),
            brand: 'BMW',
            model: 'M3'
        },
        {
            id: uuid(),
            brand: 'FORD',
            model: 'F-150'
        },
        {
            id: uuid(),
            brand: 'AUDI',
            model: 'R8'
        },
    ]

    findAll() {
        return this.cars;
    }

    findOneById(id:string) {
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }
}
