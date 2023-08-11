import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

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

    create(CreateCarDto:CreateCarDto) {
        const car:Car = {
            id: uuid(),
            ...CreateCarDto
        }

        this.cars.push(car);

        return car;
    }

    update(id:string, UpdateCarDto:UpdateCarDto) {
        let carDB = this.findOneById(id);
        this.cars = this.cars.map(car => {
            if(car.id === id) {
                carDB = {...carDB, ...UpdateCarDto, id}
                return carDB; 
            }
            return car;
        })

        return carDB;
    }

    delete(id:string) {
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
}
