import { InjectionToken } from "@angular/core";

export interface LibConfigModel{
    apiUrl: string;
    appName: string;
    appId: string;
}

export const LibConfigService = new InjectionToken<LibConfigModel>('LibConfig');
