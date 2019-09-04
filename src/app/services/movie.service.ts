import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})


export class MovieService {


  url = 'http://www.omdbapi.com/';
  apiKey = '7f1e8d0f';

  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
    .pipe(//Applying different filter functions
      map(results =>{// results['Search'])//We map the result to something else

      console.log('RAW: ', results);
      return results['Search'];
    })
    );

  }

  getDetails(id){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`)
  }
}


export enum SearchType{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
