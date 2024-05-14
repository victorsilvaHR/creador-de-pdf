import { Injectable, Input } from '@angular/core';
import { jsPDF } from "jspdf";
import { UtilService } from '../utils/util.service';
import accounting from 'accounting';
import { Cotizacion } from '../modelos/cotizacion';

@Injectable({
    providedIn: 'root'
})
export class GenerarPDF  {
    
    constructor (
        private utilService: UtilService,
    ){}
 
    pdfArmado(piezas:any) : void {
        piezas = [
            {
                "peso": "Hasta 33 Toneladas",
                "medidas": {
                    "largo": "15",
                    "ancho": 3,
                    "alto": 4
                },
                "referencia": "123456",
                "destino": "Aguascalientes"
            },
            {
                "peso": "Hasta 46 Toneladas",
                "medidas": {
                    "largo": 11.2,
                    "ancho": 1.15,
                    "alto": 1.37
                },
                "referencia": "ff",
                "destino": "Aguascalientes"
            },
            // {
            //     "peso": "Hasta 33 Toneladas",
            //     "medidas": {
            //         "largo": "15",
            //         "ancho": 3,
            //         "alto": 4
            //     },
            //     "referencia": "123456",
            //     "destino": "Aguascalientes"
            // },
            // {
            //     "peso": "Hasta 33 Toneladas",
            //     "medidas": {
            //         "largo": "15",
            //         "ancho": 3,
            //         "alto": 4
            //     },
            //     "referencia": "123456",
            //     "destino": "Aguascalientes"
            // },
        ]
        let piezasPrecios: Cotizacion[] = []; // Agregando precios
        piezas.forEach(el => {
            piezasPrecios.push(this.utilService.calcularCosto(el));
        })
        const doc = new jsPDF();
        const userData = JSON.parse(sessionStorage.getItem('user')+'');
        const currentDate = this.utilService.formartDate();
      
        doc.addImage("/assets/msuperior.png",0,0,214, 28);
            
        doc.setFillColor(238, 40, 60);
        doc.rect(0, 28, 55, 5, "F");
        doc.setFillColor(238, 40, 60);
        doc.triangle(55, 28, 55, 33, 60, 28, "F");
        doc.setFontSize(12),
        doc.setTextColor("white");
        doc.text(`${currentDate}`, 8, 32);
            
        doc.setTextColor("black");
        doc.text("Empresa del Cliente:"+ userData.company, 7, 44);
        doc.text("Cliente:"+ userData.name, 7.5, 49);
        doc.text("Referencia: " + piezas[0].referencia,7,54);

        doc.setFontSize(11)
        doc.setFillColor(30, 22, 63); // Color Origen
        doc.rect(7, 63, 80, 5, "F");
        doc.setTextColor("white");
        doc.text("Origen: Veracruz. Ver", 8, 66.5);
            
        doc.setFillColor(54, 48, 113); // Color Destino
        doc.rect(7, 68, 110, 5, "F");
        doc.setTextColor("white");
        doc.text("Destino: " + piezas[0].destino, 8, 72);
        let altura = 0;

        piezasPrecios.forEach(pieza => {
            const numFormat = accounting.formatNumber(Number(pieza.precio));
            console.log(numFormat);
            let numeroATexto = this.utilService.numeroALetras(Number(pieza.precio));
            console.log(numeroATexto);
                
            doc.setFillColor(30, 22, 63);
            doc.rect(7, 80+altura, 150, 20, "F");
            doc.setTextColor("white");
            doc.text("1 Pieza o Conjunto de Piezas que en total tiene las sig medidas.", 8, 86+altura);
            doc.text("Largo: " + pieza.medidas.largo,8,90+altura);
            doc.text("Ancho: " + pieza.medidas.ancho,34,90+altura);
            doc.text("Alto: " + pieza.medidas.alto,58,90+altura);
            doc.text("Peso: " + pieza.peso , 78, 90+altura);
            // doc.text("No. Referencia, Correo, Cotizacion: " , 11, 86+altura);
            // doc.text(pieza.referencia ,11,92+altura);
                        
            doc.setFillColor(54, 48, 113);
            doc.rect(23, 102+altura, 165, 6, "F");
            doc.setTextColor("white");
            doc.text("$ " +`${numFormat}`+" (" +`${numeroATexto}`+" PESOS 00/100) + I.V.A" , 26, 106+altura);
            doc.setLineWidth(0.5)
            doc.line(18, 100 +altura, 18, 105 + altura);
            doc.line(18, 105 +altura, 24, 105 + altura);

            altura += 36;
        }); 
  
        doc.addImage("/assets/minferior.png",0,270,210, 30);
        doc.addPage();
            
        doc.addImage("/assets/msuperior2.png",0,0,210, 30);
                
        doc.setFontSize(12);
       
        doc.setFillColor(30, 22, 63);
        doc.rect(10, 45, 55, 7, "F");
        doc.setTextColor("white");
        doc.text("Equipo a Utilizar:", 13, 50);
            
        doc.setTextColor("black");
        doc.text("Lowboy / CamaBaja", 10, 63);
        doc.text("Permiso SCT", 10, 68);
        doc.text("Carros Piloto ( en caso de ). ",10,73)
            
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
        let y = 90;
            
        lines.forEach((line: string) => { 
        doc.text(line, 10, y);
        y += lineHeight;    
        });
        doc.setFontSize(12)
        doc.setTextColor("red");
        doc.text("- En caso de contenedor, se recomienda se asegure contra daños y/o robo por cuenta del interesado.", 13, 168);
        doc.text("LARP Transport no se hara responsable por costos del contenedor en caso de robo.", 13, 173);
            
        doc.setFontSize(44)
        doc.setTextColor(30, 22, 63);
        doc.setFont("arial","bold");
        doc.text("26 Años", 60, 252);
        doc.text("Tranportando Mexico!", 35, 265);
        doc.addImage("/assets/minferior2.png",0,270,210, 30);

        const pdfBlob = new Blob([doc.output("blob")], { type: "application/pdf" });
        const pdfURL = URL.createObjectURL(pdfBlob);
        window.open(pdfURL, '_blank');
        const userName =  userData.email?.split('@')[0];   
        const fileName = `${userName}${this.utilService.currentDateTime()}.pdf`;
        const pdfFile = new File([pdfBlob], fileName);
        // doc.save(fileName);
        // doc.addPage();
        this.utilService.subirArchivo(pdfFile, fileName);        
    }
}