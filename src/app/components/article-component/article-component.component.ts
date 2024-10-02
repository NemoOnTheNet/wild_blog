import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Article } from '../../models/Article.model'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-article-component',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './article-component.component.html',
    styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
    @Input() article!: Article
    @Output() notifyLike: EventEmitter<string> = new EventEmitter<string>()

    sendLike() {
        this.notifyLike.emit("Liké")
    }
}
