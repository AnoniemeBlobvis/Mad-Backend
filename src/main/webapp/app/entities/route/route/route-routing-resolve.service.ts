import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IRoute } from '../route.model';
import { RouteService } from '../service/route.service';

export const routeResolve = (activatedRoute: ActivatedRouteSnapshot): Observable<null | IRoute> => {
  const id = activatedRoute.params['id'];
  if (id) {
    return inject(RouteService)
      .find(id)
      .pipe(
        mergeMap((routeResponse: HttpResponse<IRoute>) => {
          if (routeResponse.body) {
            return of(routeResponse.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default routeResolve;

// OLD METHOD
// import { inject } from '@angular/core';
// import { HttpResponse } from '@angular/common/http';
// import { ActivatedRouteSnapshot, Router } from '@angular/router';
// import { of, EMPTY, Observable } from 'rxjs';
// import { mergeMap } from 'rxjs/operators';
//
// import { IRoute } from '../route.model';
// import { RouteService } from '../service/route.service';
//
// export const routeResolve = (route: ActivatedRouteSnapshot): Observable<null | IRoute> => {
//   const id = route.params['id'];
//   if (id) {
//     return inject(RouteService)
//       .find(id)
//       .pipe(
//         mergeMap((route: HttpResponse<IRoute>) => {
//           if (route.body) {
//             return of(route.body);
//           } else {
//             inject(Router).navigate(['404']);
//             return EMPTY;
//           }
//         }),
//       );
//   }
//   return of(null);
// };
//
// export default routeResolve;
