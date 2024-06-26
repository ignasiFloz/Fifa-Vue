export  abstract class fifaContract {
    abstract getPlayers(url: string): void;

    abstract getPlayerById(id: string, url: string): void
}
