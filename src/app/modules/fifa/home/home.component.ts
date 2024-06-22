import { Component, OnInit, inject } from '@angular/core';
import { FifaService } from '../../../services/fifa.service';
import { Router } from '@angular/router';
// import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  fifaService = inject(FifaService);
  router = inject(Router);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  players: any;
  
  ngOnInit() {
    this.allPlayers();
  }

  allPlayers() {
    this.fifaService.getPlayers().subscribe((data) => {
      this.players = data;
      
      console.log(this.players.players)
    });
  }

  viewPlayerDetails(id: string) {
    this.router.navigate(['fifa', id]);
  }

}
