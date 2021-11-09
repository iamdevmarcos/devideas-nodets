import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { ProjectIdeas } from '../models/ProjectIdeas';

export const home = (req: Request, res: Response) => {
    let list = ProjectIdeas.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'your next project',
            subtitle: '💡 All project ideas below',
            background: 'bgHomePage.jpg'
        },
        list
    });
}

export const beginner = (req: Request, res: Response) => {
    let list = ProjectIdeas.getByLevel('Beginner');

    res.render('pages/page', {
        menu: createMenuObject('beginner'),
        banner: {
           title: 'Beginners',
           subtitle: '💡 All project ideas for beginners',
           background: 'banner_beginner.jpg' 
        },
        list
    });
}

export const intermediate = (req: Request, res: Response) => {
    let list = ProjectIdeas.getByLevel('Intermediate');

    res.render('pages/page', {
        menu: createMenuObject('intermediate'),
        banner: {
            title: 'Intermediates',
            subtitle: '💡 All project ideas for intermediate',
            background: 'banner_intermediate.jpg'
        },
        list
    });
}

export const advanced = (req: Request, res: Response) => {
    let list = ProjectIdeas.getByLevel('Advanced');

    res.render('pages/page', {
        menu: createMenuObject('advanced'),
        banner: {
            title: 'Experts',
            subtitle: '💡 All project ideas for experts',
            background: 'banner_experts.jpg'
        },
        list
    });
}