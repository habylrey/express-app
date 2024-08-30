import GroupUserService from './group_user.service.js';

class GroupUserController {
	async getAllGroupUsers(req, res) {
		try {
			const groupUsers = await GroupUserService.getAllGroupUsers();
			res.json(groupUsers);
		} catch (error) {
			res.status(500).json({ message: 'Failed to get group users' });
		}
	}

	async getGroupUserById(req, res) {
		try {
			const groupUser = await GroupUserService.getGroupUserById(
				req.params.id
			);
			if (!groupUser) {
				return res
					.status(404)
					.json({ message: 'Group user not found' });
			}
			res.json(groupUser);
		} catch (error) {
			res.status(500).json({ message: 'Failed to get group user' });
		}
	}

	async createGroupUser(req, res) {
		try {
			const newGroupUser = await GroupUserService.createGroupUser(
				req.body
			);
			res.status(201).json(newGroupUser);
		} catch (error) {
			res.status(500).json({ message: 'Failed to create group user' });
		}
	}

	async updateGroupUser(req, res) {
		try {
			const updatedGroupUser = await GroupUserService.updateGroupUser(
				req.params.id,
				req.body
			);
			if (!updatedGroupUser) {
				return res
					.status(404)
					.json({ message: 'Group user not found' });
			}
			res.json(updatedGroupUser);
		} catch (error) {
			res.status(500).json({ message: 'Failed to update group user' });
		}
	}

	async deleteGroupUser(req, res) {
		try {
			const result = await GroupUserService.deleteGroupUser(
				req.params.id
			);
			if (!result) {
				return res
					.status(404)
					.json({ message: 'Group user not found' });
			}
			res.status(204).end();
		} catch (error) {
			res.status(500).json({ message: 'Failed to delete group user' });
		}
	}
}

export default new GroupUserController();
