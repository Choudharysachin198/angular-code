import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  }


  logout(){
    debugger;
    Cookie.deleteAll();
    localStorage.clear();
    this.router.navigate(['/admin/login']);
  }
}
