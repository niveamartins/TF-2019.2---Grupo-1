import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    homeStuff: any[];
    homeLists: any[];
    homeNews: any[];

    constructor(public postservice: PostService, public router: Router) { }

    getPosts(): void {
        this.postservice.getPosts().subscribe(
            (res) => {
                console.log(res);
                this.homeStuff = res.data;
                this.homeNews = this.homeStuff.slice(-4, Math.max(-3, this.homeStuff.length)).reverse();
                this.homeLists = this.homeStuff.slice(-8, Math.max(-7, -4));

                console.log(this.homeLists);
            });
    }

    goToPost(id) {
        this.router.navigate(['post'], id);
    }

    ionViewDidEnter() {
        this.getPosts();
    }

    // photoStandard(this) {
    //     if (photo == null) {
    //         return "../../assets/img_post.png";
    //     } else {
    //         return 'data:image/jpeg;base64,${photo}';
    //     }
    // }

}
