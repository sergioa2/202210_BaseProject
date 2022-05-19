import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Band } from './band';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getBands(): Observable<Band[]> {
  console.log("servicio corre");
  return this.http.get<Band[]>(this.apiUrl);
}


}
