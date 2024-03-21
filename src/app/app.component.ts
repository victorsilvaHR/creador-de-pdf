import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'generador-de-pdf';
  pageNumber = 0; // Número de página actual

  ngOnInit(): void {
  
  }

  getGenerar() : void{
  const doc = new jsPDF();

  doc.setFillColor(0, 242, 190);
  doc.rect(0, 0, 220, 10, "F");
  doc.setTextColor(0, 200, 0);
  doc.text("HOLA", 90, 30);
  this.addPageContent(doc, "Contenido de la segunda página");
  doc.setFillColor(255, 0, 0 ); 

    
  // Agrega más páginas según sea necesario

  this.addPageContent(doc, "hola");
  doc.setFillColor(300, 200, 200); // Establece el color de relleno (en este caso, gris claro)
  this.addImage(doc);
  doc.text("ADIOS",35, 10);


  

  doc.save("multipagina.pdf");
  
}
addPageContent(doc: jsPDF, text: string): void {
  // Cambia el tamaño de la fuente y agrega texto
  doc.setFontSize(12);
  doc.text(text, 10, 10);

  // Agrega una nueva página si no es la última página
  if (this.pageNumber < 1) { // Cambia este número según cuántas páginas desees agregar
    doc.addPage();
  }
}
addImage(doc: jsPDF): void {
  // Carga la imagen desde la carpeta assets
  const img = new Image();
  const img2 = new Image();

  img.src = 'assets/list.png';
  img2.src = 'assets/list.png';


  // Dibuja la imagen en el PDF
  doc.addImage(img, 'list', 15, 40, 180,180);
  doc.addImage(img2, 'list', 15, 40, 40, 10); // Coordenadas y dimensiones de la imagen
}

}

