import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyCustomMaterialModule } from './mat.module';

import { AppComponent } from './app.component';


import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import { TryformlyComponent } from './tryformly/tryformly.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TryformlyComponent
  ],
  imports: [
    BrowserModule,
    MyCustomMaterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
