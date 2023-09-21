import prisma from "@/utils/connectPrisma";
import { NextResponse } from "next/server"


//  FETCH ALL CATEGORIES
export const GET = async()=>{
    try {
        
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories),{
            status:200

        })
    } catch (error) {
        
        return new NextResponse(JSON.stringify(error),{
            status:500
        })
    }
}
