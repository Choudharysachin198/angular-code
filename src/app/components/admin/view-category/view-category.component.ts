import { Component,ViewChild,ElementRef , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { NotificationService } from '../../../services/notification.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CategoryModel } from '../../../models/category-model.model';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  public categoryModel: CategoryModel;
 
  errMsg: boolean = false;
  message: string;   
  loading : boolean = false;
  categoryList : any = [];
  status : number;

  page = 1;
  count : number;
  pageSize:number = 10;

  constructor(public notifyService: NotificationService,private accountService: AccountService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.categoryModel = <CategoryModel>{
      id:'',
      category_name: '',
      category_logo: '',
      status:''
    }

    this.getAllCategories();
  }

  onTableDataChange(event: any){
    this.page = event;
    this.getAllCategories();
  } 

  getAllCategories() {   
   
            //console.log(this.adminModel);  
    //debugger;   
    
    this.accountService.ViewCategory().then((response) => {
      if (response.code == 200) {
        //console.log("response", response)
        this.categoryList = response.data;
        //console.log("this.categoryList", this.categoryList)
        this.count= this.categoryList.length;
         //this.router.navigate(['/admin/dashboard']);
      } else {
        this.count= 0;
        this.notifyService.showError(response.message);
      }
    })
 
  }

  editCategory(catid: any){
    this.router.navigate(['/admin/edit_category/'+catid])
  }

  deleteCategory(catid: any){
    this.categoryModel.id=catid; 
    this.accountService.DeleteCategory(this.categoryModel).then((response) => {
      if (response.code == 200) {
        this.notifyService.showSuccess(response.message);
        setTimeout(() => {
          window.location.reload();
        }, 300);
      } else {
        this.notifyService.showError(response.message);
      }
    })
  }

  updateCategoryStatus(catid: any, catStatus : any){
    this.categoryModel.id=catid; 
    this.categoryModel.status=catStatus; 
    this.accountService.UpdateStatusCategoryById(this.categoryModel).then((response) => {
      if (response.code == 200) {
        this.categoryModel.status = response.data.status;
        //console.log("response status", response)
        this.notifyService.showSuccess(response.message);
        //window.location.reload();
      } else {
        this.notifyService.showError(response.message);
      }
    })
  }

}





