import { Component } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Language() lang: string;
  search = 'search';
  title = 'angular-with-ff-webcomponents';
}
