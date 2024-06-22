import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private translationService = inject(TranslationService)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onLanguageChange(event: any) {
    const selectedLanguage = event.target.value;
    this.translationService.switchLanguage(selectedLanguage);
  }
  
}
