import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EXERCISES } from '../mock-exercises';
import { Exercise } from '../models';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent {
  exercises = EXERCISES;
  date_t = (new Date()).toUTCString();
  edit_flag = false;
  id = 0;

  setsForm = this.fb.group(
    {
      id: [''],
      date: [''],
      exercise: [''],
      cadence: [''],
      weights: [''],
      notes: ['']
    }
  )
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    //this.route.queryParams.subscribe(params => {
    //  this.id = Number(params['id']);
    //});
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id == 0) {
      this.edit_flag = false
    } else {
      this.edit_flag = true
    }
    this.setsForm.controls.date.setValue((new Date().toUTCString()))

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // TODO:  Call api to enter data; get data back from db and display in edit mode
    this.edit_flag = true;
    this.setsForm.controls.id.setValue(String(1245));
        
  }

  onUpdate() {
    console.log('In onUpdate');
    // TODO Add update logic
    this.onNewSet();


    
  }

  onNewSet() {
    this.setsForm.controls.id.setValue('');
    this.setsForm.controls.exercise.setValue('');
    this.setsForm.controls.weights.setValue('');
    this.id = 0;
    this.edit_flag = false;
  }

  exerciseTrackBy(index : number, exercise : Exercise){
    return exercise.exercise_id;
  }
}


