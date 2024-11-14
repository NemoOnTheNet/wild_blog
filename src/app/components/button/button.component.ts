import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    @Input() backgroundColorButton!: string;
    @Input() name!: string;
    @Output() dataEmitFromButton: EventEmitter<string> = new EventEmitter();

    sendButtonNameToParent(name: string, color: string): void {
        this.dataEmitFromButton.emit(
            'tu as cliqué sur le bouton numéro : ' +
                name +
                ' de couleur ' +
                color
        );
    }
}
