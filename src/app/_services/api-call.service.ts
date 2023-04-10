import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiCallService {
apiUrl=environment.apiUrl;
    constructor(private http: HttpClient) { }


    getSignInData(email,password) {
        console.log(email,password);
        let url = environment.apiUrl+'/v1/merchant/signIn/email';
        let data = {
          email: email,
          password: password,
        };
        return this.http.post(url, data);
      }
      getSignUpData(name,email,password) {
        console.log(email,password);
        let url = environment.apiUrl+'/v1/merchant/signUp/email';
        let data = {
            name:name,
          email: email,
          password: password,
        };
        return this.http.post(url, data);
      }

    getSummaryDataFromEnquiry(data) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Lexcore-Tenant-Id': localStorage.getItem('Lexcore-Tenant-Id'),
            'Authorization': localStorage.getItem('token')
          })
        };
    
        const url = environment.apiUrl+'/v1/merchant/signIn/email';
        return this.http.post(url,data, httpOptions);
      }
}