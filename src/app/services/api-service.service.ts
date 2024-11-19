import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/Article.model';

@Injectable({
    providedIn: 'root',
})
export class ApiServiceService {
    private apiUrl: string = 'http://localhost:3000/articles';

    private http: HttpClient = inject(HttpClient);

    getArticle(): Observable<Article[]> {
        return this.http.get<Article[]>(this.apiUrl);
    }
    getArticleById(id: number): Observable<Article> {
        return this.http.get<Article>(`${this.apiUrl}/${id}`);
    }
}
