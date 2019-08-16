import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss'],
})
export class WhatsNewComponent implements OnInit {

 @Input() homeNews;
 @Output() postClicked = new EventEmitter<number>();

  constructor(/*public toastcontroller: ToastController*/) { }

  /*async presentToast() {
      const toast = await this.toastcontroller.create({
          message: "Logue para poder postar!",
          duration: 2000
      });
      toast.present();
  }*/

  goToPost(id) {
        this.postClicked.emit(id);        
  }

  ionViewDidLoad() {
      console.log(this.homeNews);
  }

  ngOnInit() {

  }

}
