import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-multa-dialog',
  templateUrl: '../multa-dialog/multa-dialog.component.html',
  styleUrls: ['../multa-dialog/multa-dialog.component.css']
})
export class MultaDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
  }

}
