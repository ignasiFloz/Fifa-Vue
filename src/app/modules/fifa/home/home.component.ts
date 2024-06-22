import { Component, OnInit, inject } from '@angular/core';
import { FifaService } from '../../../services/fifa.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  fifaService = inject(FifaService);
  
  ngOnInit() {
    this.fifaService.getPlayers().subscribe(
      (players) => {
        console.log(players);
      });
    
    
  }

}
