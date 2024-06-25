import { Component, OnInit, inject } from '@angular/core';
import { FifaService } from '../../../services/fifa.service';
import { Player } from '../../../models/player.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment.development';
import { Decrypt } from '../../../services/crypt.service';

@Component({
  selector: 'app-player-videos',
  templateUrl: './player-videos.component.html',
  styleUrl: './player-videos.component.scss'
})
export class PlayerVideosComponent implements OnInit{
  fifaService = inject(FifaService);
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);
  cryptService = inject(Decrypt);
  

  playerId: string | null = null;
  player?: Player = {} as Player;
  videoSanitized?: SafeResourceUrl[] = [];
  decripted: string = this.cryptService.decrypt(environment.DATA_PLAYERS);

  ngOnInit(): void {
    this.playerId = this.getID();
    if (this.playerId) {
      this.showPlayerById(this.playerId);
    }
  }

  getID(): string {
    return this.route.snapshot.params['id'];
  }
  //caching the videos
  showPlayerById(id: string): void {
    this.fifaService.getPlayerById(id, this.decripted).subscribe((player) => {
      this.player = player;
        if (this.player?.videoUrl) {
        this.player.videoUrl.forEach((video) => {
          this.videoSanitized?.push(this.sanitizer.bypassSecurityTrustResourceUrl(video));
        })
      }  
    });
  }
}
