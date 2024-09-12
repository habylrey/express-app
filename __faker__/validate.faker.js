import { faker } from '@faker-js/faker';

export function createRandomUser() {
	return {
		id: faker.number,
		name: faker.internet.userName(),
		photo_file_id: faker.number,
	};
}

export const group = faker.helpers.multiple(createRandomUser, {
	count: 1,
});
