import { Component, inject, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/Article.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  http = inject(HttpClient);

  articleId!: number;
  article: Article | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });

    this.getArticleById(this.articleId)
  }

  getArticleById(id: number){

    this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe(data => {
      this.article = data
    });
  }
}
