import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {
 items: any;
 
 @ViewChild("username") username;
  constructor(public http: Http) { }

  ngOnInit() { 
    let data = {
      displina: "ddddd"
    };
    this.http.post('http://localhost:83/fetch_data.php', data).subscribe((res : any) => {
            console.log(res);
            this.items = res;
            console.log(this.items)
          
      });
  }


  


}
