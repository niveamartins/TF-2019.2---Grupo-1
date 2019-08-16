import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post',
    templateUrl: './post.page.html',
    styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

    postId;
    post;

    //public postService: PostService
    constructor(public postservice: PostService, public router: Router) {
        this.postId = this.router.getCurrentNavigation().extras;
        }

    getPost(): void {
        this.postservice.getPost(this.postId).subscribe(
            (res) => {
                this.post = res.data;
                console.log(res);

            });
    }
    
    ngOnInit() {
        this.getPost();
    }

}
