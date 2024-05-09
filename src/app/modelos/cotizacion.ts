import { Medidas } from "./medidas";

export interface Cotizacion {
    peso: string,
    medidas: Medidas,
    destino: string, 
    referencia: string,
    precio?: number,
    pilotos?: number
}