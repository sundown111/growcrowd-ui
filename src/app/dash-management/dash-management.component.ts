import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-management',
  templateUrl: './dash-management.component.html',
  styleUrls: ['./dash-management.component.css']
})
export class DashManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  closed: boolean = false;
  
  toggleSidenav() {
    this.closed = !this.closed;
  }
  
  

}
