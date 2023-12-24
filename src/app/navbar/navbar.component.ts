import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  slides = [
    { title: 'Slide 1', text: 'FRETE GRÁTIS A PARTIR DE 1000 REAIS!' },
    { title: 'Slide 2', text: 'A CADA COMPRA GANHE UM ANÉL DE MIÇANGA DE PRESENTE!' },
  ];

  slideConfig = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

}
