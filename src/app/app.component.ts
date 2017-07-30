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
  items: Observable<NutrientRootObject[]>;
  foodItem: string;
  selectedItem: NutrientRootObject;
  addedItems: NutrientRootObject[] = [];

  sumOfItems: NutrientRootObject ;

  constructor(private healthyFoodServ: HealthyFoodService, private http: Http) {
    //Check if this code needs to be in onInit()
    ////////////////////////////////////////////
     this.sumOfItems = new NutrientRootObject();
      this.sumOfItems.protein_g = 0;
    this.sumOfItems.sat_fat_g = 0;
    this.sumOfItems.cholestrl_mg = 0;
    this.sumOfItems.fiber_dt = 0;
    this.sumOfItems.sodium_mg = 0;
    this.sumOfItems.energy_kcal = 0;
   }

  getFoodItems(term: string, event: any) {
    if (term != null) {
      if (event.keyCode != 40) {
        //     console.log("up arrow");
        //Do not subscribe to the observable, directly use it otherwise 'async' will give error in html
        this.items = this.healthyFoodServ.getSuggestion(term);
      }
    }

  }
  onFoodItemSelect(item: NutrientRootObject) {
    this.foodItem = item.desc;
    this.selectedItem = item;
    // this.clearIemList();
    this.items = null;
  }

  clearIemList() {
    this.items = null;
  }

  onQtyChange(msr: number) {

  }

  onAdd() {
    this.addedItems.push(this.selectedItem);
    this.sumItemValues() ;
    this.selectedItem = null;
    this.foodItem = null;
  }

  sumItemValues() {

    let protein_g: number = 0.00;
    let sat_fat_g: number = 0.000;
    let cholestrl_mg: number = 0;
    let fiber_dt: number = 0;
    let sodium_mg: number = 0;
    let energy_kcal: number = 0;
    // let sodium_mg: number = undefined; 

    for (let item of this.addedItems) {
      protein_g += item.protein_g;
      sat_fat_g += item.sat_fat_g;
      cholestrl_mg += item.cholestrl_mg;
      fiber_dt += item.fiber_dt;
      sodium_mg += item.sodium_mg;
      energy_kcal += item.energy_kcal;
    }
    this.sumOfItems.protein_g = protein_g;
    this.sumOfItems.sat_fat_g = sat_fat_g;
    this.sumOfItems.cholestrl_mg = cholestrl_mg;
    this.sumOfItems.fiber_dt = fiber_dt;
    this.sumOfItems.sodium_mg = sodium_mg;
    this.sumOfItems.energy_kcal = energy_kcal;
  }


}
