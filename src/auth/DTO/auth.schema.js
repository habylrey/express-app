import Joi from 'joi';

const AuthSchema = Joi.object({
	body: {
		password: Joi.string().min(1).required(),
		login: Joi.string().min(1).required(),
	},
});
export default AuthSchema;
