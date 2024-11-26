import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    const response = NextResponse.json({ message: "LogOut Berhasil" });
    return response;
  } catch (error) {
    console.error("Error Saat Logout:", error);

    return NextResponse.json(
      { message: "Log Out Gagal, Coba Lagi Nanti." },
      { status: 500 }
    )
  }
}
