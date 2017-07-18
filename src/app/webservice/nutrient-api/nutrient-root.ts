import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
    export class NutrientRootObject {        
       public id: number = undefined; 
       public desc: string = undefined;   
       public shrt_desc: string = undefined;
       public protein_g: number = undefined;
       public sat_fat_g: number = undefined;
       public cholestrl_mg: number = undefined;
       public energy_kcal: number = undefined;
       public fiber_dt: number = undefined;
       public sodium_mg: number = undefined;
       public wt_g: number = undefined;
       public wt_g_desc: string = undefined;       
    }
