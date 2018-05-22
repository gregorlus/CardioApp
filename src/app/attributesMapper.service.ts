import { Injectable } from '@angular/core';
import { IAttributesModel } from './person-attributes/attributesModel';
import { IApiInput } from './apiInput';

@Injectable()
export class AttributesMappingService {

    map(attributesModel: IAttributesModel): IApiInput {
        let apiInput: IApiInput;
        apiInput = {} as any;

        apiInput.age = attributesModel.age;
        apiInput.sex = attributesModel.gender;
        apiInput.restbp = attributesModel.pressure;
        apiInput.chol = attributesModel.cholesterol;
        apiInput.thalach = attributesModel.heartRate;
        apiInput.oldpeak = attributesModel.oldpeak;
        apiInput.ca = +attributesModel.ca;
        apiInput.fbs = attributesModel.sugar ? 1 : 0;
        apiInput.exang = attributesModel.exercisePain ? 1 : 0;
        apiInput.exang = attributesModel.exercisePain ? 1 : 0;
        apiInput.cp_1 = this.mapCp1(attributesModel.painType);
        apiInput.cp_2 = this.mapCp2(attributesModel.painType);
        apiInput.cp_3 = this.mapCp3(attributesModel.painType);
        apiInput.cp_4 = this.mapCp4(attributesModel.painType);
        apiInput.restecg_0 = this.mapEcg0(attributesModel.ecg);
        apiInput.restecg_1 = this.mapEcg1(attributesModel.ecg);
        apiInput.restecg_2 = this.mapEcg2(attributesModel.ecg);
        apiInput.slope_1 = this.mapSlope1(attributesModel.slopeST);
        apiInput.slope_2 = this.mapSlope2(attributesModel.slopeST);
        apiInput.slope_3 = this.mapSlope3(attributesModel.slopeST);
        apiInput.thal_3 = this.mapThal3(attributesModel.thal);
        apiInput.thal_6 = this.mapThal6(attributesModel.thal);
        apiInput.thal_7 = this.mapThal7(attributesModel.thal);

        return apiInput;
    }

    private mapCp1(painType: number): number {
        // tslint:disable-next-line:triple-equals
        if (painType != 1) {
            return 0;
        }

        return 1;
    }

    private mapCp2(painType: number): number {
        // tslint:disable-next-line:triple-equals
        if (painType != 2) {
            return 0;
        }

        return 1;
    }

    private mapCp3(painType: number): number {
        // tslint:disable-next-line:triple-equals
        if (painType != 3) {
            return 0;
        }

        return 1;
    }

    private mapCp4(painType: number): number {
        // tslint:disable-next-line:triple-equals
        if (painType != 4) {
            return 0;
        }

        return 1;
    }

    private mapEcg0(ecg: number): number {
        // tslint:disable-next-line:triple-equals
        if (ecg != 0) {
            return 0;
        }

        return 1;
    }

    private mapEcg1(ecg: number): number {
        // tslint:disable-next-line:triple-equals
        if (ecg != 1) {
            return 0;
        }

        return 1;
    }

    private mapEcg2(ecg: number): number {
        // tslint:disable-next-line:triple-equals
        if (ecg != 2) {
            return 0;
        }

        return 1;
    }

    private mapSlope1(slope: number): number {
        // tslint:disable-next-line:triple-equals
        if (slope != 1) {
            return 0;
        }

        return 1;
    }

    private mapSlope2(slope: number): number {
        // tslint:disable-next-line:triple-equals
        if (slope != 2) {
            return 0;
        }

        return 1;
    }

    private mapSlope3(slope: number): number {
        // tslint:disable-next-line:triple-equals
        if (slope != 3) {
            return 0;
        }

        return 1;
    }

    private mapThal3(thal: number): number {
        // tslint:disable-next-line:triple-equals
        if (thal != 3) {
            return 0;
        }

        return 1;
    }

    private mapThal6(thal: number): number {
        // tslint:disable-next-line:triple-equals
        if (thal != 6) {
            return 0;
        }

        return 1;
    }

    private mapThal7(thal: number): number {
        // tslint:disable-next-line:triple-equals
        if (thal != 7) {
            return 0;
        }

        return 1;
    }
}

