import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
    private _titleService: Title,
    private _authService: AuthService
    
    ) { }

  ngOnInit() {
  }
  get isLoggedIn() { return this._authService.isLoggedIn(); }
  
  setPageTitle(title: string) {
    this._titleService.setTitle(title);

}
}
