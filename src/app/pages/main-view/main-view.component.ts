import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/columns.model';
import { MatDialog } from '@angular/material/dialog';
import { AddItemModalComponent } from 'src/app/add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
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


  addItem() {
    const dialogRef = this.dialog.open(AddItemModalComponent, {
      width: '250px',
      data: this.board.columns 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const selectedColumn: Column = result.column;
        const taskName: string = result.taskName;
        if (selectedColumn && taskName) {
          selectedColumn.task.push(taskName); 
        }
      }
    });
  }
}