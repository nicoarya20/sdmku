import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";


export async function POST(req: Request) {
    const data: Prisma.UserGetPayload<{
        select: {
           
            phone: true,
            email: true,
            name: true,
            password: true
        }
    }> = await req.json()

    const adaPhone = await prisma.user.findUnique({
        where: {
            phone: data.phone,
        }
    })

    if (adaPhone) {
        return new Response(JSON.stringify({ message: "nomor telepon sudah terdaftar"}), {status: 400})
    }

    const user = await prisma.user.create({
        data: {
            phone: data.phone,
            email: data.email,
            name: data.name,
            password: data.password
        }
    })

    return new Response(JSON.stringify(user))
}