import { Component, OnInit, inject } from '@angular/core';
import { FifaService } from '../../../services/fifa.service';
import { Router } from '@angular/router';
import { Decrypt } from '../../../services/crypt.service';
import { environment } from '../../../../environments/environment.development';
// import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  fifaService = inject(FifaService);
  router = inject(Router);
  cryptService = inject(Decrypt);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  players: any = [];
  decripted = this.cryptService.decrypt(environment.DATA_PLAYERS)
  ngOnInit() {
    console.log('Password :' + this.decripted);
    this.allPlayers();
  }

  allPlayers() {
    this.fifaService.getPlayers(this.decripted).subscribe((data) => {
      this.players = data;
      
      console.log(this.players)
    });
  }

  viewPlayerDetails(id: string) {
    this.router.navigate(['fifa', id]);
  }

}
