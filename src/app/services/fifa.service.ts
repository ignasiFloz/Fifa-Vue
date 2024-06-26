import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Player } from '../models/player.model';
import { inject } from '@angular/core';
import { FifaModule } from '../modules/fifa/fifa.module';
import { fifaContract } from '../models/services-contracts/fifa-contract';

@Injectable({
  providedIn: FifaModule
})

export class FifaService extends fifaContract{
  private http = inject(HttpClient)
  
  getPlayers(url : string): Observable<Player[]> {
    return this.http.get<Player[]>(url)
  }

  getPlayerById(id: string, url : string): Observable<Player | undefined> {
    return this.getPlayers(url).pipe(
      map(players => {
        
        return players.find(player => player.id === id);
      })
    );
  }

  
}
