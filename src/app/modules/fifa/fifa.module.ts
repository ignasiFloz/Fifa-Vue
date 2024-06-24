import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerVideosComponent } from './player-videos/player-videos.component';
import { FifaRoutingModule } from './fifa-routing.module';
import { FifaService } from '../../services/fifa.service';
import { TranslateModule } from '@ngx-translate/core';
import { PlayerStatsComponent } from './player-details/player-stats/player-stats.component';
import { Decrypt } from '../../services/crypt.service';



@NgModule({
  providers: [ 
    FifaService ,
    Decrypt
  ],
  declarations: [
    HomeComponent,
    PlayerDetailsComponent,
    PlayerVideosComponent,
    PlayerStatsComponent
  ],
  imports: [
    CommonModule,
    FifaRoutingModule,
    TranslateModule
  ]
})
export class FifaModule { }
