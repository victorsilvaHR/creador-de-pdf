import { Injectable, Input } from '@angular/core';
import { jsPDF } from "jspdf";
import { UtilService } from '../utils/util.service';
import accounting from 'accounting';

@Injectable({
    providedIn: 'root'
})
export class GenerarPDF  {
    
    constructor (private utilService: UtilService){}
   
 
    pdfArmado(pdf:any) : void {
        console.log(pdf)
        const {
            destino,
            caracteristicas,
            pilotos,
            peso,
            alto,
            largo,
            ancho,
        } = pdf
        const doc = new jsPDF();
        const currentDate = this.utilService.formartDate();
        let numero = 105325;
        let numeroFormateado = accounting.formatNumber(numero);
        console.log(numero.toLocaleString());
        let numeroATexto = this.utilService.numeroALetras(numero);
        console.log(numeroATexto);
      
        doc.addImage("/assets/canacar.png",0,0,220, 30);
            
        doc.setFillColor(250, 0, 0);
        doc.rect(0, 30, 80, 8, "F");
        doc.setTextColor("white");
        doc.text(`${currentDate}`, 20, 36);
            
        doc.setTextColor("black");
        doc.text("Alvaro Puyol", 10, 55);
        doc.text("SPARBER", 10, 60);
            
        doc.setFillColor(0, 46, 93);
        doc.rect(10, 80, 120, 10, "F");
        doc.setTextColor("white");
        doc.text("Origen:Veracruz. Ver", 10, 87);
            
        doc.setFillColor(2, 47, 136);
        doc.rect(10, 90, 100, 10, "F");
        doc.setTextColor("white");
        doc.text("Destino: " + destino, 10, 97);
            
        doc.setFillColor(0, 46, 93);
        doc.rect(10, 110, 140, 45, "F");
        doc.setTextColor("white");
        doc.text("VAGONES TOLVA", 11, 116);
        doc.text("11.80-2,90-370", 11, 122);
        doc.text("PESO: " + peso , 11, 128);
        doc.text("(LARGO: " + largo+ " x ANCHO: "+ ancho +" x ALTO: "+ alto+")", 11, 135);
        doc.text("No. Referencia, Correo, Cotizacion: ", 11, 142);
      



                    
        doc.setFillColor(0, 46, 93);
        doc.rect(10, 160, 180, 10, "F");
        doc.setFontSize(12.5)
        doc.setTextColor("white");
        doc.text("$" +`${numeroFormateado}`+" (" +`${numeroATexto}`+" PESOS 00/100) + I.V.A", 12, 167);
            
        // doc.setTextColor("black");     
        // doc.text("|", 15, 145);
        // doc.text("___", 16, 145);
            
        doc.addImage("/assets/canacar2.png",0,270,210, 30);
        doc.addPage();
            
        doc.addImage("/assets/canacar3.png",0,0,220, 30);
                
        doc.setFontSize(12);
        doc.setFillColor(0, 6, 136);
        doc.rect(10, 40, 120, 10, "F");
        doc.setTextColor("white");
        doc.text("Equipo a Utilizar:", 15, 48);
            
        doc.setTextColor("black");
        doc.text("Lowboy / CamaBaja", 10, 60);
        doc.text("Permiso SCT", 10, 65);
            
        doc.setTextColor("black");
            
        const longText = 
  
  `* Las medidas y pesos proporcionados deberán ser exactos, ya que con estos datos elaboramos el 
   permiso especial ante la SCT y por cualquier diferencia nos lo anulan, procediendo a la detención 
   del veículo y sanción por 500 dias de salario mínimo.
        
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

        const pdfBlob = new Blob([doc.output("blob")], { type: "application/pdf" });
        const pdfURL = URL.createObjectURL(pdfBlob);
        window.open(pdfURL, '_blank');
            
        doc.save("PDF");
        doc.addPage();
        
            
    }
}