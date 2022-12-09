import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { NotificationService } from '../../../services/notification.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  countCategory : any;
  countUser : any;
  constructor(public notifyService: NotificationService,private accountService: AccountService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.countCategories();
    this.countUsers();
  }

  countCategories() {   
   //debugger;
this.accountService.CountCategory().then((response) => {
if (response.code == 200) {
//console.log("response", response)
this.countCategory = response.data;
//console.log("this.countCategory", this.countCategory)
 //this.router.navigate(['/admin/dashboard']);
} else {
  this.countCategory = 0;
}
})

}

countUsers() {   
  //debugger;
this.accountService.CountUser().then((response) => {
if (response.code == 200) {
//console.log("response", response)
this.countUser = response.data;
//console.log("this.countUser", this.countUser)
//this.router.navigate(['/admin/dashboard']);
} else {
 this.countUser = 0;
}
})

}

}
