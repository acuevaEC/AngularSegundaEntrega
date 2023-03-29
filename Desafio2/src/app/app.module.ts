import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechazadonDirective } from './directives/rechazado/rechazado.directive';
import { ColorNotasDirective } from './directives/colorNotas/color-notas.directive';
import { FilterPipe } from './directives/pipes/filter.pipe';
import { PostComponent } from './components/post/post.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    RechazadonDirective,
    ColorNotasDirective,
    FilterPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
