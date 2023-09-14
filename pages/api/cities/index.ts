import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { City } from "../../../schemas/city.schema"
import connect from "../../../lib/mongoose"
import { GetCitiesService, PostCityService } from "../../../services/api/city"

export default async function Cities(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //const session = await getServerSession(req, res, authOptions)
    //if(!session) return res.statis(401).json({error: "Reikia prisijungti"})
    await connect()
    switch (req.method) {
        case "POST": {
            await PostCityService(req.body)
            break
        }
    }

    const cities = await GetCitiesService()

    res.json(cities)
}
