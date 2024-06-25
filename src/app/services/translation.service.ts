import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationContract } from '../models/services-contracts/translation-contract';

@Injectable({
  providedIn: 'root'
})
export class TranslationService extends TranslationContract {

  private translateService = inject(TranslateService)

  constructor() {
    super();
    this.translateService.addLangs(['en', 'es']);
    this.translateService.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang);
  }


}
