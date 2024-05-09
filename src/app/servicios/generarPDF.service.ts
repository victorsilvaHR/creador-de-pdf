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
        // piezas = [
        //     {
        //         "peso": "Hasta 33 Toneladas",
        //         "medidas": {
        //             "largo": "15",
        //             "ancho": 3,
        //             "alto": 4
        //         },
        //         "referencia": "123456",
        //         "destino": "Aguascalientes"
        //     },
        //     {
        //         "peso": "Hasta 46 Toneladas",
        //         "medidas": {
        //             "largo": 11.2,
        //             "ancho": 1.15,
        //             "alto": 1.37
        //         },
        //         "referencia": "ff",
        //         "destino": "Aguascalientes"
        //     },
        //     {
        //         "peso": "Hasta 33 Toneladas",
        //         "medidas": {
        //             "largo": "15",
        //             "ancho": 3,
        //             "alto": 4
        //         },
        //         "referencia": "123456",
        //         "destino": "Aguascalientes"
        //     },
        //     {
        //         "peso": "Hasta 33 Toneladas",
        //         "medidas": {
        //             "largo": "15",
        //             "ancho": 3,
        //             "alto": 4
        //         },
        //         "referencia": "123456",
        //         "destino": "Aguascalientes"
        //     },
        // ]
        let piezasPrecios: Cotizacion[] = [];
        piezas.forEach(el => {
            piezasPrecios.push(this.utilService.calcularCosto(el));
        })
        console.log(this.utilService.calcularCosto(piezas[0]));
        const doc = new jsPDF();
        const userData = JSON.parse(sessionStorage.getItem('user')+'');
        const currentDate = this.utilService.formartDate();
      
        doc.addImage("/assets/canacar.png",0,0,220, 28);
            
        doc.setFillColor(250, 0, 0);
        doc.rect(140, 28, 80, 8, "F");
        // doc.roundedRect(140, 28, 80, 8, 1,1, "F");
        doc.setTextColor("white");
        doc.text(`${currentDate}`, 162, 34);
            
        doc.setTextColor("black");
        doc.text(userData.name, 10, 40);
        doc.text(userData.company, 10, 45);
        let altura = 0;

        piezasPrecios.forEach(pieza => {
            const numFormat = accounting.formatNumber(Number(pieza.precio));
            console.log(numFormat);
            let numeroATexto = this.utilService.numeroALetras(Number(pieza.precio));
            console.log(numeroATexto);

            doc.setFontSize(12.5)

            doc.setFillColor(0, 46, 93);
            doc.rect(10, 51+altura, 100, 7, "F");
            doc.setTextColor("white");
            doc.text("Origen: Veracruz. Ver", 11, 56+altura);
                
            doc.setFillColor(2, 47, 136);
            doc.rect(60, 51+altura, 100, 7, "F");
            doc.setTextColor("white");
            doc.text("Destino: " + pieza.destino, 62, 56+altura);
                
            doc.setFillColor(0, 46, 93);
            doc.rect(10, 59+altura, 140, 35, "F");
            doc.setTextColor("white");
            doc.text("VAGONES TOLVA", 11, 64+altura);
            doc.text("11.80-2,90-370", 11, 69+altura);
            doc.text("PESO: " + pieza.peso , 11, 74+altura);
            doc.text("(LARGO: " + pieza.medidas.largo+ " x ANCHO: "+ pieza.medidas.ancho +" x ALTO: "+ pieza.medidas.alto+")", 11, 80+altura);
            doc.text("No. Referencia, Correo, Cotizacion: " , 11, 86+altura);
            doc.text(pieza.referencia ,11,92+altura);
                        
            doc.setFillColor(0, 46, 93);
            doc.rect(10, 96+altura, 180, 7, "F");
            doc.setTextColor("white");
            doc.text("$" +`${numFormat}`+" (" +`${numeroATexto}`+" PESOS 00/100) + I.V.A" , 12, 101+altura);
            altura += 55;
        }); 
  
        doc.addImage("/assets/canacar2.png",0,270,210, 30);
        doc.addPage();
            
        doc.addImage("/assets/canacar3.png",0,0,220, 30);
                
        doc.setFontSize(12);
        const totalNum = this.utilService.calcuarTotal(piezasPrecios);
        const totalFormat = accounting.formatNumber(Number(totalNum));
        const totalText = this.utilService.numeroALetras(Number(totalNum));

        doc.setDrawColor(0, 6, 136);
        doc.rect(10, 35, 180, 10);
        doc.setTextColor("black");
        doc.text("$" +`${totalFormat}`+" (" +`${totalText}`+" PESOS 00/100) + I.V.A" , 11, 40);


        doc.setFillColor(0, 6, 136);
        doc.rect(10, 45, 120, 8, "F");
        doc.setTextColor("white");
        doc.text("Equipo a Utilizar:", 15, 49);
            
        doc.setTextColor("black");
        doc.text("Lowboy / CamaBaja", 10, 63);
        doc.text("Permiso SCT", 10, 68);
            
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
        doc.text("26 Años", 60, 252);
        doc.text("Tranportando Mexico!", 35, 265);
        doc.addImage("/assets/canacar2.png",0,270,210, 30);

        const pdfBlob = new Blob([doc.output("blob")], { type: "application/pdf" });
        const pdfURL = URL.createObjectURL(pdfBlob);
        window.open(pdfURL, '_blank');
        const userName =  userData.email?.split('@')[0];   
        const fileName = `${userName}${this.utilService.currentDateTime()}.pdf`;
        const pdfFile = new File([pdfBlob], fileName);
        // doc.save(fileName);
        doc.addPage();
        // this.utilService.subirArchivo(pdfFile, fileName);
        
    }
}