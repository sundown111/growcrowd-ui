import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-data-loading',
  templateUrl: './data-loading.component.html',
  styleUrls: ['./data-loading.component.css']
})
export class DataLoadingComponent implements OnInit {
  id=null;
  constructor(private _route: ActivatedRoute,private _tokenStorageService:TokenStorageService,private _router:Router) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    if(this.id===this._tokenStorageService.getStoreId()){
      this._router.navigate(['/app']);
    }else{
      console.log("wrong")
    }

  }

}
