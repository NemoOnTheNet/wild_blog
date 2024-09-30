import { Component } from '@angular/core';
import { ArticleComponentComponent } from '../../article-component/article-component.component';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponentComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

}
