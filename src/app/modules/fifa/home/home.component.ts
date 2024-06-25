import { Component, OnInit, inject } from '@angular/core';
import { FifaService } from '../../../services/fifa.service';
import { Router } from '@angular/router';
import { Decrypt } from '../../../services/crypt.service';
import { environment } from '../../../../environments/environment.development';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  fifaService = inject(FifaService);
  router = inject(Router);
  cryptService = inject(Decrypt);


  players: Player [] = [];
  decripted = this.cryptService.decrypt(environment.DATA_PLAYERS)
  ngOnInit() {
    this.allPlayers();
  }

  allPlayers() {
    this.fifaService.getPlayers(this.decripted).subscribe((data) => {
      this.players = data;
    });
  }

  viewPlayerDetails(id: string) {
    this.router.navigate(['fifa', id]);
  }

}
