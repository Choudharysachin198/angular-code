import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  url: string;
  addcategory: Boolean = false;
  viewcategory: Boolean = false;
  dashboard: Boolean = false;
  add_privacy: Boolean = false;
  view_enquiry: Boolean = false;
  navOpen: Boolean = false;
  navOpen2: Boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.url = this.router.url;  
    this.url = this.route.snapshot.url[0].path;
    //alert(this.url);
    if (this.url.includes("add_category") || this.url.includes("edit_category")) {
      this.addcategory = true;
      this.navOpen = true;
    } else if (this.url.includes("view_category")) {
      this.viewcategory = true;
      this.navOpen = true;
    } else if (this.url.includes("add_privacy")) {
      this.add_privacy = true;
      //this.navOpen2 = true;
    }else if (this.url.includes("view_enquiry")) {
      this.view_enquiry = true;
    }else if (this.url.includes("dashboard")) {
      this.dashboard = true;
      //this.navOpen = true;
    }
  }

}
