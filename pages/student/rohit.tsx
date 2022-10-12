import React from 'react'
import { InferGetServerSidePropsType } from "next";

type student = {
    id: string
    s_name: string
    s_grade: string
}

/* function Student({ student }: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <>
            <div className="flex items-center justify-center text-3xl font-bold font-serif">Student</div>
            <div>
                {student.map((student: any) => {
                    return (
                        <div className="flex  items-center justify-center text-2xl h-52 w-52 border-2 gap-5 outline-4 outline-offset-1 rounded-xl hover:bg-white hover:text-black">
                            {student.id} . {student.s_name} <br /> {student.s_grade}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Student */

const Student = ({ student }: { student: any }) => {
    return (
        <>
            <div className=' flex text-center items-center justify-center'>Name: {student.s_name}</div>
        </>
    )
}

export async function getStaticProps() {
    const results = await fetch('http://localhost:3000/api/data').then(r => r.json());
    console.log(results);
    return {
        props: {
            student: results[2]
        }
    }
}

export default Student