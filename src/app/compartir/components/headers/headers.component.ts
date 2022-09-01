import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  //? creamos una nueva propierdad
  isAdmin = false;

  //
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  //* Se ingresa una nueva funcion 
  onToggleSidenav(): void{
        
     this.toggleSidenav.emit();
  }

}
