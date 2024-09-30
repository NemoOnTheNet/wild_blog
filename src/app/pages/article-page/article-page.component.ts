import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { articlesList } from '../../data/data';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  articleId!: number;
  article: Article | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });

    this.article = articlesList.find((article: Article) => {
      return article.id === this.articleId;
    });
  }
  

}
