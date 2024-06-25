import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-handler-dialog',
  styleUrls: ['./error-handler-dialog.component.scss'],
  templateUrl: './error-handler-dialog.component.html',
})
export class ErrorHandlerDialogComponent {
  public title = 'Network Error';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}