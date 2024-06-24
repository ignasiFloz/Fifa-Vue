import { Component, Input } from '@angular/core';
import { Player } from '../../../../models/player.model';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrl: './player-stats.component.scss'
})
export class PlayerStatsComponent {
  @Input() playerCard: Player | null = null;

}
