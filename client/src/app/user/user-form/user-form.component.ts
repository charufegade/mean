import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input()
  public id: string;

  public user: any;

  constructor() { }

  ngOnInit() {
    if (this.id) {
      // fetch user from database
      this.user = {};
    } else {
      this.user = {};
    }
  }

  onSubmitHandler() {
    // Update user in database
    console.log('form submited');
  }

}
