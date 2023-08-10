import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'BMW',
            model: 'M3'
        },
        {
            id: 2,
            brand: 'FORD',
            model: 'F-150'
        },
        {
            id: 3,
            brand: 'AUDI',
            model: 'R8'
        },
    ]

    findAll() {
        return this.cars;
    }

    findOneById(id:number) {
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
        
        return car;
    }
}
