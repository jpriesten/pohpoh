import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  //https://pohpoh.herokuapp.com/
  //http://localhost:3000/
  public BASE_URL = "https://pohpoh.herokuapp.com/"; 
}
