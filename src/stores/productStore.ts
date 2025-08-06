import {defineStore} from "pinia";


export const useProductStore = defineStore('product', {
    state: () => ({
        productName: '',
        step : 1
    }),

    actions:{
        setProductName(productName: string){
            this.productName = productName;
        },

        continue(){
            this.step = this.step + 1;
        },

        back() {
            if (this.step > 1) {
                this.step = this.step -1;

            }
        },
    }
});