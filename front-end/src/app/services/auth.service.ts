import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiUrl: string = "http://localhost:8000/api/";

    httpHeaders: any = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    constructor(public http: HttpClient) { }

    registerUser(form): Observable<any> {

        return this.http.post(this.apiUrl + 'register', form, this.httpHeaders);

    }

    loginUser(form): Observable<any> {

        return this.http.post(this.apiUrl + 'login', form, this.httpHeaders);

    }

    logoutUser(): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');

        return this.http.get(this.apiUrl + 'logout', this.httpHeaders);

    }

}
