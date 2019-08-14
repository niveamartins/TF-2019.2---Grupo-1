import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    apiUrl: string = "http://localhost:8000/api/";

    httpHeaders: any = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    constructor(public http: HttpClient) { }

    /*getComments(id: number): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
        return this.http.get(this.apiUrl + 'comment/' + id, this.httpHeaders);

    }

    createComment(postComment: string): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
        return this.http.post(this.apiUrl + 'comment',
            {
                comment: postComment,
            },
            this.httpHeaders);

    }

    deleteComment(id: number): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
        return this.http.delete(this.apiUrl + 'comment/' + id, this.httpHeaders);

    }*/

}
