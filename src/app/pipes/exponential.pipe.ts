import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
    
    transform(value: any): unknown {
        return Math.pow(value, 2);
    }
    
}
