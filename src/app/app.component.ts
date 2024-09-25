import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponentComponent } from './article-component/article-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wild-blog';
  text = "Je suis une légende (I Am Legend), publié en 1954, est un roman de science-fiction écrit par Richard Matheson. Ce livre est rapidement devenu une œuvre culte pour son approche unique du genre post-apocalyptique, en mêlant horreur, science-fiction et psychologie. L'influence de Je suis une légende a été immense sur la culture populaire, inspirant des générations d'écrivains, de réalisateurs et de créateurs dans le domaine de l’horreur et de la science-fiction."
}
