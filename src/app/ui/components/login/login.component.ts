import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Login_User_Response } from 'src/app/contracts/User/login_user_response';
import { Login_User } from 'src/app/entities/login_user';
import { UserService } from 'src/app/services/common/models/user.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/ui/custom-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
    private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  async login(usernameOrEmail:string, password:string){
    const loginUser = new Login_User;
    loginUser.password=password;
    loginUser.usernameOrEmail=usernameOrEmail;
    await this.userService.login(loginUser)
      
  }
}
