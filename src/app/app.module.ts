import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PaysComponent } from './pays/pays.component';
import { ContinentComponent } from './continent/continent.component';
import { RouterModule } from '@angular/router';

import { PaysafriqueComponent } from './paysafrique/paysafrique.component';
import { PaysasiaComponent } from './paysasia/paysasia.component';
import { PaysameriqueComponent } from './paysamerique/paysamerique.component';
import { PayseuropeComponent } from './payseurope/payseurope.component';
import { PaysOceaniaComponent } from './pays-oceania/pays-oceania.component';
import { DetailsafriqueComponent } from './detailsafrique/detailsafrique.component';
import { DetailsOceaniaComponent } from './details-oceania/details-oceania.component';
import { DetailseuropeComponent } from './detailseurope/detailseurope.component';
import { DetailsameriqueComponent } from './detailsamerique/detailsamerique.component';
import { DetailsasiaComponent } from './detailsasia/detailsasia.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PaysComponent, ContinentComponent, PaysafriqueComponent, PaysasiaComponent, PaysameriqueComponent, PayseuropeComponent, PaysOceaniaComponent, DetailsafriqueComponent, DetailsOceaniaComponent, DetailseuropeComponent, DetailsameriqueComponent, DetailsasiaComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule, PaysComponent, ContinentComponent, PaysafriqueComponent, PaysasiaComponent, PaysameriqueComponent, PayseuropeComponent, PaysOceaniaComponent ]
})
export class AppModule {}
