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

    getPosts(): Observable<any> {

        return this.http.get(this.apiUrl + 'post/');

    }

    getPost(postId: any): Observable<any> {
        return this.http.get(this.apiUrl + 'post/' + postId);
    }

    createPost(postImage: any, createPost: any): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');

        console.log(this.httpHeaders);

        return this.http.post(this.apiUrl + 'post',
            {
                image: postImage,
                title: createPost.title,
                text: createPost.text
            },
            this.httpHeaders);

    }

    deletePost(id: number): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
        return this.http.delete(this.apiUrl + 'post/' + id, this.httpHeaders);

    }

}
