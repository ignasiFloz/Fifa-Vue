export abstract class CryptContract {
    abstract encrypt(data: string): string;
    abstract decrypt(data: string): string;
}