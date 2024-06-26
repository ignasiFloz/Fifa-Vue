import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FifaService } from '../../../services/fifa.service';
import { Decrypt } from '../../../services/crypt.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss'
})

export class PlayerDetailsComponent implements OnInit {
  cryptService = inject(Decrypt);
  router = inject(Router)
  route = inject(ActivatedRoute)
  fifaService = inject(FifaService)

  decripted: string = environment.DATA_PLAYERS
  playerId: string | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  playerCard: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.playerId = params.get('id');
      if(this.playerId) {
        this.showPlayerById(this.playerId)
      }
    });
  }

  showPlayerById(id: string): void {
    this.fifaService.getPlayerById(id,this.decripted).subscribe((player) => {
      this.playerCard = player;
    })
  }

  navigateToVideos(id: string): void {
    this.router.navigate(['fifa',id,'videos']);
  }
}
