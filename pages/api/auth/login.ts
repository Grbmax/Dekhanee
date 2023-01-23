import { sql_query } from "../../../lib/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler( req: NextApiRequest, res: NextApiResponse ){

    const bcrypt = require('bcryptjs');

    interface User {
        id : number,
        u_name : string,
        mail : string,
        u_pwd : string
    }

    const { mail_id, pwd } = req.body

    const hashPassword = async ( pwd: string ) : Promise<string> => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pwd, salt);
        return hashedPassword;
    }

    const comparePassword = async (password:string, hashedPassword:string):Promise<boolean> => {
        try {
            const match = await bcrypt.compare(password, hashedPassword);
            return match;
        } catch (error) {
            throw error;
        }
    }
    
    if (!mail_id || !pwd) {
        return res.status(400).json({ error: 'Request Missing E-Mail or Password' })
    }
    else {
    try {
        const results = await sql_query (
            ` SELECT id , u_name, mail_id, u_pwd FROM user WHERE mail_id = ? `,
        [mail_id])
        const json:User[] = results;
        const [{ id, u_name, mail, u_pwd} ] = json
        
        const returnUser = async () => {
            try {
                const results = await sql_query (
                    ` SELECT * FROM user WHERE mail_id = ? AND u_pwd = ? `,
                [mail_id, u_pwd])
                return results
            } catch (error) {
                res.status(500).json({ message: "Password Authentication Failed!" });
                console.log((error as Error).message)
            }
        }
        
        const match = await comparePassword(pwd, u_pwd);
        if (match) {
        const new_results = await returnUser();
        console.log(new_results)
        res.status(200).json({ message:"Success", data: new_results});
        } 
        else {
        res.status(401).json({ message:"Unauthorized"});
        }

    } catch (e) {
        //Handle Unregistered User
        res.status(501).json({message: "You are not registered"});
        console.log((e as Error).message);
    }
}
}