import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MenuModule,
    RouterModule
  ],
  exports:[
    ToolbarComponent
  ],
  providers: []
})
export class ToolbarModule { }
