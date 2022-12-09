import { Component,ViewChild,ElementRef , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { NotificationService } from '../../../services/notification.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CategoryModel } from '../../../models/category-model.model';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @ViewChild("takeCategoryLogo", {static: false})
   
  // this InputVar is a reference to our input.
 
  CategoryLogo: ElementRef;
 
  public categoryModel: CategoryModel;
 
  errMsg: boolean = false;
  message: string;
  validationCategoryName : boolean = false;
  validationCategoryLogo : boolean = false;
  msg: string;
  url: any; 
  imgurl: any; 
  loading : boolean = false;
  getId : any;
  mainheading : string;
  imagefromapi : any;

  constructor(public notifyService: NotificationService,private accountService: AccountService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.categoryModel = <CategoryModel>{
      id:'',
      category_name: '',
      category_logo: ''      
    }

    this.route.paramMap.subscribe(params => {
      this.getId = params.get('id');
      
    });

    if(this.getId == '' || this.getId == null || this.getId == undefined){
      this.imgurl = "https://dummyimage.com/150x150/b8b8b8/fff&text=150*150";
    }

    this.url = this.router.url;    
    if (this.url =="/admin/add_category" ) {
      this.mainheading="Add Category";
    }else {
      this.mainheading="Edit Category";
      }

      this.getCategoryById();

  }

  //images : any = '';

  selectFile(event : any) {
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      //this.images = file;
      this.categoryModel.category_logo = file;
      //console.log("this.images", this.categoryModel.category_logo);
         var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event : any) => { // called once readAsDataURL is completed
        this.imgurl = event.target.result;
      this.validationCategoryLogo = false;
    }
    }
    // if (event.target.files && event.target.files[0]) {

    //   const file = event.target.files[0];
    //   //this.images = file;
    //   this.categoryModel.category_logo = file;
    //   console.log("this.images", this.categoryModel.category_logo);
    //   this.validationCategoryLogo = false;

    //   var reader = new FileReader();

    //   reader.readAsDataURL(event.target.files[0]); // read file as data url

    //   reader.onload = (event : any) => { // called once readAsDataURL is completed
    //     this.url = event.target.result;
    //   }
    // }
  }
      
  

  validationCheck(){
   
    if(this.categoryModel.category_name == '' || this.categoryModel.category_name == null || this.categoryModel.category_name == undefined){
      this.validationCategoryName = true;
    }else{
      this.validationCategoryName = false;
    }
    
  }
  onSubmit() {   
    // debugger; 
    
      if(this.categoryModel.category_name == '' || this.categoryModel.category_name == null || this.categoryModel.category_name == undefined){
        this.validationCategoryName = true;
      }else if(this.categoryModel.category_logo == '' || this.categoryModel.category_logo == null || this.categoryModel.category_logo == undefined){
        //console.log("this.images", this.categoryModel.category_logo)
        this.validationCategoryLogo = true;
      }else{
        let formData = new FormData();
        //for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("category_logo", this.categoryModel.category_logo);
            formData.append("category_name", this.categoryModel.category_name);

            //this.notifyService.showSuccess("success")
            
        //}
         //console.log("formdata", formData);
         //console.log("this.categoryModel.category_name", this.categoryModel.category_name)
         this.loading = true;
        this.http.post('http://13.233.224.121/nodeAPI/createCategory', formData)
            .subscribe((response : any) => {
              if(response.code == 200){
                this.loading = false;
                this.notifyService.showSuccess("success")
                this.categoryModel.category_logo = '';
                this.categoryModel.category_name =''; 
                this.CategoryLogo.nativeElement.value = "";  
                this.imgurl = "https://dummyimage.com/150x150/b8b8b8/fff&text=150*150";           
                console.log('response received is ', response);
              }else{
                this.notifyService.showError("Please Try Again");
              }
             
            })
        

      }
    
  }


  updateCategory(){
    let formData = new FormData();
    //for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("category_logo", this.categoryModel.category_logo);
        formData.append("category_name", this.categoryModel.category_name);
        formData.append("id", this.getId);
        //this.notifyService.showSuccess("success")
        
    //}
     //console.log("formdata", formData);
     //console.log("this.categoryModel.category_name", this.categoryModel.category_name)
     this.loading = true;
    this.http.post('http://13.233.224.121/nodeAPI/updateCategory', formData)
        .subscribe((response : any) => {
          if(response.code == 200){
            this.loading = false;
            this.notifyService.showSuccess(response.message)         
                       
            //console.log('response received is ', response);
          }else{
            this.notifyService.showError("Please Try Again");
          }
         
        })
  }

  getCategoryById(){
    this.categoryModel.id= this.getId; 
    this.accountService.GetCategoryById(this.categoryModel).then((response) => {
      if (response.code == 200) {
        this.categoryModel.category_name = response.data.category_name;
        this.imgurl = response.data.category_logo;
         var image = this.url.split('/')
         this.imagefromapi = image[4]
        //console.log("imagename", this.imagefromapi)
        this.categoryModel.category_logo = this.imagefromapi;
        //this.CategoryLogo.nativeElement.value = this.imagefromapi;
      } else {
        this.notifyService.showError(response.message);
      }
    })
  }
  

}
