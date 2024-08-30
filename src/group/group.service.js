import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const groupsPath = path.join(__dirname, '..', 'data', 'groups.json');

class GroupService {
	async getAllGroups() {
		const data = await fs.readFile(groupsPath, 'utf8');
		return JSON.parse(data);
	}

	async getGroupById(id) {
		const groups = await this.getAllGroups();
		return groups.find((group) => group.id === parseInt(id));
	}

	async createGroup(groupData) {
		const groups = await this.getAllGroups();
		const newGroup = {
			id: groups.length + 1,
			...groupData,
		};
		groups.push(newGroup);
		await fs.writeFile(groupsPath, JSON.stringify(groups, null, 2));
		return newGroup;
	}

	async updateGroup(id, groupData) {
		const groups = await this.getAllGroups();
		const index = groups.findIndex((group) => group.id === parseInt(id));
		if (index === -1) return null;

		groups[index] = { ...groups[index], ...groupData };
		await fs.writeFile(groupsPath, JSON.stringify(groups, null, 2));
		return groups[index];
	}

	async deleteGroup(id) {
		const groups = await this.getAllGroups();
		const filteredGroups = groups.filter(
			(group) => group.id !== parseInt(id)
		);
		if (filteredGroups.length === groups.length) return false;

		await fs.writeFile(groupsPath, JSON.stringify(filteredGroups, null, 2));
		return true;
	}
}

export default new GroupService();
