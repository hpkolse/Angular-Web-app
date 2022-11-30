import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card.component';


@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        BrowserModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        CardComponent
    ],
    providers: []
})
export class CardModule { }
