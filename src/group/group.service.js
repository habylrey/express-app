import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const groupsPath = path.join(__dirname, '..', 'data', 'groups.json');

const getAllGroups = () => Repository.getAll(groupsPath);
const getGroupById = (id) => Repository.getById(groupsPath, id);
const createGroup = (groupData) => Repository.create(groupsPath, groupData);
const updateGroup = (id, groupData) =>
	Repository.update(groupsPath, id, groupData);
const deleteGroup = (id) => Repository.remove(groupsPath, id);

export default {
	getAllGroups,
	getGroupById,
	createGroup,
	updateGroup,
	deleteGroup,
};
