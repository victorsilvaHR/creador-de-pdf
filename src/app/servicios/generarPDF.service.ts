import { Injectable } from '@angular/core';
import { jsPDF } from "jspdf";
import { FechaService } from '../utils/formate.date.service';

@Injectable({
    providedIn: 'root'
})
export class GenerarPDF {
    constructor (private fechaService: FechaService){}
    
    pdfArmado(destino:string, caracteristicas:string, pilotos:string) : void {

        const doc = new jsPDF();
        const currentDate = this.fechaService.formartDate();

            
        doc.addImage("/assets/canacar.png",0,0,220, 30);
            
        doc.setFillColor(250, 0, 0);
        doc.rect(0, 30, 80, 8, "F");
        doc.setTextColor("white");
        doc.text(`${currentDate}`, 10, 36);
            
        doc.setTextColor("black");
        doc.text("Alvaro Puyol", 10, 55);
        doc.text("SPARBER", 10, 60);
            
        doc.setFillColor(32, 202, 240);
        doc.rect(10, 80, 120, 10, "F");
        doc.setTextColor("white");
        doc.text("Origen:Veracruz. Ver", 10, 87);
            
        doc.setFillColor(2, 47, 136);
        doc.rect(10, 90, 100, 10, "F");
        doc.setTextColor("white");
        doc.text("Destino: " + destino, 10, 97);
            
        doc.setFillColor(0, 6, 136);
        doc.rect(10, 110, 120, 30, "F");
        doc.setTextColor("white");
        doc.text("VAGONES TOLVA", 11, 116);
        doc.text("11.80-2,90-370", 11, 122);
        doc.text("PESO " + caracteristicas, 11, 128);
        doc.text("(LARGO x ANCHO x ALTO)", 11, 134);
        doc.text("No. de PILOTOS: " + pilotos, 11, 139);

                    
        doc.setFillColor(0, 6, 136);
        doc.rect(25, 141, 180, 10, "F");
        doc.setTextColor("white");
        doc.text("$105.000.00 (Ciento Cinco Mil Pesos 00/100) + I.V.A", 28, 148);
            
        doc.setTextColor("black");     
        doc.text("|", 15, 145);
        doc.text("___", 16, 145);
            
        doc.addImage("/assets/canacar2.png",0,270,210, 30);
        doc.addPage();
            
        doc.addImage("/assets/canacar3.png",0,0,220, 30);
                
        doc.setFillColor(0, 6, 136);
        doc.rect(10, 40, 120, 10, "F");
        doc.setTextColor("white");
        doc.text("Equipo a Utilizar:", 15, 48);
            
        doc.setTextColor("black");
        doc.text("Lowboy / CamaBaja", 10, 60);
        doc.text("Permiso SCT", 10, 65);
            
        doc.setFontSize(12);
        doc.setTextColor("black");
            
        const longText = 
    `* Las medidas y pesos proporcionados deberán ser exactos, ya que con estos datos elaboramos el 
    permiso especial ante la SCT y por cualquier diferencia nos lo anulan, procediendo a la detención del 
    ehículo y sanción por 500 dias de salario mínimo.
        
    * La cotización se basa en las condiciones actuales de ruta: cualquier cambio y/o obstáculo nuevo 
    tendra que someterse a consideración y el precio pactado pudiese cambiar; Ejemplos:
    Tramos de terraceria en malas condiciones, bloqueos, inundaciones, etc.
        
        
    Observaciones:
        
    -Maniobras de carga y descarga son por cuenta del destinatario.
    -Esta mercancia viaja por cuenta y riesco del interesado.
        
            
    -Todos nuestros costos tienen una vigencia de 30 dias.
    -En caso de existir variaciones en las dimensiones se ajustará el precio.
    -El tiempo para carga y/o descarga es de 12HRS. pasado este tiempo se negociarán estadías de
    $5,000mil + I.V.A. por cada 12HRS. por cada unidad.
    -Las condiciones de acceso al punto de entrega deberán de ser optimas para el acceso de nuestro 
    equipo, en caso contrario, cualquier costo extra generado para acceder sera por cuenta del 
    destinatario.`;
            
            
        const maxWidth = 200;
        const lines = doc.splitTextToSize(longText, maxWidth); 
        const lineHeight = 6;
        let y = 80;
            
        lines.forEach((line: string) => { 
        doc.text(line, 10, y);
        y += lineHeight;    
        });
        doc.setFontSize(12)
        doc.setTextColor("red");
        doc.text("- En caso de contenedor, se recomienda se asegure contra daños y/o robo por cuenta del interesado.", 11, 158);
        doc.text("LARP Transport no se hara responsable por costos del contenedor en caso de robo.", 12, 164);
            
        doc.setFontSize(44)
        doc.setTextColor(27,2, 136);
        doc.setFont("arial","bold");
        doc.text("26 Años", 65, 256);
        doc.text("Tranportando Mexico!", 40, 267);
        doc.addImage("/assets/canacar2.png",0,270,210, 30);
            
        doc.save("PDF");
        doc.addPage();
            
    }
}