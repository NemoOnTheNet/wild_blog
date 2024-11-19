import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticlePageComponent } from '../article-page/article-page.component';
import { ArticleComponentComponent } from '../../components/article-component/article-component.component';
import { ButtonComponent } from '../../components/button/button.component';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/Article.model';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, ArticleComponentComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
    apiService = inject(ApiServiceService);
    articles: Article[] = [];

    ngOnInit() {
        this.apiService.getArticle().subscribe((data) => {
            this.articles = data;
        });
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
}
