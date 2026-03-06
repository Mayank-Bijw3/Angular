import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'tempPipe',
    standalone:true
})

export class TemperaturePipe implements PipeTransform{

    // transform(value: any, ...args: any[]) {
    //     return value + '-transformed';
    // }
    
    transform(value: string | number) {
        let val:number;

        if(typeof value  === 'string'){
            val = parseFloat(value);
        }else{
            val=value;
        }

        const outputTemp = val *(9/5)+32;

        return `${outputTemp} °F`;

    }

}