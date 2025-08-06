import type {AppConfig} from "../models/AppConfig.ts";

export class ConfigurationService{

    loadConfig() : AppConfig{

        console.log('Making a call to get configs')

        const MOCK_CONFIG: AppConfig = {
            isKycEnabled: false,
            isHomeAffairsEnabled: true,
            isOTPEnabled: false
        };
        return MOCK_CONFIG;
    }
}