import { getServerSession } from "next-auth"
import { authOptions } from "./[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"
import { defaultConfig } from "next/dist/server/config-shared"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getServerSession(req,res, authOptions)
    if(!session) return res.send(JSON.stringify({}))
    res.send(JSON.stringify(session,null,2))
}