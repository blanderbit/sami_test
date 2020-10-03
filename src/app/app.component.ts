import {Component, OnInit} from '@angular/core';
import {IconRegistrarService} from './shared/icons/icon-registrar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private iconRegistrar: IconRegistrarService,
  ) {

  }

  ngOnInit(): void {
    this.iconRegistrar.registerIcons();
  }
}
