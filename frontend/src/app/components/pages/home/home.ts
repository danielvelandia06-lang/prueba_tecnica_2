import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Navigation } from '../../shared/navigation/navigation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, Header, Navigation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
