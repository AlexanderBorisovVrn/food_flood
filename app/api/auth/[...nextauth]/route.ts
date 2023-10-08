import NextAuth, { NextAuthOptions, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import  {PrismaAdapter}  from "@next-auth/prisma-adapter"
import prisma from "@/utils/connectPrisma";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
            
        }),
    ],
    adapter:PrismaAdapter(prisma),

}


const handler = NextAuth(authOptions)
export const getAuthSession = () => getServerSession(authOptions);

export { handler as GET, handler as POST }
