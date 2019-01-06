import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users = [];

  public displayedColumns = [ 'id', 'firstName', 'lastName', 'updatedAt', 'createdAt', 'actions' ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe((res: any) => {
      this.users = res;
    });
  }

}
