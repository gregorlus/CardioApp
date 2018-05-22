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
@Pipe({name: 'scyntography'})
export class ScyntographyPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
        case '3':
        return 'W normie';
        case '6':
        return 'Nieodwracalne niedokrwienie';
        case '7':
        return 'Odwracalne niedokrwienie';
    }
  }
}
