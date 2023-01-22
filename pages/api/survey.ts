import { sql_query } from "../../lib/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler( req: NextApiRequest, res: NextApiResponse ){
    try {
        const results = await sql_query (
            'SELECT * FROM survey',
        [])
        res.status(200).json(results)
    } catch (e) {
        res.status(500).json({message: (e as Error).message});
        console.log((e as Error).message);
    }
}