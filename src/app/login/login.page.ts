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

  constructor(public navCtrl: NavController, public alertController: AlertController,
    private http: Http, public loadingController: LoadingController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Campos vazios',
      message: 'Preeche o campo vazio.',
      buttons: ['OK']
    });

    await alert.present();}

    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 5000,
        message: 'Please wait...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }
  

  signUp() {
    //this.navCtrl.navigateForward('');
  }
  entrar() {

    //// check to confirm the username and password fields are filled

    if (this.username.value == "") {

      this.presentAlert();

        
    } else

    if (this.password.value == "") {

      this.presentAlert();

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
      
      
        this.presentLoadingWithOptions();
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
