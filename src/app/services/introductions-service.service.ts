import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroductionsService {
  
  constructor(private http: HttpClient) { }

  getIntroductionsData(){
    return this.http.get('../../assets/introductions-list.json')
  }
}

