import { Injectable } from "@angular/core";

const STOREID = "SID";


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

    public setStoreId(data:string) {
        window.localStorage.removeItem(STOREID);
        window.localStorage.setItem(STOREID, data);
      }
      public getStoreId(): string {
        return localStorage.getItem(STOREID);
      }

}