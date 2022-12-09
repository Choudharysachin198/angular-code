import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { NotificationService } from '../../../services/notification.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AdminModel } from '../../../models/admin-model.model';
import { Cookie } from 'ng2-cookies'

//import { ToastrService } from 'ngx-toastr';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public adminModel: AdminModel;
  marked: boolean = false;
  ischecked: boolean = false;
  errMsg: boolean = false;
  message: string;
  cookiedata: any[];
  cookiecheck:any;

  constructor(public notifyService: NotificationService,private accountService: AccountService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.adminModel = <AdminModel>{
      id:'',
      admin_email: '',
      admin_password: ''      
    }

    //this.showSuccess();

    this.checkcookies();
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  checkcookies(){
    // this.cookiecheck=this.cookieService.getAll();
    //console.log(this.cookiecheck);
    if(this.cookiecheck==null){
      
    }else{
      this.adminModel.id=this.cookiecheck.adminid;
      this.adminModel.admin_email=this.cookiecheck.adminemail;
      this.adminModel.admin_password=this.cookiecheck.adminpassword;
    }
  }

  loginadmin(){
    //console.log(this.adminModel);  
    //debugger;   
    
    this.accountService.AdminLogin(this.adminModel).then((response) => {
      if (response.code == 200) {
        //console.log("response", response)
        //debugger;
        //console.log("admin id>>>>>>>>>>>>>>",response.result[0]._id);
        Cookie.set("AdminId",response.data._id);      
        
        localStorage.setItem('token', response.data.jwtToken);
 /*        this.cookieService.set("adminid",response.result[0]._id);
        this.cookieService.set("adminemail",response.result[0].admin_email);
        this.cookieService.set("adminpassword",response.result[0].admin_password); */
      
        // -------- For Check Login Type Status ----------
        if(localStorage.getItem('token')){
          //console.log("token", localStorage.getItem('token'))
          this.notifyService.showSuccess(response.message);
          this.router.navigate(['/admin/dashboard']);
        }
         
      } else {
        this.notifyService.showError(response.message);
      }
    })
  //   if (this.marked == true) {
  //     this.accountService.AdminLogin(this.adminModel).then((response) => {
  //       if (response.code == 200) {
  //         //debugger;
  //         //console.log("admin id>>>>>>>>>>>>>>",response.result[0]._id);
  //         Cookie.set("AdminId",response.result[0]._id);      
          
  //         localStorage.setItem('token', response.result[0].jwtToken);
  //  /*        this.cookieService.set("adminid",response.result[0]._id);
  //         this.cookieService.set("adminemail",response.result[0].admin_email);
  //         this.cookieService.set("adminpassword",response.result[0].admin_password); */
        
  //         // -------- For Check Login Type Status ----------
  //           this.router.navigate(['/admin/dashboard']);
  //       } else {
  //         this.errMsg = true;
  //         this.message = response.message;
  //       }
  //     })
  //   }else{
  //     this.accountService.AdminLogin(this.adminModel).then((response) => {
  //       if (response.code == 200) {
  //         localStorage.setItem('token', response.result[0].jwtToken);
          
  //         /* this.cookiecheck=this.cookieService.getAll(); */
  //         if(this.cookiecheck==null){
  //           // -------- For Check Login Type Status ----------
  //             this.router.navigate(['/admin/dashboard']);
  //         }else{
  //     /*       this.cookieService.deleteAll(); */
  //           // -------- For Check Login Type Status ----------
  //           this.router.navigate(['/admin/dashboard']);
  //         }
  //       } else {
  //         this.errMsg = true;
  //         this.message = response.message;
  //       }
  //     })
  //   }
  }

}
