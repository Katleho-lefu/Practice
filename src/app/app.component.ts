import { Component } from '@angular/core';
import { Car } from './car';
import { TransportationService} from './transportation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars : Car[];
  make : string = "";
  model : string = "";
  color : string = "";

  const new_car: Car = {make:this.make, model:this.model, color:this.color};

  constructor(private transportationService : TransportationService,){
    this.cars = this.transportationService.get_cars();
  }


  add_car(){
    this.transportationService.add_car(this.new_car)
  }




}
