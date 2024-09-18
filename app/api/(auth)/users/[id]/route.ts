import connect from "@/lib/data";
import { NextRequest,NextResponse } from "next/server";
import { User } from "@/models/users";



export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connect();
    if(!connect) {
        return new NextResponse('Database connection error', { status: 500 });
    }
    const userId = params.id; 
    if (!userId) {
        return new NextResponse('User ID is required', { status: 400 });
    }
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return new NextResponse('User not found', { status: 404 });
        }
        return new NextResponse(JSON.stringify({ message: 'User deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error deleting user:', error);
        return new NextResponse('Error deleting user', { status: 500 });
    }}

export const PATCH=async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connect();
    if(!connect) {
        return new NextResponse('Database connection error', { status: 500 });
    }
    const userId = params.id;
    if (!userId) {
        return new NextResponse('User ID is required', { status: 400 });
    }
    try {
        const body = await req.json();
        const { name, email, phone, password, isAdmin } = body;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, phone, password, isAdmin },
            { new: true }
        );
        if (!updatedUser) {
            return new NextResponse('User not found', { status: 404 });
        }
        return new NextResponse(JSON.stringify({ message: 'User updated successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error updating user:', error);
        return new NextResponse('Error updating user', { status: 500 });
    }
}