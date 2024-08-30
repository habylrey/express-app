import path from 'path';
import { fileURLToPath } from 'url';
import * as service from '../services/service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const groupsPath = path.join(__dirname, '..', 'data', 'groups.json');

const getAllGroups = () => service.getAll(groupsPath);
const getGroupById = (id) => service.getById(groupsPath, id);
const createGroup = (groupData) => service.create(groupsPath, groupData);
const updateGroup = (id, groupData) =>
	service.update(groupsPath, id, groupData);
const deleteGroup = (id) => service.remove(groupsPath, id);

export default {
	getAllGroups,
	getGroupById,
	createGroup,
	updateGroup,
	deleteGroup,
};
