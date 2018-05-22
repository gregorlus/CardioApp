import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'ecg'})
export class EcgPipe implements PipeTransform {
  transform(value: string): string {
      let reutrnValue = '';
    switch (value) {
      case '0':
        reutrnValue = 'W normie';
        break;
        case '1':
        reutrnValue = 'Nieprawidłowość fal ST-T';
        break;
      case '2':
        reutrnValue = 'Wykryte prawdopodobieństwo lub wystąpienie przerostu lewej komory według kryteriów Estesa';
        break;
    }

    return reutrnValue;
  }
}
