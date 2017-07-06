import { Pipe, PipeTransform, Injectable } from '@angular/core';

// @Pipe({
//   name: 'objectValues'
// })

// @Injectable()
// export class ObjectValuesPipe implements PipeTransform {
//   transform(obj: any) {
//     var result:any[] = [];
//     for (var key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result.push(obj[key]);
//       }
//     }
//     console.log("result", result);
//     return result;
//   }
// }

@Pipe({ name: 'objectValues',  pure: false })
@Injectable()
export class ObjectValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}

@Pipe({ name: 'pairs' })
export class PairsPipe implements PipeTransform {
  transform(value:any) {
    return value.filter((v:any,i:any) => i%2==0).map((v:any,i:any) => [value[i*2], value[i*2+1]])
  }
}