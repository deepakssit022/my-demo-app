import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from "../../services/data.services";
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData: any;

  constructor(private data: DataService, private location: Location, public dialog: MatDialog) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.userData = message)
    console.log("in user component", this.userData)
  }

  openDialog(element): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: element
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}


@Component({
  selector: 'edit_user_dialog',
  templateUrl: './edit_user_dialog.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  checkData(data);

  checkData(data){
    console.log(data)

  }
}