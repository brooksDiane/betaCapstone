import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-collection-header',
  templateUrl: './collection-header.component.html',
  styleUrls: ['./collection-header.component.css']
})
export class CollectionHeaderComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }


  signOut() {
    this.auth.signOut();
  }

}
