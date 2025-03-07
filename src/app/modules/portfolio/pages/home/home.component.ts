import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component'; //components

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
