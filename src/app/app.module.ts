import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ToolbarModule,
        LandingPageModule,
        HttpClientModule,
        HomePageModule
    ]
})
export class AppModule { }
