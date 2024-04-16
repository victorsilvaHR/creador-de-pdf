import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterDestinos'
})

export class FilterDestinosPipe implements PipeTransform {
    transform(items: any[], term: string) {
        if (!items || !term) {
            return null;
        } 
        return items.filter(item => item.destino.toLowerCase().includes(term.toLowerCase()));
    }
}