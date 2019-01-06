import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input()
  public id: string;

  public user: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.id) {
      // fetch user from database
      this.user = {};
    } else {
      this.user = {};
    }
  }

  onSubmitHandler() {
    this.http.post('http://localhost:3000/users', this.user).subscribe((res: any) => {
    console.log(res);
    });
    console.log('form submited');
  }

}
