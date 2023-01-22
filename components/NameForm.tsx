import { useState } from "react"

const NameForm = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-xl font-bold">Bee Survey</h1>
            <h1 className="py-4">Survey Title</h1>
            <form>
                <input aria-label="Enter your name" type="text"
                placeholder="Name" className="text-sm text-gray-800 w-full
                mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2" />

                <button type="submit" className="bg-orange-300 w-full rounded mt-4">
                Next
                </button>
            </form>
        </div>
    )
}
export default NameForm
    