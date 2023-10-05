import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { SubMenuComponent } from './component/sub-menu/sub-menu.component';
import { CardsComponent } from './component/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SubMenuComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
