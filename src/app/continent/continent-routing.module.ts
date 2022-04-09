import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { PaysComponent } from '../pays/pays.component';
import { ContinentComponent } from './continent.component';
import { PaysafriqueComponent } from '../paysafrique/paysafrique.component';
import { PaysasiaComponent } from '../paysasia/paysasia.component';
import { PaysameriqueComponent } from '../paysamerique/paysamerique.component';
import { PaysOceaniaComponent } from '../pays-oceania/pays-oceania.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pays', component: PaysComponent },
  { path: 'continent', component: ContinentComponent },
  { path: 'paysafrique', component: PaysafriqueComponent },
  { path: 'paysasia', component: PaysasiaComponent },
  { path: 'paysamerique', component: PaysameriqueComponent },
  { path: 'paysoceania', component: PaysOceaniaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
