import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Authorization/auth.service';
import { Userprofile } from 'src/app/interface/userprofile';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  @Input() openNav!: Boolean;
  @Input() Uprofile!: Userprofile;
  @Output() openSideNavFromChild = new EventEmitter();
  baseUrl = environment.baseUrl;

  constructor(private router: Router, private _authservice: AuthService,) {}

  ngOnInit(): void {}

  openFromChild() {
    this.openSideNavFromChild.emit();
  }

  signout(){
    this._authservice.logout();
  }
}
