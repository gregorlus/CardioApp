import { Component } from '@angular/core';

@Component({
    selector: 'app-person-attributes',
    templateUrl: './person-attributes.component.html'
})

export class PersonAttributesComponent {
    gender: string;
    age: number;
    pressure: number;
    cholesterol: number;
    heartRate: number;
    sugar = false;
    exercisePain = false;
    painType: string;
    slopeST: string;
    ecg: string;
    showForm = true;

    toggleForm(): void {
        this.showForm = !this.showForm;
    }
}
