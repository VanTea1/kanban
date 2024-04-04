import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/columns.model';
import { MatDialog } from '@angular/material/dialog';
import { AddItemModalComponent } from 'src/app/add-item-modal/add-item-modal.component';
import { AddColumnModalComponent } from 'src/app/add-column-modal/add-column-modal.component';
import { DeleteColumnModalComponent } from 'src/app/delete-column-modal/delete-column-modal.component';
import { ChangeColumnNameModalComponent } from 'src/app/change-name-column/change-name-column.component';
import { ChangeItemModalComponent } from 'src/app/change-item-modal/change-item-modal.component';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {

  
  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column('Research', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  onXButtonClick(task: string, column: Column) {
    if (column && column.task) {
      const taskIndex = column.task.indexOf(task);
      
      if (taskIndex !== -1) {
        column.task.splice(taskIndex, 1);
      }
    }
    this.cdr.detectChanges();
  }


  addItem(column: Column) {
    const dialogRef = this.dialog.open(AddItemModalComponent, {
      width: '250px',
      data: { column: column }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const taskName: string = result.taskName;
        if (taskName) {
          column.task.push(taskName);
        }
      }
    });
  }

  changeItem(taskName: string, column: Column) {
    const taskIndex = column.task.findIndex(task => task === taskName);
    if (taskIndex !== -1) {
      const dialogRef = this.dialog.open(ChangeItemModalComponent, {
        width: '250px',
        data: { task: column.task[taskIndex], column: column }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Update the task directly with the modified taskName
          column.task[taskIndex] = result.taskName;
        }
      });
    }
  }

  addColumn(){
    const dialogRef = this.dialog.open(AddColumnModalComponent, {
      width: '250px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.columnName) {
        const columnName: string = result.columnName;
        const newColumn = new Column(columnName, []);
        this.board.columns.push(newColumn);
      }
    });
  }

  deleteColumn() {
    const dialogRef = this.dialog.open(DeleteColumnModalComponent, {
      width: '250px',
      data: this.board.columns
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const selectedColumn: Column = result;
        const columnIndex = this.board.columns.indexOf(selectedColumn);
        if (columnIndex !== -1) {
          this.board.columns.splice(columnIndex, 1);
        }
      }
    });
  }

  changeNameColumn(column: Column) {
    const dialogRef = this.dialog.open(ChangeColumnNameModalComponent, {
      width: '250px',
      data: { columnName: column.name }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        column.name = result;
      }
    });
  }
}
