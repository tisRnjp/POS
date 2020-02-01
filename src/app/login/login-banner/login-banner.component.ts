import { Component, OnInit } from '@angular/core';
import { LoginBanner } from 'src/app/model/login-banner';

@Component({
  selector: 'app-login-banner',
  templateUrl: './login-banner.component.html',
  styleUrls: ['./login-banner.component.css']
})
export class LoginBannerComponent implements OnInit {
  banner: LoginBanner = new LoginBanner(
    "Best POS System in world!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim accusantium hic vitae odio numquam sunt consequuntur eaque a nostrum cupiditate fugiat suscipit tempore, deleniti necessitatibus ratione est earum id.",
    "Easy to use. Easy to use."
  );
  constructor() { }

  ngOnInit() {
  }

}
