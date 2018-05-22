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
@Pipe({name: 'gender'})
export class GenderPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Kobieta';
      case 1:
        return 'Mężczyzna';
    }
  }
}
