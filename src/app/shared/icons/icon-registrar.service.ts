import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistrarService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
  }

  registerIcons() {
    svgIcons.forEach(({name, path}) =>
      this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path)));
  }
}


export const svgIcons = [

  {name: 'bx-car-garage', path: 'assets/images/svg/bxs-car-garage.svg'},
  {name: 'bx-star', path: 'assets/images/svg/bx-star.svg'},
  {name: 'bx-user', path: 'assets/images/svg/bx-user.svg'},
  {name: 'bx-car', path: 'assets/images/svg/bxs-car.svg'},
  {name: 'bx-location', path: 'assets/images/svg/location.svg'},
  {name: 'bx-wallet', path: 'assets/images/svg/bxs-wallet.svg'},
  {name: 'bx-search', path: 'assets/images/svg/bx-search.svg'},
];
