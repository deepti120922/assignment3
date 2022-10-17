import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AppComponent implements OnInit {

  age1: any;
  showAge: number | undefined;
  title = 'Assignment3';
  basicForm = new FormGroup(
    {
      fname: new FormControl("", [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z]+$')]),
      mname: new FormControl("", [Validators.pattern('[a-zA-Z]+$'), Validators.maxLength(50)]),
      lname: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]+$'), Validators.maxLength(50)]),
      relation: new FormControl("Self", [Validators.required]),
      gender: new FormControl("Male", [Validators.required]),
      dob: new FormControl("", [Validators.required]),
      age: new FormControl(""),
      dobProof: new FormControl("Adhaar", [Validators.required]),
      nationality: new FormControl("Indian", [Validators.required]),
      religion: new FormControl("", [Validators.required]),
      caste: new FormControl("", [Validators.required]),
      bureau: new FormControl("No", [Validators.required]),
      income: new FormControl("Yes", [Validators.required]),
      contact: new FormControl("", [Validators.required]),
      marital: new FormControl("", [Validators.required]),
      qualification: new FormControl("", [Validators.required]),
      detailQualification: new FormControl("", [Validators.required]),
      ffname: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]+$'), Validators.maxLength(50)]),
      fmname: new FormControl("", [Validators.pattern('[a-zA-Z]+$'), Validators.maxLength(50)]),
      flname: new FormControl("", [Validators.pattern('[a-zA-Z]+$'), Validators.maxLength(50)]),
      lsi: new FormControl("Yes", [Validators.required]),
      negativeProfile: new FormControl("No", [Validators.required]),
      noOfFamilyMembers: new FormControl("", [Validators.required]),
      noOfEarningMembers: new FormControl("", [Validators.required])
    }
  )
  loginForm() {

    console.log(this.basicForm.value);
    this.basicForm.reset(
      {
      'fname':'',
      'lname':'',
      'mname':'',
      'relation':'Self',
      'gender':'Male',
      'dob':'',
      'age':'',
      'dobProof':'Adhaar',
      'nationality':'Indian',
      'religion':'',
      'caste':'',
      'bureau':'No',
      'income':'Yes',
      'contact':'',
      'marital':'',
      'qualification':'',
      'detailQualification':'',
      'ffname':'',
      'fmname':'',
      'flname':'',
      'lsi':'Yes',
      'negativeProfile':'No',
      'noOfFamilyMembers':'',
      'noOfEarningMembers':''

    });
  }
  get fname() {
    return this.basicForm.get('fname');
  }
  get dob() {
    return this.basicForm.get('dob');
  }
  // ageCalculate(item: any) {
  //   console.log(item.value);
  //   if(this.age='')
  //   this.age1 = item.value;
  //   if (this.age1) {
  //     const convertAge = new Date(this.age1);
  //     const timeDiff = Math.abs(Date.now() - convertAge.getTime());
  //     this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
     
  //   }
  // }
  get age() {
    return this.basicForm.get('age');
  
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    
  }
  open(content: any) {
    this.modalService.open(content);
    
  }
  
}
