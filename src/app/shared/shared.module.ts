import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppHttpClient } from './api/app-http-client';
import { SharedRoutingModule } from './shared-routing.module';

// material elements
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

// ui-elements
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
// import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  providers: [
    AppHttpClient,
  ],
  declarations: [
    HeaderComponent,
    CarouselComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AngularSvgIconModule.forRoot(),
        SharedRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatInputModule,
        MatChipsModule,
        MatMenuModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTableModule,
        // NgbCarouselModule,
    ],
  exports: [
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule,
    HeaderComponent,
    CarouselComponent
  ]
})
export class SharedModule {
}
