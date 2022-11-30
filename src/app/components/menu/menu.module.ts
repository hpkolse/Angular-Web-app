import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        BrowserModule,
        MatMenuModule,
        MatButtonModule,
        RouterModule
    ],
    exports: [
        MenuComponent
    ],
    providers: []
})
export class MenuModule { }
