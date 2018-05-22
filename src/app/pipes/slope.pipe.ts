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
@Pipe({name: 'slope'})
export class SlopePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
        case '1':
        return 'W górę';
        case '2':
        return 'Płaskie';
        case '3':
        return 'W dół';
    }
  }
}
