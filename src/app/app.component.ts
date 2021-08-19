import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {meme} from './meme';
//import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memeproyecto';
  public mms:meme[] = [];

  constructor(private http: HttpClient) { }

 onSave():void{
   console.log("Antes");
   this.http.get<any>("https://api.imgflip.com/get_memes").subscribe(response =>{
    this.mms = response.data.memes;
   });
   console.log("Despues");
console.log("Aprete el botn :D");
 }
}
