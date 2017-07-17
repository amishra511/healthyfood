import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
    export class NutrientRootObject {        
       public id: number = undefined; 
       public desc: string = undefined;   
       public shrt_desc: string = undefined;
       public protein_g: number = undefined;
       public sat_fat_g: number = undefined;
       public wt_g: number = undefined;
       public wt_g_desc: string = undefined;
    }
