import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-item-modal',
  templateUrl: './change-item-modal.component.html',
  styleUrls: ['./change-item-modal.component.scss']
})
export class ChangeItemModalComponent {
  task: any;

  constructor(
    public dialogRef: MatDialogRef<ChangeItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.task = { ...data.task };
  }

  onSave(): void {
    if (this.task.taskName != null) {
      this.dialogRef.close(this.task);
    }
    else {
      this.dialogRef.close();
    }

  }

  onCancel(): void {
    this.dialogRef.close();
  }
}