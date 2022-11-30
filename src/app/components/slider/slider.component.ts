import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SliderItems } from './slider';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade, SwiperOptions} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade])

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {

  @Input() sliderImages: SliderItems[] = [];

  configuration: SwiperOptions = { 
    autoplay: {
      delay: 1000
    },
    navigation: {
      enabled: true
    },
    pagination: {
      clickable: true
    },
    effect: 'fade',
    rewind: true

  }

}
