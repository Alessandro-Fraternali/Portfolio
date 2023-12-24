import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss']
})
export class TitleTextComponent {
  @Input() titleText: any;
  constructor(private translate: TranslateService) {}

  getTranslatedText(key: string): string {
    return this.translate.instant(key);
  }
}
