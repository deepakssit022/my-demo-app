import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
// import { Observable, Subject } from "rxjs";
// import { of } from "rxjs/observable/of";
import "rxjs/Rx";
import "rxjs/add/operator/distinctUntilChanged";
import {
    map
} from "rxjs/operators";

@Injectable()
export class MyDemoService {
    constructor(private http: HttpClient) { }

    login(email, password) {
        let httpHeaders = new HttpHeaders().set(
            "Content-Type",
            "application/json; charset=utf-8 "
        );
        let options = {
            headers: httpHeaders
        };
        return this.http.post<any>(
            environment.apiBaseUrlServer + "/admin/adminLogin",
            { email: email, password: password },
            options
        );
    }
}