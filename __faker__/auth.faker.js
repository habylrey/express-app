import { faker } from '@faker-js/faker';

export function createRandomUser() {
	return {
		login: faker.internet.userName(),
		login: faker.internet.password(),
	};
}

export const auth = faker.helpers.multiple(createRandomUser, {
	count: 1,
});
