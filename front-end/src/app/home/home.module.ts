import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { WhatsNewComponent } from '../components/whats-new/whats-new.component';


import { HomePage } from './home.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
    ],
    declarations: [HomePage, WhatsNewComponent],
    providers: [PostService]
})
export class HomePageModule { }
