import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);

    if (this.user.username == '' || this.user.username == null) {
      //alert('Username is required');
      this.snackBar.open('Username is requerid.', 'OK', {
        duration: 3000,
      });
      return;
    }

    //validate

    //addUser: userService
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert('Successfully added');
        Swal.fire('Successfully done', 'User id is ' + data.id, 'success');
      },
      (error) => {
        //error
        console.log(error);
        //alert('Something went wrong');
        this.snackBar.open('Something went wrong.', 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
