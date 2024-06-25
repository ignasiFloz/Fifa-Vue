export abstract class FifaContract {
    abstract getPlayers(url: string): void;
    abstract getPlayerById(id: string, url:string): void;  
}    