import { InferGetServerSidePropsType } from "next";

type Cards = {
    id: string
    s_name: string
    s_grade: string
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/data`)
    const cards: Cards[] = await res.json()
    console.log(cards)
    return {
        props: {
            cards,
        },
    }
}

function Student({ cards }: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <>
            <div className="flex items-center justify-center text-3xl font-bold font-serif">Student</div>
            <div className="flex flex-wrap items-center gap-5 p-5 justify-center">{cards.map(cards => {
                return (
                    <div className="flex items-center justify-center text-2xl h-52 w-52 border-2 
                     outline-offset-1 rounded-xl hover:bg-white hover:text-black">
                        {cards.id} . {cards.s_name} <br /> {cards.s_grade}
                    </div>
                )
            })}</div>
        </>
    )
}

export default Student