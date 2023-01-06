import express from 'express';
import videoCtrl from '../controllers/index.js';

const router = express.Router();

router.get('/videos', videoCtrl.getVideos);

export default router;
