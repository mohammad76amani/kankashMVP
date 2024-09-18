
import connect from "@/lib/data";  // Connecting to MongoDB
import { NextRequest, NextResponse } from "next/server";
import { Categories } from "@/models/categories";

// DELETE method (already discussed)
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connect();
    const categoryId = params.id;  // Get 'id' from URL path

    if (!categoryId) {
        return new NextResponse('Category ID is required', { status: 400 });
    }

    try {
        const deletedCategory = await Categories.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return new NextResponse('Category not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: 'Category deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error deleting category:', error);
        return new NextResponse('Error deleting category', { status: 500 });
    }
};

// PATCH method to update a category
export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connect();
    const categoryId = params.id;  // Get 'id' from URL path

    if (!categoryId) {
        return new NextResponse('Category ID is required', { status: 400 });
    }

    try {
        // Parse the incoming request body (JSON format)
        const body = await req.json();
        const { name, image } = body;  // Extract the fields to be updated

        // Update the category in MongoDB
        const updatedCategory = await Categories.findByIdAndUpdate(
            categoryId,  // Find by the dynamic id
            { name, image },  // Update only the fields that were passed
            { new: true }  // Return the updated document
        );

        if (!updatedCategory) {
            return new NextResponse('Category not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(updatedCategory), { status: 200 });
    } catch (error) {
        console.error('Error updating category:', error);
        return new NextResponse('Error updating category', { status: 500 });
    }
};
