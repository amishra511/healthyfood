import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NutrientRootObject } from './webservice/nutrient-api/nutrient-root';
import { HealthyFoodService } from './webservice/healthyfood.service';
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bulma.css', './pure.css']
})
export class AppComponent {
  title = 'Nutrition Facts about your food';
  items:Observable<NutrientRootObject[]>;
  foodItem:string;
  selectedItem:NutrientRootObject;
  addedItems: NutrientRootObject[] =[];

  constructor(private healthyFoodServ: HealthyFoodService, private http:Http){}

   getFoodItems(term: string, event: any) {
     if (event.keyCode != 40){
    //     console.log("up arrow");
    //Do not subscribe to the observable, directly use it otherwise 'async' will give error in html
    this.items = this.healthyFoodServ.getSuggestion(term);   
     }
  
  }
    onFoodItemSelect(item: NutrientRootObject){  
    this.foodItem = item.desc;
    this.selectedItem = item;
    // this.clearIemList();
    this.items = null;
  }

  clearIemList(){
    this.items = null;
  }

  onQtyChange(msr: number){

  }

  onAdd(){
    this.addedItems.push(this.selectedItem);
  }



}
