import { InferGetServerSidePropsType } from "next";
import Header from "../components/Header";

type Cards = {
    survey_id : string
    survey_title : string
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/survey`)
    const cards: Cards[] = await res.json()
    return {
        props: {
            cards,
        },
    }
}



function List({ cards }: InferGetServerSidePropsType<typeof getStaticProps>) {
    // for(var i = 0; i < Object.keys(cards).length; i++)
    // {
    //     console.log(cards[i])
    // 
    return (
        <>
       
        <Header/>
        <div className="bg-slate-200">
        <div className="flex flex-row space-x-8 justify-center h-screen items-center w-full">
        {
            cards.map((card) => <>
            <a href="#" className="block items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 px-9 text-2xl text-justify font-bold tracking-tight text-gray-900 
             dark:text-white">{card.survey_title}</h5>
            </a> 
            </>
            )
        }
        </div>
        </div>
        </>
        
    )
}

export default List