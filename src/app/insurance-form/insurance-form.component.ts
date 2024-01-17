import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PremiumModalComponent } from '../premium-modal/premium-modal.component';
// import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.scss']
})
export class InsuranceFormComponent {
  vehicleTypes = ['Car', 'Motorcycle'];
  selectedVehicleType!: string;
  isUnder25: boolean = false;
  penaltyPoints!: number;
  premiumToPay!: number;
  isModalOpen: boolean = false;

  constructor(public dialog: MatDialog) {}

  calculatePremium(): void {
    this.premiumToPay = 0;
    if (this.isModalOpen) {
      return;
    }

    if (this.selectedVehicleType === 'Car') {
      this.premiumToPay = 305;
    } else if (this.selectedVehicleType === 'Motorcycle') {
      this.premiumToPay = 360;
    } else {
      alert('No vehicle selected. Please select "car" or "motorcycle".');
      return;
    }

    if (this.isUnder25) {
      this.premiumToPay += 0.3 * this.premiumToPay;
    }

    if (this.penaltyPoints > 6) {
      this.premiumToPay += 100;
    }

    const dialogRef = this.dialog.open(PremiumModalComponent, {
      data: { premium: this.premiumToPay }
    });

    dialogRef.afterOpened().subscribe(() => {
      this.isModalOpen = true;
      console.log('The dialog was opended');
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      window.location.reload();
    });
  }
}
export { PremiumModalComponent };

