import { Component, OnInit, inject } from '@angular/core';
import { FifaService } from '../../../services/fifa.service';
import { Player } from '../../../models/player.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-player-videos',
  templateUrl: './player-videos.component.html',
  styleUrl: './player-videos.component.scss'
})
export class PlayerVideosComponent implements OnInit{
  fifaService = inject(FifaService);
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);


  playerId: string | null = null;
  player?: Player = {} as Player;
  videoSanitized?: SafeResourceUrl[] = [];

  ngOnInit(): void {
    this.playerId = this.getID();
    if (this.playerId) {
      console.log(this.playerId)
      this.showPlayerById(this.playerId);
    }
  }

  getID(): string {
    return this.route.snapshot.params['id'];
  }
  //caching the videos
  showPlayerById(id: string): void {
    this.fifaService.getPlayerById(id).subscribe((player) => {
      this.player = player;
      console.log(this.player)
        if (this.player?.videoUrl) {
        this.player.videoUrl.forEach((video) => {
          this.videoSanitized?.push(this.sanitizer.bypassSecurityTrustResourceUrl(video));
          console.log(this.videoSanitized)
        })
      }  
    });
  }
}
