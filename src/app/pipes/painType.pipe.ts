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
@Pipe({name: 'painType'})
export class PainTypePipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
        case 1:
        return 'Dławica piersiowa stabilna';
        case 2:
        return 'Dławica piersiowa niestabilna';
        case 3:
        return 'Ból inny niż dławica piersiowa';
        case 4:
        return 'Brak';
    }
  }
}
