import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    { img: '../../assets/imagem-produto-1.jpeg' },
    { img: '../../assets/imagem-produto-2.jpeg' },
    { img: '../../assets/imagem-produto-3.jpeg' },
  ];

  slideConfig = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };
}
