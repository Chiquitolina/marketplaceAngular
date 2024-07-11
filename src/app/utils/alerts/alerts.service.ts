import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private snackBar: MatSnackBar) { }

  verticalPosition: MatSnackBarVerticalPosition = 'top';

  showAlert(message: string, action:string, duration:number, panelClass:string, productname:string) {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: panelClass,
      verticalPosition: this.verticalPosition
    })
  }
}
