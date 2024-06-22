import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FifaService } from '../../../services/fifa.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss'
})
export class PlayerDetailsComponent implements OnInit {

  route = inject(ActivatedRoute)
  fifaService = inject(FifaService)
  playerId: string | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.playerId = params.get('id');
      if(this.playerId) {
        this.showPlayerById(this.playerId)
      }
    });
    
  }

  showPlayerById(id: string): void {
    this.fifaService.getPlayerById(id).subscribe((player) => {
      console.log(player, 'player');
    });
  }
}
