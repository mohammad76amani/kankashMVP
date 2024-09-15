// lib/withAuth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const withAuth = (handler: Function) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            (req as any).user = decoded; // Attach the user to the request object
            return handler(req, res);
        } catch (error) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
    };};
