import { City, ICity } from "../../../schemas/city.schema"

export async function PostCityService(city: ICity): Promise<void> {
    await City.create(city)
}