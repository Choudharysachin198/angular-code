import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { environment } from '../../environments/environment';
//import { Usermodel } from '../models/usermodel.model';
import { AdminModel } from '../models/admin-model.model';
import { CategoryModel } from '../models/category-model.model';
import { Privacy } from '../models/privacy-model.model';
import { Feedback } from '../models/feedback-model.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  //private InsertUserURL = environment.apiBaseUrl + "createUser";
  private LoginAdminURL = environment.apiBaseUrl + "login"; 
  private AddCategoryURL = environment.apiBaseUrl + "createCategory";
  private CategorylistURL = environment.apiBaseUrl + "getAllCategory";
  private ViewCategoryByIdURL = environment.apiBaseUrl + "viewCategory";
  private DeleteCategoryByIdURL = environment.apiBaseUrl + "deleteCategory";
  private GetCategoryByIdURL = environment.apiBaseUrl + "getCategoryById";
  private CountCategoryURL = environment.apiBaseUrl + "countCategory";
  private CountUserURL = environment.apiBaseUrl + "countUser";
  private UpdateStatusCategoryByIdURL = environment.apiBaseUrl + "updateCategoryStatus";
  
  private GetPrivacyURL = environment.apiBaseUrl + "getAllTerms";
  private AddPrivacyURL = environment.apiBaseUrl + "termsAndConditions";
  private UpdatePrivacyURL = environment.apiBaseUrl + "updateTerms";
  
  private FeedbacklistURL = environment.apiBaseUrl + "getAllContact";
  private DeleteFeedbackByIdURL = environment.apiBaseUrl + "deleteContact";
  

  constructor(private baseHttpService: BaseHttpService) { }
  
  // InsertUser(userDetail: Usermodel): Promise<any> {
  //   return this.baseHttpService.Post(this.InsertUserURL, userDetail)
  //     .then(function (response) {
  //       return response;
  //     });
  // }
 
  AdminLogin(adminlogin: AdminModel): Promise<any> {
    return this.baseHttpService.Post(this.LoginAdminURL, adminlogin)
      .then(function (response) {
        return response;
      });
  } 

  AddCategory(addlogin: CategoryModel): Promise<any> {
    return this.baseHttpService.Post(this.AddCategoryURL, addlogin)
      .then(function (response) {
        return response;
      });
  } 

  AddPrivacy(addPrivacy: Privacy): Promise<any> {
    return this.baseHttpService.Post(this.AddPrivacyURL, addPrivacy)
      .then(function (response) {
        return response;
      });
  } 
  

  ViewCategory(): Promise<any> {
    return this.baseHttpService.Get(this.CategorylistURL)
      .then(function (response) {
        return response;
      });
    }  

    ViewCategoryByID(editCategory: CategoryModel): Promise<any> {
      return this.baseHttpService.Post(this.ViewCategoryByIdURL, editCategory)
        .then(function (response) {
          return response;
        });
    } 

    ViewFeedback(): Promise<any> {
      return this.baseHttpService.Get(this.FeedbacklistURL)
        .then(function (response) {
          return response;
        });
      }  
  

    

    DeleteCategory(deleteCategory: CategoryModel): Promise<any> {
      return this.baseHttpService.Post(this.DeleteCategoryByIdURL, deleteCategory)
        .then(function (response) {
          return response;
        });
    } 

    DeleteFeedbackById(deleteFeedback: Feedback): Promise<any> {
      return this.baseHttpService.Post(this.DeleteFeedbackByIdURL, deleteFeedback)
        .then(function (response) {
          return response;
        });
    } 


    
    
    GetCategoryById(getCategoryById: CategoryModel): Promise<any> {
      return this.baseHttpService.Post(this.GetCategoryByIdURL, getCategoryById)
        .then(function (response) {
          return response;
        });
    } 

    CountCategory(): Promise<any> {
      return this.baseHttpService.Get(this.CountCategoryURL)
        .then(function (response) {
          return response;
        });
      }  
  
      CountUser(): Promise<any> {
        return this.baseHttpService.Get(this.CountUserURL)
          .then(function (response) {
            return response;
          });
        }  
      
        UpdateStatusCategoryById(updateStatusCategoryById: CategoryModel): Promise<any> {
          return this.baseHttpService.Post(this.UpdateStatusCategoryByIdURL, updateStatusCategoryById)
            .then(function (response) {
              return response;
            });
        } 

        UpdatePrivacy(updatePrivacy: Privacy): Promise<any> {
          return this.baseHttpService.Post(this.UpdatePrivacyURL, updatePrivacy)
            .then(function (response) {
              return response;
            });
        } 

        
        GetPrivacy(): Promise<any> {
          return this.baseHttpService.Get(this.GetPrivacyURL)
            .then(function (response) {
              return response;
            });
          }  

        

}
