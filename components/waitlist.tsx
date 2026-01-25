"use client"

import React, { useState } from "react"
import { toast } from "sonner"
import { Input } from "./ui/input"
import { Button } from "./ui/Button"

const Waitlist = () => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const storeEmail = async () => {
        if (!email) return

        setLoading(true)
        setSuccess(false)

        try {
            await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            setEmail("")
            setSuccess(true)
            toast('You’re on the list. We’ll email you at launch.')
        } catch (e: unknown) {
            toast.error(e instanceof Error ? e.message : 'Something went wrong. Please try again later.')
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full max-w-xl space-y-2">
            <div className="flex items-center flex-col sm:flex-row gap-2 rounded-xl border border-neutral-300 bg-white p-1.5 shadow-xl shadow-black/5 focus-within:border-teal-800 focus-within:ring-1 focus-within:ring-teal-800 transition-all duration-300">
                <Input
                    type="email"
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-none bg-transparent focus-visible:ring-0 text-base placeholder:text-neutral-400 pl-4"
                />
                <Button
                    onClick={storeEmail}
                    disabled={loading}
                    className="rounded-lg px-6 font-medium h-10 bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto"
                >
                    {loading ? "Joining…" : "Join waitlist"}
                </Button>
            </div>

            <p className="text-xs text-neutral-500 pl-2">
                No spam. One email when we launch.
            </p>
            {
                success && <p className="text-sm text-green-600">Thank you for joining the waitlist!</p>
            }
        </div>
    )
}

export default Waitlist