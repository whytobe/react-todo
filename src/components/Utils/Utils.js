import faker from 'faker';
import moment from 'moment/moment';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newHoliday = () => {
  const start_date = faker.date.past();
  const end_date = faker.date.future();
  const duration = moment(end_date).
      diff(start_date, 'days');
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    nickname: faker.random.word(),
    start_date,
    end_date,
    duration,
    reason: faker.lorem.words(),
    note: faker.lorem.words(),
    created_by: faker.name.findName(),
  };
};

export function makeData(len = 10) {
  return range(len).map(() => newHoliday());
}