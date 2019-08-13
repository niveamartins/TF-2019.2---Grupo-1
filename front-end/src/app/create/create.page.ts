
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  ImagemPost;

  public createPost: FormGroup;

  constructor(public formbuilder: FormBuilder, private camera: Camera) {
    this.createPost = this.formbuilder.group({
            'titulo': ['', Validators.required],
            'texto': ['', Validators.required]

        });
   }

  submitPost() {

  }

  openGallery() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };

        this.camera.getPicture(options).then((imageData) => {
            this.ImagemPost = 'data:image/jpeg;base64,' + imageData;
            console.log('data:image/jpeg;base64,' + imageData);
        },
            (error) => {
                console.log(error);
            });
    }

  ngOnInit() {
  }

}
