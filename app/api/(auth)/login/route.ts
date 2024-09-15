// pages/api/auth/login.ts
import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/data';
import { User } from '@/models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'KanKashStok1400';

export const POST = async (req: NextRequest) => {
    await connect();

    if (!connect) {
        return new NextResponse('Error connecting to MongoDB', { status: 500 });
    }

    const body = await req.json();
    const { phone, password } = body;

    try {
        const user = await User.findOne({ phone });

        if (!user) {
            return new NextResponse('Invalid email or password', { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return new NextResponse('Invalid email or password', { status: 401 });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h', // Token expires in 1 hour
        });

        // Set the JWT in an HTTP-only cookie
        const response = new NextResponse('Login successful', { status: 200 });
        response.cookies.set('token', token, { httpOnly: true, maxAge: 3600, path: '/' });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return new NextResponse('Login error', { status: 500 });
    }
}
