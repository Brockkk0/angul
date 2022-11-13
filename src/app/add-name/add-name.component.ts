import { Component, OnInit } from '@angular/core';
import {NameService} from 'C:/Users/Burak/Desktop/angular/src/app/name.service';
import{FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {

  constructor(private name: NameService){ }
    addName = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      birthday: new FormControl('')
});

  ngOnInit(): void {
    
  }
  SaveData(){
    console.log(this.addName.value);
    this.name.saveNameData(this.addName.value);
  }
}
