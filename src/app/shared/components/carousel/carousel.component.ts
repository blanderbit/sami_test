import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';

import {
    AnimationType,
    scaleIn,
    scaleOut,
    fadeIn,
    fadeOut
} from './carousel.animations';

export interface Slide {
    headline?: string;
    src: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
    animations: [
        trigger('slideAnimation', [
            /* scale */
            transition('void => scale', [
                useAnimation(scaleIn, { params: { time: '500ms' } })
            ]),
            transition('scale => void', [
                useAnimation(scaleOut, { params: { time: '500ms' } })
            ]),

            /* fade */
            transition('void => fade', [
                useAnimation(fadeIn, { params: { time: '500ms' } })
            ]),
            transition('fade => void', [
                useAnimation(fadeOut, { params: { time: '500ms' } })
            ]),
        ])
    ]
})
export class CarouselComponent implements OnInit {
    @Input() slides: Slide[];
    @Input() animationType = AnimationType.Scale;

    currentSlide = 0;

  constructor() { }
    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    }

    onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
    }

    ngOnInit() {
        this.preloadImages();
    }

    preloadImages() {
        for (const slide of this.slides) {
            new Image().src = slide.src;
        }
    }

}
