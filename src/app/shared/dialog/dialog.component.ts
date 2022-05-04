import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogoarticuloComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Articulo) {}

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

}
