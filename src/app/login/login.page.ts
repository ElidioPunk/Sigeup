import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import { Http, Headers, RequestOptions } from "@angular/http";


//import { HttpClient } from '@angular/common/http' ;
import { NavController, AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild("username") username;
  @ViewChild("password") password;
  data: string;
  items: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController) { }

  ngOnInit() {
  }
  signUp() {
    //this.navCtrl.navigateForward('');
  }
  entrar() {

    //// check to confirm the username and password fields are filled

    if (this.username.value == "") {

      //alert user

        
    } else

    if (this.password.value == "") {

      // alert Pass

    } else {

     /* var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({
        headers: headers
      });*/

      let data = {
        username: this.username.value,
        password: this.password.value
      };

      

        this.http.post('http://localhost:83/login.php', data).subscribe((res : any) => {
            console.log(res);
            this.items = res;
            
          if(res._body =="Your Login success"){
            this.navCtrl.navigateForward('../app.component.html');
          }else{
            this.navCtrl.navigateForward('../app.component.html');
          }
          
      });

      
    
  }}

}
