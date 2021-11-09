import { Request, Response } from 'express';

import { ProjectIdeas } from '../models/ProjectIdeas';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let query = req.query.q as string;
    let list = ProjectIdeas.getByProjectName(query);

    (!query)?res.redirect('/'):'';

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
}