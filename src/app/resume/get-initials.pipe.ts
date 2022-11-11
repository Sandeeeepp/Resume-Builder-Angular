import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getInitials',
})
export class GetInitialsPipe implements PipeTransform {
  transform(nameString: string): any {
    if (/\s/g.test(nameString)) {
      // var initialLastName =
      console.log('contains space');

      var data = nameString.split(' ');
      var output = '';

      for (var i = 0; i < data.length; i++) {
        output += data[i].substring(0, 1);
      }
    } else {
      var output = nameString.charAt(0);
    }
    return output;
  }
}
