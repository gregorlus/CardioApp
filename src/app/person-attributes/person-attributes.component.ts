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
    attributes: IAttributesModel;
    prediction: number;
    output = {} as any;
    erroMessage: string;

    constructor(private _apiClientService: ApiClientService, private _mapper: AttributesMappingService) {}

    ngOnInit() {
        this.initAttributes();
        this.performPrediction();
    }

    performPrediction() {
        const apiInput = this._mapper.map(this.attributes);
        this._apiClientService.getPrediction(apiInput)
            .subscribe(
                prediction => {
                    this.output = prediction;
                    this.setPrediction();
                },
                error => this.erroMessage = <any>error
            );
    }

    setPrediction() {
        console.log(this.output.pred);
        let prediction = this.output.pred;
        prediction = prediction.replace('[[', '');
        prediction = prediction.replace(']]', '');

        console.log(prediction);

        this.prediction = +prediction;
    }

    initAttributes() {
        this.attributes = {
            'age': 20,
            'gender': 0,
            'pressure': 120,
            'heartRate': 75,
            'cholesterol': 100,
            'sugar': false,
            'exercisePain': false,
            'slopeST': 1,
            'oldpeak': 2,
            'painType': 4,
            'ca': 0,
            'ecg': 0,
            'thal': 3
        };
    }
}
