"use client"
import { SessionProvider } from "next-auth/react"
import React from "react"

export function Body(props: { children: React.ReactNode}) {
    const { children } = props 

    return (
        <SessionProvider>
            <body className="container-lg">{children}</body>
        </SessionProvider>
    )
}