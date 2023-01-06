import {Router} from 'express';
import multerMiddleware from '../middleware/file';
import { getFile } from '../controllers/upload';
import { checkJwt } from '../middleware/session';

const router = Router();

router.post("/", checkJwt ,multerMiddleware.single("myFyle"), getFile);


export {router}