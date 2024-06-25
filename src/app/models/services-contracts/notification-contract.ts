export abstract class NotificationContract {
    abstract showClientError(message: string): void;
    abstract openServerErrorDialog(message: string): void;
    abstract showNonErrorSnackBar(message: string, duration?: number): void;
}