import dayjs from 'dayjs/esm';

import { IRental, NewRental } from './rental.model';

export const sampleWithRequiredData: IRental = {
  id: 4622,
};

export const sampleWithPartialData: IRental = {
  id: 13003,
  code: 'knowledgeably extra-large fooey',
  longitude: 20467.46,
  latitude: 25706.18,
  fromDate: dayjs('2023-12-19'),
  toDate: dayjs('2023-12-20'),
};

export const sampleWithFullData: IRental = {
  id: 3656,
  code: 'daintily',
  longitude: 8459.41,
  latitude: 5181.83,
  fromDate: dayjs('2023-12-20'),
  toDate: dayjs('2023-12-20'),
  state: 'ACTIVE',
};

export const sampleWithNewData: NewRental = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
