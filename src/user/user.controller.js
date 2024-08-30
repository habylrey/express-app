import UserService from './user.service.js';

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Failed to get users' });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Failed to get user' });
        }
    }

    async createUser(req, res) {
        try {
            const newUser = await UserService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Failed to create user' });
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await UserService.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Failed to update user' });
        }
    }

    async deleteUser(req, res) {
        try {
            const result = await UserService.deleteUser(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete user' });
        }
    }
}

export default new UserController();