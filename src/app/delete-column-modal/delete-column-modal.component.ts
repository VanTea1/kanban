import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Column } from '../models/columns.model';

@Component({
  selector: 'app-delete-column-modal',
  templateUrl: './delete-column-modal.component.html',
  styleUrls: ['./delete-column-modal.component.scss']
})
export class DeleteColumnModalComponent {
  selectedColumn: Column | null = null;

  constructor(
    public dialogRef: MatDialogRef<DeleteColumnModalComponent>,
    @Inject(MAT_DIALOG_DATA) public columns: Column[]
  ) {}

  onCancel(): void {
    this.dialogRef.close(); 
  }
}
