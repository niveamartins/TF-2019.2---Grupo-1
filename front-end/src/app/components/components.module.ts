import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FabComponent } from './fab/fab.component';

@NgModule({
    declarations: [FabComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [FabComponent],
    entryComponents: [FabComponent],
})
export class ComponentsModule { }
