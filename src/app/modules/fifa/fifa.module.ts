import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerVideosComponent } from './player-videos/player-videos.component';



@NgModule({
  declarations: [
    HomeComponent,
    PlayerDetailsComponent,
    PlayerVideosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FifaModule { }
