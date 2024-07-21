import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-sizesavailable',
  templateUrl: './sizesAvailable.component.html',
  styleUrls: ['./sizesAvailable.component.css']
})
export class SizesavailableComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<SizesavailableComponent>,

) {

  }

  ngOnInit(): void {
  }

}
