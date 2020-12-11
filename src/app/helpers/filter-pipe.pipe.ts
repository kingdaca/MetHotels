import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(items:any[], searchText:string): any[] {
      if(!items) return [];
    if(!searchText) return items;
    return items.filter((it => {
      return it.price <= parseInt(searchText);
    }))
  }

}
