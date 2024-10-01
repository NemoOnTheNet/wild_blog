import { Component } from '@angular/core';
import { Article } from '../../models/Article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { articlesList } from '../../data/data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
  articles = articlesList;

  color = 'red';
}
