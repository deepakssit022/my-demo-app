import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent} from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
];
@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class UserModule { }
