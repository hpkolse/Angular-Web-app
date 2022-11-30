import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from 'src/app/components/card/card.module';
import { HomePageComponent } from './home-page.component';
import { SliderModule } from 'src/app/components/slider/slider.module';


@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        CardModule,
        SliderModule
    ],
    exports: [
        
    ],
    providers: []
})
export class HomePageModule { }
