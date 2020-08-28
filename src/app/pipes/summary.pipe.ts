import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): unknown {
    if (!value) return null;
    if ( value.length < limit ) return value
    let actualLimit = (limit) ? limit : 20;
    return value.substr(0, actualLimit) + '.....';

  }

}
