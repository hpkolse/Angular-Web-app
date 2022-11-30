import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './slider.component';


@NgModule({
    declarations: [
        SliderComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        SwiperModule
    ],
    exports: [
        SliderComponent
    ],
    providers: []
})
export class SliderModule { }
