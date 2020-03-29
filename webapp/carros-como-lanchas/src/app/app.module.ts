import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { BottomBarComponent } from './shared/components/bottom-bar/bottom-bar.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { GameComponent } from './content/components/game/game.component';
import { InstructionsComponent } from './content/components/instructions/instructions.component';
import { HomeComponent } from './content/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BottomBarComponent,
    ItemCardComponent,
    GameComponent,
    InstructionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
