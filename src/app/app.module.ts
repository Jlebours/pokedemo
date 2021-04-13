import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompenentComponent } from './my-compenent/my-compenent.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { PokedetailComponent } from './pokedetail/pokedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompenentComponent,
    FilterPokemonPipePipe,
    PokedetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
