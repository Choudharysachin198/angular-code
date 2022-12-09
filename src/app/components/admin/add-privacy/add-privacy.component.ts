
import { Component,ViewChild,ElementRef , OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { NotificationService } from '../../../services/notification.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Privacy } from '../../../models/privacy-model.model';

@Component({
  selector: 'app-add-privacy',
  templateUrl: './add-privacy.component.html',
  styleUrls: ['./add-privacy.component.scss'],
  
})
export class AddPrivacyComponent implements OnInit {
  htmlContent1 = '';
  htmlContent2 = '';

  public privacyModel: Privacy;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  constructor(public notifyService: NotificationService,private accountService: AccountService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.privacyModel = <Privacy>{
      id:'',
      terms_of_Use: '',
      privacy_policy: '',  
      status: ''     
    
    }

    this.getPrivacy();
  }
  

  getPrivacy(){
    
    this.accountService.GetPrivacy().then((response) => {
      if (response.code == 200) {
        //console.log("response", response);  
        this.privacyModel.id = response.data[4]._id;   
        this.privacyModel.terms_of_Use = response.data[4].terms_of_Use;
        this.privacyModel.privacy_policy = response.data[4].privacy_policy;
      }else{
        this.notifyService.showError(response.message);
      }
       
    })
  }

  onSubmit(){

    //console.log("this.privacyModel.terms_of_Use", this.privacyModel.terms_of_Use)
    //console.log("this.privacyModel.privacy_policy", this.privacyModel.privacy_policy)
    this.accountService.AddPrivacy(this.privacyModel).then((response) => {
      if (response.code == 200) {
        //console.log("response", response);        
          this.notifyService.showSuccess(response.message);
      }else{
        this.notifyService.showError(response.message);
      }
       
    })
  
  }

  updatePrivacy(privacyid :any){
    this.accountService.UpdatePrivacy(this.privacyModel).then((response) => {
      if (response.code == 200) {
        //console.log("response", response);        
          this.notifyService.showSuccess(response.message);
      }else{
        this.notifyService.showError(response.message);
      }
       
    })
  }

}



