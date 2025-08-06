import { defineStore } from 'pinia'
import type {BasicDetailsModel} from "../models/BasicDetailsModel.ts";
import type {ApplicationModel} from "../models/ApplicationModel.ts";



export const useApplicationDetailsStore = defineStore('app', {
    state: (): ApplicationModel => ({
        basicDetails: {idNumber:'', email:''},
    }),

    actions: {
        setBasicDetails(basicDetails: BasicDetailsModel){
            this.basicDetails = basicDetails;
        }
    }

});
