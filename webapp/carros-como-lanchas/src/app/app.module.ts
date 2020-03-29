import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { BottomBarComponent } from './shared/components/bottom-bar/bottom-bar.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BottomBarComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
