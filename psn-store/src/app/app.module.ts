import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/games-list/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/games-list/card/card-label/card-label.component';
import { CardPricingComponent } from './components/games-list/card/card-pricing/card-pricing.component';
import { MenuBarItemsComponent } from './components/menu-bar/menu-bar-items/menu-bar-items.component';
import { HeroComponent } from './components/hero/hero.component';
import { GamesListComponent } from './components/games-list/games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    MenuBarItemsComponent,
    HeroComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
