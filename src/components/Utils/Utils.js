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
  const duration = faker.random.number(15);
  const end_date = moment(start_date).add(duration - 1, 'day').toDate();
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    nickname: faker.random.word(),
    start_date,
    end_date,
    duration,
    reason: faker.random.arrayElement(['ลากิจ', 'ลาป่วย', 'ลาพักร้อน']),
    note: faker.lorem.words(),
    created_by: faker.name.findName(),
  };
};

export function makeData(len = 10) {
  return range(len).map(() => newHoliday());
}