import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { AboutComponent } from './about/about.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CareerComponent } from './career/career.component';
import { PriceComponent } from './price/price.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { OwlModule } from 'ngx-owl-carousel';
import { OurStoryComponent } from './our-story/our-story.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BedRoomComponent } from './bed-room/bed-room.component';
import { DiningComponent } from './dining/dining.component';
import { DrawingComponent } from './drawing/drawing.component';
import { LoungeComponent } from './lounge/lounge.component';
import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    SocialLinksComponent,
    AboutComponent,
    HomeBannerComponent,
    CatalogComponent,
    CareerComponent,
    PriceComponent,
    TeamComponent,
    ServicesComponent,
    OurStoryComponent,
    AdminComponent,
    BedRoomComponent,
    DiningComponent,
    DrawingComponent,
    LoungeComponent,
    AccessoriesComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    FormsModule,
        ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
