
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.page.html',
    styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

    postImage;
    homeNews = [];

    public createPost: FormGroup;

    constructor(public formbuilder: FormBuilder, public router: Router, private camera: Camera, public authservice: AuthService, public postservice: PostService) {

        this.createPost = this.formbuilder.group({

            title: ['', Validators.required],
            text: ['', Validators.required]

        });
    }

    submitPost() {

        console.log(this.createPost);

        this.postservice.createPost(this.postImage, this.createPost.value).subscribe(
            (res) => {
                console.log(res.message);
                this.homeNews.push(res.data);
                console.log(this.homeNews);
                this.router.navigate(['home']);
            });

    }


    openGallery() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };

        this.camera.getPicture(options).then((imageData) => {
            this.postImage = 'data:image/jpeg;base64,' + imageData;
            console.log('data:image/jpeg;base64,' + imageData);
        },
            (error) => {
                console.log(error);
            });
    }


    ngOnInit() {
    }

}
