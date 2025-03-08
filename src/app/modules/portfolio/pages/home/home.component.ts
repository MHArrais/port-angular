import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component'; //components
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    KnowledgeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
