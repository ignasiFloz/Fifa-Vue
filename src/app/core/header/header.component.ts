import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private translationService = inject(TranslationService)

  onLanguageChange(event: Event ) {
    const selectedLanguage = (event.target as HTMLInputElement).value ;
    this.translationService.switchLanguage(selectedLanguage);
  }
  
}
