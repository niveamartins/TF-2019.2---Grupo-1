import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WhatsNewComponent } from '../components/whats-new/whats-new.component';
import { ComponentsModule } from '../components/components.module';

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
        ComponentsModule
    ],
    declarations: [HomePage, WhatsNewComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
