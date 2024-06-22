import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerVideosComponent } from './player-videos/player-videos.component';
import { FifaRoutingModule } from './fifa-routing.module';
import { FifaService } from '../../services/fifa.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  providers: [ 
    FifaService 
  ],
  declarations: [
    HomeComponent,
    PlayerDetailsComponent,
    PlayerVideosComponent
  ],
  imports: [
    CommonModule,
    FifaRoutingModule,
    TranslateModule
  ]
})
export class FifaModule { }
