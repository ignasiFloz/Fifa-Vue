import { IPlayer } from "./iplayer.interface";
import { Person } from "./person.model";
export class Player extends Person implements IPlayer{
    
    shotPower: number;
    penalties: number;
    longPassing: number;
    shortPassing: number;
    dribbling: number;
    vision: number;
    ballControl: number;
    imageUrl: string;
    cardUrl: string;
    videoUrl: string[];

    constructor(player: IPlayer & Person){
        super(player);
        this.shotPower = player.shotPower;
        this.penalties = player.penalties;
        this.longPassing = player.longPassing;
        this.shortPassing = player.shortPassing;
        this.dribbling = player.dribbling;
        this.vision = player.vision;
        this.ballControl = player.ballControl;
        this.imageUrl = player.imageUrl;
        this.cardUrl = player.cardUrl;
        this.videoUrl = player.videoUrl;
    }
 
}