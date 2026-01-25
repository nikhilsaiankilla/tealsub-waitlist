import { getDb } from "@/db/client";
import { waitlistEmails } from "@/db/schema";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid email"
                },
                { status: 400 }
            )
        }

        const db = getDb();

        const response = await db.insert(waitlistEmails).values({
            email: email.toLowerCase(),
        })

        return NextResponse.json({ success: true })
    } catch (err: any) {
        if (err?.code === "23505") {
            return NextResponse.json(
                { success: false, error: "Email already on the waitlist" },
                { status: 409 } // Conflict
            )
        }

        return NextResponse.json(
            {
                success: false,
                error: "Something went wrong"
            },
            { status: 500 }
        )
    }
}
