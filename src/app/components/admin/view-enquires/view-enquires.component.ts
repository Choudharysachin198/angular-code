import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { NotificationService } from '../../../services/notification.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Feedback } from '../../../models/feedback-model.model';

@Component({
  selector: 'app-view-enquires',
  templateUrl: './view-enquires.component.html',
  styleUrls: ['./view-enquires.component.scss']
})
export class ViewEnquiresComponent implements OnInit {

  public feedbackModel: Feedback; 
  
  feedbackList : any = [];
  status : number;

  page = 1;
  count : number;
  pageSize:number = 5;

  constructor(public notifyService: NotificationService,private accountService: AccountService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.feedbackModel = <Feedback>{
      id:'',
      name: '',
      subject: '',
      message: ''
    }

    this.getAllFeedback();
  }

  onTableDataChange(event: any){
    this.page = event;
    this.getAllFeedback();
  } 

  getAllFeedback(){
    this.accountService.ViewFeedback().then((response) => {
      if (response.code == 200) {
        //console.log("response", response)
        this.feedbackList = response.data;
        //console.log("this.feedbackList", this.feedbackList)
        this.count= this.feedbackList.length;
         //this.router.navigate(['/admin/dashboard']);
      } else {
        this.count= 0;
        this.notifyService.showError(response.message);
      }
    })
  }

 deleteFeedback(feedId: any){
  this.feedbackModel.id = feedId;
  this.accountService.DeleteFeedbackById(this.feedbackModel).then((response) => {
    if (response.code == 200) {
      //console.log("response", response)
      this.notifyService.showSuccess(response.message);
      setTimeout(() => {
        window.location.reload();
      }, 300);
      
       //this.router.navigate(['/admin/dashboard']);
    } else {
      this.count= 0;
      this.notifyService.showError(response.message);
    }
  })
 }

}
