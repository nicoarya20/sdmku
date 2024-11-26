import prisma from "@/lib/prisma"
import _ from "lodash"

export async function POST(req: Request) {
    const { phone } = await req.json()

    const otp = _.random(1000, 9999) + ""
    const kirim = await fetch(`https://wa.wibudev.com/code?nom=62${phone}&text=${otp}`)

    if (!kirim.ok) return new Response(JSON.stringify({ message: "gagal" }), { status: 500 })


    const createUser = await prisma.user.upsert({
        where: {
            phone
        },
        create: {
            phone
        },
        update: {}
    })

    if (!createUser) return new Response(JSON.stringify({ messgae: "gagal" }), { status: 500 })

    const simpan = await prisma.userOtp.upsert({
        where: {
            userId: createUser.id
        },
        create: {
            otp,
            userId: createUser.id
        },
        update: {
            otp
        }
    })

    return new Response(JSON.stringify({ data: { userId: simpan.userId } }))
}