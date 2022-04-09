import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaysComponent } from './pays/pays.component';
import { ContinentComponent } from './continent/continent.component';
import { PaysafriqueComponent } from './paysafrique/paysafrique.component';
import { PaysasiaComponent } from './paysasia/paysasia.component';
import { PaysameriqueComponent } from './paysamerique/paysamerique.component';
import { PayseuropeComponent } from './payseurope/payseurope.component';
import { PaysOceaniaComponent } from './pays-oceania/pays-oceania.component';
import { DetailsafriqueComponent } from './detailsafrique/detailsafrique.component';
import { DetailsasiaComponent } from './detailsasia/detailsasia.component';
import { DetailsameriqueComponent } from './detailsamerique/detailsamerique.component';
import { DetailsOceaniaComponent } from './details-oceania/details-oceania.component';
import { DetailseuropeComponent } from './detailseurope/detailseurope.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pays', component: PaysComponent },
  { path: 'continent', component: ContinentComponent, },
  { path: 'payeurope', component: PayseuropeComponent }, 
  { path: 'paysafrique', component: PaysafriqueComponent },
  { path: 'paysasia', component: PaysasiaComponent },
  { path: 'paysamerique', component: PaysameriqueComponent },
  { path: 'paysoceania', component: PaysOceaniaComponent },
  { path: 'detailsasia', component: DetailsasiaComponent },
  { path: 'detailsamerique', component:  DetailsameriqueComponent},
  { path: 'detailsOceania', component:  DetailsOceaniaComponent},
  { path: 'detailseurope', component:  DetailseuropeComponent},
  { path: 'detailsafrique', component:  DetailsafriqueComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
