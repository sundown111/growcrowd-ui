import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiCallService } from 'src/app/_services/api-call.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  switchCtn: HTMLElement;
switchC1: HTMLElement;
switchC2: HTMLElement;
switchCircle: NodeListOf<HTMLElement>;
switchBtn: NodeListOf<HTMLElement>;
aContainer: HTMLElement;
bContainer: HTMLElement;
allButtons: NodeListOf<HTMLElement>;


signInEmail=null;
signInPassword=null;

signUpName=null;
signUpEmail=null;
signUpPassword=null;

signInEmailErrorMsg=null;
signInPasswordErrorMsg=null;

signUpNameErrorMsg=null;
signUpEmailErrorMsg=null;
signUpPasswordErrorMsg=null;

isSubmitted=false;
isLoading=false;
constructor(private _apiCallService:ApiCallService,private _router: Router,private _tokenStorageService:TokenStorageService) { }
private _success = new Subject<string>();



ngOnInit(){
  const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  this.clearVariables();
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  this.clearVariables();
	container.classList.remove("right-panel-active");
});
}

signIn(){
  this.isSubmitted=true;
  this.signInEmailErrorMsg=null;
  this.signInPasswordErrorMsg=null;

  if(this.signInEmail===null||this.signInEmail.length==0){
  this.signInEmailErrorMsg="Email is required";
  }

  if(this.signInPassword===null||this.signInPassword.length==0){
    this.signInPasswordErrorMsg="Password is required";
  }
  
  if(!this.validateEmail(this.signInEmail)){
    this.signInEmailErrorMsg="Email format is not correct";
    return;
  }

  if(this.signInPassword.length<6){
    this.signInPasswordErrorMsg="Password should have minimum 6 characters";
    return;
  }

  if(this.signInEmailErrorMsg!=null||this.signInPasswordErrorMsg!=null){
    return;
  }
 this.signInEmailErrorMsg=null;
 this.signInPasswordErrorMsg=null;
 this.isLoading=true;
 this._apiCallService.getSignInData(this.signInEmail,this.signInPassword).subscribe((res)=>{
    this.isLoading=false;
    console.log(res);
    this._tokenStorageService.setStoreId(res["body"]["id"]);
   // this.router.navigate(['/loading', res["body"]["id"]]);
    this._router.navigate(['/loading', res["body"]["id"]], { queryParams: { uax: 'false' } });

  },(err)=>{
    if(err.status==401){
      this.signInPasswordErrorMsg="Email or password is incorrect";
    }else{
      this.signInPasswordErrorMsg="Something went wrong";
    }
    this.isLoading=false;
  })


}

signUp(){
  this.isSubmitted=true;
  this.signUpEmailErrorMsg=null;
  this.signUpEmailErrorMsg=null;
  this.signUpPasswordErrorMsg=null;

  if(this.signUpEmail===null||this.signUpEmail.length==0){
  this.signInEmailErrorMsg="Email is required";
}

  if(this.signUpPassword===null||this.signUpPassword.length==0){
    this.signInPasswordErrorMsg="Password is required";
  }
  
  if(!this.validateEmail(this.signInEmail)){
    this.signUpEmailErrorMsg="Email format is not correct";
    return;
  }

  if(this.signUpPassword.length<6){
    this.signUpPasswordErrorMsg="Password should have minimum 6 characters";
    return;
  }

  if(this.signUpEmailErrorMsg!=null||this.signUpPasswordErrorMsg!=null){
    return;
  }
this.signUpEmailErrorMsg=null;
this.signUpPasswordErrorMsg=null;
this.isLoading=true;
  this._apiCallService.getSignUpData(this.signUpName, this.signUpEmail,this.signUpPassword).subscribe((res)=>{
    this.isLoading=false;
    this._tokenStorageService.setStoreId(res["body"]["id"]);
    this._router.navigate(['/loading', res["body"]["id"]], { queryParams: { uax: 'false' } });

  },(err)=>{
    if(err.status==401){
      this.signUpPasswordErrorMsg="Email or password is incorrect";
    }else{
      this.signUpPasswordErrorMsg="Something went wrong";
    }
    this.isLoading=false;
  })


}
public changeSuccessMessage(text) {
  this._success.next(`${new Date()} - Message successfully changed.`);
}
 validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

clearVariables(){
  this.signInEmail=null;
  this.signInPassword=null;

  this.signUpName=null;
  this.signUpEmail=null;
  this.signUpPassword=null;

  this.signInEmailErrorMsg=null;
  this.signInPasswordErrorMsg=null;

  this.signUpNameErrorMsg=null;
  this.signUpEmailErrorMsg=null;
  this.signUpPasswordErrorMsg=null;
}
}
