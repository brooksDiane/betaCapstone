import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserData } from 'src/types';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css']
})
export class ProfilePopupComponent implements OnInit {
  constructor(private authService: AuthService) { }
  user: UserData | undefined;

  ngOnInit(): void {
    this.authService.getUserData$().subscribe(data => { this.user = data });
  }

  signOut() {
    this.authService.signOut();
  }

}
