import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editora-form',
  templateUrl: './editora-form.component.html',
  styleUrls: ['./editora-form.component.css']
})
export class EditoraFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: [null],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onCancel() {

  }

}
