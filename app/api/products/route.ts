import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connectPrisma";


export const GET = async(req:NextRequest)=>{

    const {searchParams} = new URL(req.url);
    const cat = searchParams.get('cat');


    try {
        
        const categories = await prisma.product.findMany({
            where:{
                ...(cat?{catSlug:cat}:{isFeatured:true})
            }
        });
        return new NextResponse(JSON.stringify(categories),{
            status:200

        })
    } catch (error) {
        
        return new NextResponse(JSON.stringify(error),{
            status:500
        })
    }
}
