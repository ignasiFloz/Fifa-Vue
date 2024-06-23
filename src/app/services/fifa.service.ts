import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { Player } from '../models/player.model';
import { inject } from '@angular/core';
import { FifaModule } from '../modules/fifa/fifa.module';

@Injectable({
  providedIn: FifaModule
})

export class FifaService {
  private http = inject(HttpClient)
  
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(environment.DATA_PLAYERS)
  }

  getPlayerById(id: string): Observable<Player | undefined> {
    this.getPlayers().forEach(player => console.log(player));
    return this.getPlayers().pipe(
      map(players => {
        
        return players.find(player => player.id === id);
      })
    );
  }

}
