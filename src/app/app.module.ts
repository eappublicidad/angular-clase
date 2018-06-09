import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CompraComponent } from './compra/compra.component';
import {appRouter} from './routing';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CompraComponent,
   
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
