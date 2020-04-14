import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructionsComponent } from './content/components/instructions/instructions.component';
import { GameComponent } from './content/components/game/game.component';
import { HomeComponent } from './content/components/home/home.component';
import { ContactComponent } from './content/components/contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'play', component: GameComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'contact', component: ContactComponent},
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
