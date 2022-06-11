import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {
    transform(value: {firstName: string, lastName: string}, locale: 'en' | 'fr'): string {
        return locale === 'fr' ?
         `${value.lastName.toUpperCase()} ${value.firstName}` : 
         `${value.firstName.toUpperCase()} ${value.lastName}`;
    }
}