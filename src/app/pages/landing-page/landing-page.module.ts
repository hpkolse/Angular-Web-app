import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from 'src/app/components/card/card.module';
import { LandingPageComponent } from './landing-page.component';


@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        BrowserModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        CardModule
    ],
    exports: [
        
    ],
    providers: []
})
export class LandingPageModule { }
