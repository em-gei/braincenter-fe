import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get(`${environment.apiUrl}/account/1`).subscribe(response => {
      console.log(response);
    });
  }

}
