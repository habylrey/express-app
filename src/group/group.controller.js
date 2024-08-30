import GroupService from './group.service.js';

class GroupController {
	async getAllGroups(req, res) {
		try {
			const groups = await GroupService.getAllGroups();
			res.json(groups);
		} catch (error) {
			res.status(500).json({ message: 'Failed to get groups' });
		}
	}

	async getGroupById(req, res) {
		try {
			const group = await GroupService.getGroupById(req.params.id);
			if (!group) {
				return res.status(404).json({ message: 'Group not found' });
			}
			res.json(group);
		} catch (error) {
			res.status(500).json({ message: 'Failed to get group' });
		}
	}

	async createGroup(req, res) {
		try {
			const newGroup = await GroupService.createGroup(req.body);
			res.status(201).json(newGroup);
		} catch (error) {
			res.status(500).json({ message: 'Failed to create group' });
		}
	}

	async updateGroup(req, res) {
		try {
			const updatedGroup = await GroupService.updateGroup(
				req.params.id,
				req.body
			);
			if (!updatedGroup) {
				return res.status(404).json({ message: 'Group not found' });
			}
			res.json(updatedGroup);
		} catch (error) {
			res.status(500).json({ message: 'Failed to update group' });
		}
	}

	async deleteGroup(req, res) {
		try {
			const result = await GroupService.deleteGroup(req.params.id);
			if (!result) {
				return res.status(404).json({ message: 'Group not found' });
			}
			res.status(204).end();
		} catch (error) {
			res.status(500).json({ message: 'Failed to delete group' });
		}
	}
}

export default new GroupController();
