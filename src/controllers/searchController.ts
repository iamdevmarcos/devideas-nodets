import { Request, Response } from 'express';

export const search = (req: Request, res: Response) => {
    res.send('Search Page');
}