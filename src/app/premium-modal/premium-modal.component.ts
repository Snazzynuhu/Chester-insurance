import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-premium-modal',
  template: `
    <h2 class="centre-text" mat-dialog-title>Insurance Premium</h2>
    <div mat-dialog-content>
      <p class="centre-text">Total premium payable: £{{ data.premium.toFixed(2) }}</p>
    </div>
    <div mat-dialog-actions>
      <button class="close-btn" mat-button [mat-dialog-close]="'close'">Close</button>
    </div>
  `,
})
export class PremiumModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { premium: number }) {}
}
