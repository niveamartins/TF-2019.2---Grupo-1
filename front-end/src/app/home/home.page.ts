import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

        homeLists: any[];
        homeNews: any[];

  constructor(public postservice: PostService) {}

  getPosts(): void {
    this.postservice.getPosts().subscribe(
      (res) => {
        console.log(res);
        this.homeLists = res.data;
        this.homeNews = this.homeLists.slice( 0, Math.min(4, this.homeLists.length));
        for(let homeList in this.homeLists){
        }
    });
	}

    ionViewDidEnter () {
      this.getPosts();
    }


}
