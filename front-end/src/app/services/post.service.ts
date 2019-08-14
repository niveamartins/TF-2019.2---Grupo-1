import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    apiUrl: string = "http://localhost:8000/api/";

    httpHeaders: any = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    constructor(public http: HttpClient) { }

    /*getPosts(): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
        return this.http.get(this.apiUrl + 'post/', this.httpHeaders);

    }

    createPost(postTitle: string, postImage: any, postText: string): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
        return this.http.post(this.apiUrl + 'post',
            {
                title: postTitle,
                image: postImage,
                text: postText
            },
            this.httpHeaders);

    }

    deletePost(id: number): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
        return this.http.delete(this.apiUrl + 'post/' + id, this.httpHeaders);

    }*/

}
