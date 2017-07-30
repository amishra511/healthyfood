import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { NutrientRootObject } from './nutrient-api/nutrient-root';
import { JsonConvert } from "json2typescript";


import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

//import {Pet} from './pet';
//import {RootObject} from './rootObject';

@Injectable()
export class HealthyFoodService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
 
  private nutrientsUrl = 'http://nutrients-lifeone.rhcloud.com/rest/api/getSuggestions';  // URL to web api
  // private nutrientsUrl = 'http://localhost:8080/nutrients/rest/api/getSuggestions';  // URL to web api
  private formatParam = 'format=json';
  private methodRandomPet = 'getpet';
  private nutrient:NutrientRootObject[];

  constructor(private http: Http) {

  }

  getSuggestion(term: string) {
    let params = new URLSearchParams();
    params.set('queryStr', term);

    return this.http.get(this.nutrientsUrl, { search: params })    
    .map(res => this.nutrient = JsonConvert.deserializeArray( res.json(), NutrientRootObject));
  }



}