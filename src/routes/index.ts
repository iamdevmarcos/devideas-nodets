import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/beginner', PageController.beginner);
router.get('/intermediate', PageController.intermediate);
router.get('/advanced', PageController.advanced);

router.get('/search', SearchController.search);

export default router;