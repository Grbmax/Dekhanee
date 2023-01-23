import { sql_query } from "../../../lib/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler( req: NextApiRequest, res: NextApiResponse ){
    const { admin_id, admin_pwd } = req.body
    try {
        const results = await sql_query (
            `SELECT * FROM admin_login WHERE admin_id = "${admin_id}" AND admin_pwd = "${admin_pwd}"`,
        [])
        console.log(results.length)
        if (results.length == 0) return res.status(401).json({message : "Username/Password Incorrect"})
        else res.redirect(307, '/')
    } catch (e) {
        res.status(500).json({message: (e as Error).message});
        console.log((e as Error).message);
    }
}