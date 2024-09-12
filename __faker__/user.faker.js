import { faker } from '@faker-js/faker';

export function createRandomUser() {
	return {
		id: faker.number,
		name: faker.internet.userName(),
		age: faker.number,
	};
}

export const users = faker.helpers.multiple(createRandomUser, {
	count: 1,
});
