import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Player } from '../models/player.model';
import { inject } from '@angular/core';
import { FifaModule } from '../modules/fifa/fifa.module';
import { FifaContract } from '../models/services-contracts/fifa-contract';

@Injectable({
  providedIn: FifaModule
})

export class FifaService extends FifaContract{
  private http = inject(HttpClient)
  
  getPlayers(url : string): Observable<Player[]> {
    return this.http.get<Player[]>(url)
  }

  getPlayerById(id: string, url : string): Observable<Player | undefined> {
    this.getPlayers(url).forEach(player => console.log(player));
    return this.getPlayers(url).pipe(
      map(players => {
        
        return players.find(player => player.id === id);
      })
    );
  }



}
