import { defineStore } from 'pinia'
import type {AppConfig} from '../models/AppConfig';


export const useConfigStore = defineStore('config', {
    state: (): AppConfig => ({
        isOTPEnabled: false,
        isHomeAffairsEnabled: false,
        isKycEnabled: false
    }),

    actions: {
        loadConfigFromServer(payload: AppConfig): void {
            this.isOTPEnabled = payload.isOTPEnabled
            this.isHomeAffairsEnabled = payload.isHomeAffairsEnabled
            this.isKycEnabled = payload.isKycEnabled
        },
    },

});
