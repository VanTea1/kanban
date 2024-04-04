import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddColumnModalComponent } from './add-column-modal/add-column-modal.component';
import { DeleteColumnModalComponent } from './delete-column-modal/delete-column-modal.component';
import { ChangeColumnNameModalComponent } from './change-name-column/change-name-column.component';
import { ChangeItemModalComponent } from './change-item-modal/change-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AddItemModalComponent,
    AddColumnModalComponent,
    DeleteColumnModalComponent,
    ChangeColumnNameModalComponent,
    ChangeItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
