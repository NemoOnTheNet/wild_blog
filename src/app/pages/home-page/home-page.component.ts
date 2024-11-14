import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticlePageComponent } from '../article-page/article-page.component';
import { ArticleComponentComponent } from '../../components/article-component/article-component.component';
import { ButtonComponent } from '../../components/button/button.component';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/Article.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        ArticlePageComponent,
        ArticleComponentComponent,
        ButtonComponent,
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
    articles$!: Observable<Article[]>;
    http = inject(HttpClient);

    ngOnInit() {
        this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles');
    }

    handleNotificationLike(message: string) {
        this.messageFromArticle = message;
        alert(message);
    }

    messageFromArticle: string = '';

    name: string[] = ['one', 'two', 'three', 'four', 'five'];
    colors: string[] = ['red', 'green', 'yellow', 'blue', 'lightgreen'];

    dataReceiveFromChild(data: any) {
        alert(data);
    }

    // getArticle() {
    //     this.http
    //         .get<Article[]>('http://localhost:3000/articles');
    // }
}
