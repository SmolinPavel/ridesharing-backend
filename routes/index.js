import express from 'express';
import hello from './hello/index.js';

const { Router } = express;

const router = Router();
const routeConfigs = [hello];

routeConfigs.forEach(routeConfig => routeConfig.public && routeConfig.public(router));

// private middlewares go here

routeConfigs.forEach(routeConfig => routeConfig.private && routeConfig.private(router));

export default router;

