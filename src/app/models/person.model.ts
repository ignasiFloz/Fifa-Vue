import { IPerson } from "./iperson.interface";
export class Person implements IPerson{
    id: string;
    name: string;
    age: number;
    weight: number;
    height: number;
    speed: number;
    strength: number;
    agility: number;

    constructor(person: IPerson){
        this.id = person.id;
        this.name = person.name;
        this.age = person.age;
        this.weight = person.weight;
        this.height = person.height;
        this.speed = person.speed;
        this.strength = person.strength;
        this.agility = person.agility;
    }
 
}