import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-column-name-modal',
  templateUrl: './change-name-column.component.html',
  styleUrls: ['./change-name-column.component.scss']
})
export class ChangeColumnNameModalComponent {
  columnName: string;

  constructor(
    public dialogRef: MatDialogRef<ChangeColumnNameModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { columnName: string }
  ) {
    this.columnName = data.columnName;
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }
}