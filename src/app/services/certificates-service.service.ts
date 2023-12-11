import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private http: HttpClient) { }

  getCertificatesData(){
    return this.http.get('../../assets/certificates-list.json')
  }
}
