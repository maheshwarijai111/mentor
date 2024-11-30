import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('.feature_items_slider').owlCarousel({
      loop: true,
      margin: 20,
      items: 1,
      dots: true,
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true,
      responsive: {
        992: {
          items: 1
        },
        768: {
          items: 1
        },
        576: {
          items: 1
        },
        0: {
          items: 1
        }
      }
    });
    $('.sectionHomeSeven_sliders').owlCarousel({
      loop: true,
      margin: 20,
      items: 5,
      dots: true,
      smartSpeed: 1000,
      autoplayTimeout: 2000,
      autoHeight: false,
      autoplay: true,
      autoplayHoverPause: false,
      responsive: {
        992: {
          items: 5
        },
        768: {
          items: 1
        },
        576: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
  }
}
