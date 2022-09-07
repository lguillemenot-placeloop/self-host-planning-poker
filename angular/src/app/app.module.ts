import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewGamePageComponent } from './pages/new-game-page/new-game-page.component';
import { HttpClientModule } from '@angular/common/http';
import { OngoingGamePageComponent } from './pages/ongoing-game-page/ongoing-game-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameNameComponent } from './components/navigation-bar/game-name/game-name.component';
import { PlayerInfoComponent } from './components/navigation-bar/player-info/player-info.component';
import { GameInfoComponent } from './components/navigation-bar/game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFormComponent,
    NewGamePageComponent,
    OngoingGamePageComponent,
    NavigationBarComponent,
    GameNameComponent,
    PlayerInfoComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }