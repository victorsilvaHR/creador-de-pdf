import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'generador-de-pdf';
  pageNumber = 1; 
  ngOnInit(): void {
  
  }

}

