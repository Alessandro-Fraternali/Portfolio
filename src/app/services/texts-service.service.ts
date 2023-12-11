import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  constructor(private http: HttpClient) { }

  getAboutmeText() {
    return this.http.get('../../assets/aboutme.json').pipe(
      tap((textData: any) => console.log('AboutmeText:', textData))
    );
  }
  

  getDetailsText(){
    return this.http.get('../../assets/details-text.json')
  }
}
