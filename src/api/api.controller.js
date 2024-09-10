import dotenv from 'dotenv';
import { Router } from 'express';
import request from './api.service.js';
import apiSchema from './DTO/api.schema.js';
import validateRequest from '../common/validate.middleware.js';

dotenv.config();

function ApiRequest() {
	const router = Router();

	async function getWeather(req, res) {
		try {
			const city = req.params.city;
			const data = {
				method: 'GET',
				baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
				query: {
					q: city,
					appid: process.env.API_KEY,
					units: 'metric',
				},
			};

			const weatherData = await request(data);
			return res.json(weatherData);
		} catch (error) {
			console.error('Error fetching weather data:', error);
			res.status(500).json({
				error: 'Internal Server Error',
				details: error.message,
			});
		}
	}

	return router.get('/:city', validateRequest(apiSchema), getWeather);
}

export default ApiRequest;
