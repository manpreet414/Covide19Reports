import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient) {
  }


  get( ) {

    return this.http.get<any>(`https://coronavirus-19-api.herokuapp.com/countries`)
          .pipe(res => {
              return res;
          });
  }
}
