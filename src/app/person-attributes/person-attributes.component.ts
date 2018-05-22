import { Component, OnInit } from '@angular/core';
import { IAttributesModel } from './attributesModel';
import { ApiClientService } from '../apiClient.service';
import { AttributesMappingService } from '../attributesMapper.service';

@Component({
    templateUrl: './person-attributes.component.html',
    styleUrls: ['./person-attributes.component.css'],
    providers: [
        ApiClientService,
        AttributesMappingService
    ]
})

export class PersonAttributesComponent implements OnInit {
    attributes: IAttributesModel = {} as any;
    prediction: number;
    output = {} as any;
    erroMessage: string;

    constructor(private _apiClientService: ApiClientService, private _mapper: AttributesMappingService) {}

    ngOnInit() {
        this.initAttributes();
    }

    performPrediction() {
        const apiInput = this._mapper.map(this.attributes);
        this._apiClientService.getPrediction(apiInput)
            .subscribe(
                prediction => this.output = prediction,
                error => this.erroMessage = <any>error
            );
    }

    showPrediction() {
        return +this.output.pred;
    }

    initAttributes() {
        this.attributes.age = 20;
        this.attributes.gender = 0;
        this.attributes.pressure = 120;
        this.attributes.heartRate = 75;
        this.attributes.cholesterol = 100;
        this.attributes.sugar = false;
        this.attributes.exercisePain = false;
        this.attributes.slopeST = 2;
        this.attributes.oldpeak = 2;
        this.attributes.painType = 4;
        this.attributes.ca = 0;
        this.attributes.ecg = 0;
        this.attributes.thal = 3;
    }
}
