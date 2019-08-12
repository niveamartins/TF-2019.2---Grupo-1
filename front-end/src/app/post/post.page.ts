import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  ImagemPost = '';
  TituloPost = '';
  TextoPost = '';

  //public postService: PostService
  constructor( ) { }

  //getPost():void {
  //  this.postService.getPost().subscribe(
  //    (res) => {
  //      console.log(res);
  //    }
  //  )
  //}
  ngOnInit() {
    //this.getPost();
  }

}
