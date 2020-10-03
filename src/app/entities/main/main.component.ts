import { Component, OnInit } from '@angular/core';
import { Slide } from '../../shared/components/carousel/carousel.component';
import { AnimationType } from '../../shared/components/carousel/carousel.animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public cities: string[] = ['Toronto (+100km)', 'LA (+150km)'];
    public brands: string[] = ['BMW', 'Toyota', 'Ford'];

// animation type can be Scale | Fade
    animationType = AnimationType.Fade;

    slides: Slide[] = [
        {
            headline: 'For Your Current Mood',
            src:
                'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
        },
        {
            headline: 'Miouw',
            src:
                'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
        },
        {
            headline: 'In The Wilderness',
            src:
                'https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80'
        },
        {
            headline: 'Focus On The Writing',
            src:
                'https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
        }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
