import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Service1Service } from './service1.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent , RouterOutlet , CommonModule , RouterModule  ],
  providers : [ Service1Service ] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'mynew';
  carry : string  =   '' ;
  joke: string = '';
  title = 'Dad jokes';
  constructor(private  jokeservice :  Service1Service ) { }  
  fetchJoke(): void {
    this.jokeservice.getJoke().subscribe((data: any) => {
      this.joke = data.joke;
    });
  }
}
