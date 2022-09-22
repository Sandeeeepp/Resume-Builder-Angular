import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'forms';
  SValue:boolean=true
  userdata:any
  name=''
  schoolnames=[
    'ComputerScience','engineering','management'

  ]
  constructor() { }

  ngOnInit(): void {
  }


//   submit(name:string,email:string,PhoneNumber:string){
//     this.Send.message.next(name)
//     this.Send.message1.next(email)
//     this.Send.message2.next(PhoneNumber)

// }
dropDownValue1=''
  SetDropDownValue(drpValue : any) {
    
    this.dropDownValue1 = drpValue.target.value;
  }



  selectValidate(sname:any){
    if(sname==false){
    this.SValue=true
  }else{
    this.SValue=false
  }
  
  }
}
