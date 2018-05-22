import { Injectable } from '@angular/core';
import { IAttributesModel } from './person-attributes/attributesModel';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IApiInput } from './apiInput';

@Injectable()
export class ApiClientService {

private _apiUrl = 'http://localhost:8080';
private _olivander = 'http://localhost:50023/api/v1';

constructor(private _http: HttpClient) {

}

    getPrediction(attributes: IApiInput): Observable<number> {
        const method = this._apiUrl + '/heart_model';
        const oliMethod = this._olivander + '/StoreCommand/AddNewOrder';

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log(attributes);
        return this._http.post<number>(method, attributes, httpOptions)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

        // const postAtt = {};
        // return this._http.post<any>(oliMethod, postAtt, httpOptions)
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        // .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}

