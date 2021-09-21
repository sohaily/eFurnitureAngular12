import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminComponent } from './admin/admin.component';
import { BedRoomComponent } from './bed-room/bed-room.component';
import { CareerComponent } from './career/career.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { DiningComponent } from './dining/dining.component';
import { DrawingComponent } from './drawing/drawing.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './home/home.component';
import { LoungeComponent } from './lounge/lounge.component';
import { ServicesComponent } from './services/services.component';
import { SocialLinksComponent } from './social-links/social-links.component';

const routes: Routes = [
  { path: '', component: HomeBannerComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'social-link', component: SocialLinksComponent},
  { path: 'catalog', component: CatalogComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'career', component: CareerComponent},
  { path: 'catalog/bedroom', component: BedRoomComponent},
  { path: 'catalog/dinning', component: DiningComponent},
  { path: 'catalog/drawing', component: DrawingComponent},
  { path: 'catalog/lounge', component: LoungeComponent},
  { path: 'catalog/accessories', component: AccessoriesComponent},
  { path: 'admin', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
