import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(
    private http:HttpClient
  ) { }
  url = "http://localhost:3000/person";
  getName(){
    return this.http.get(this.url);
  }
  saveNameData(data: any){
    console.log(data);
    return this.http.post(this.url,data).subscribe( (result) => {
    console.log(result);
  });
}
}