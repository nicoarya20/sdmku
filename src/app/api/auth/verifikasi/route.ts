import prisma from "@/lib/prisma"

export async function POST(req: Request) {
    const { userId, pin } = await req.json()
    const user = await prisma.userOtp.findUnique({
        where: {
            userId
        }
    })

    console.log(user?.otp, pin)
    if (pin + "" !== user?.otp + "") return new Response(JSON.stringify({ message: "gagal" }), { status: 500 })
    return new Response(JSON.stringify({ message: "success" }))
}