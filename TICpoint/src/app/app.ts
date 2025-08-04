import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Contact, MatTabsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TICpoint');
}
