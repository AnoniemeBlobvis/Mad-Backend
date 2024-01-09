import dayjs from 'dayjs/esm';

import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 16029,
};

export const sampleWithPartialData: ICustomer = {
  id: 246,
  lastName: 'Gutkowski',
  firstName: 'Jimmy',
};

export const sampleWithFullData: ICustomer = {
  id: 18986,
  nr: 23362,
  lastName: 'Auer',
  firstName: 'Maggie',
  from: dayjs('2023-12-20'),
};

export const sampleWithNewData: NewCustomer = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
