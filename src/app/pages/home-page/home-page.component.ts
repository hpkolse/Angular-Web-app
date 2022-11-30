import { Component, OnInit } from '@angular/core';
import { sliderData } from './home-page.content';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  sliderData = sliderData

}
