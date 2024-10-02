import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { articlesList } from '../../data/data';
import { ArticlePageComponent } from "../article-page/article-page.component";
import { ArticleComponentComponent } from "../../components/article-component/article-component.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticlePageComponent, ArticleComponentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
  articles = articlesList;

  messageFromArticle: string = '';

  handleNotificationLike(message: string) {
    this.messageFromArticle = message;
    alert(message)
  }

  
}
