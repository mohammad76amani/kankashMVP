import { NextResponse, NextRequest } from "next/server";
import connect from "@/lib/data";
import { User } from "@/models/users";
import bcrypt from 'bcrypt';



export const GET = async (req: NextRequest, res: NextResponse) => {

    await connect();
    if (!connect) {
        return new NextResponse('Error connecting to MongoDB', { status: 500 });
    }

    try {
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return new NextResponse('Error fetching users', { status: 500 });
    }


}
export const POST = async (req: NextRequest) => {
    await connect();
    if(!connect){
        return new NextResponse('Error connecting to MongoDB', { status: 500 });
    }
    try{
        const formData = await req.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const password = formData.get('password') as string;
        
        if (!name || !email || !phone || !password) {
            return new NextResponse('Missing required fields', { status: 400 });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);  
        
        const newUser = {
            name,
            email,
            phone,
            password: hashedPassword  // Store the hashed password
        };

        const savedUser = await User.create(newUser);

        return new NextResponse(JSON.stringify(savedUser), { status: 201 });


    }catch(error){
        console.error('Error posting users:', error);
        return new NextResponse('Error posting users', { status: 500 });
    }
}