import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'F150',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'M3',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Cherokee',
        createdAt: new Date().getTime()
    }
]