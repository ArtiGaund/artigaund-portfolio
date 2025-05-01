import { NextApiRequest, NextApiResponse} from "next"
import { getProjectPosts} from "../backend/notion"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const projects = await getProjectPosts()

    res.status(200).json(projects)
}