import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Column } from '../models/columns.model';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent {
  selectedColumn: Column | null = null;
  taskName: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public columns: Column[]
  ) {}

  onCancel(): void {
    this.dialogRef.close(); 
  }

}