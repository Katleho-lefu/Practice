import { Injectable } from '@angular/core';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {

  BMW : Car = {make:'BMW', model:'M4', color: 'black'};
  Mercedes : Car = { make: 'Benz', model: 'A45', color: 'Dark grey'};
  Lambo : Car = { make: 'Lamborghini', model: 'Urus', color: 'black'};

  cars : Car[] = [this.BMW, this.Lambo, this.Mercedes];

  constructor() { }

  get_cars(){
    return this.cars;
    
  }

  add_car(new_car : Car){
    this.cars.push(new_car);
  }

}
