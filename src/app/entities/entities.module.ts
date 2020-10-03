import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StaticPagesRoutingModule} from './entities-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  providers: [],
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    StaticPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: []
})
export class EntitiesModule {
}
