import React, { useState } from "react"
import { useNavigate } from "react-router"

export default function Form() {
    const [form, setForm] = useState({
        text: "",
        company: "",
        time: "",
    })
    const navigate = useNavigate()

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value }
        })
    }

    function getTime() {
        var today = new Date()
        var date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear().toString().slice(-2)}`
        var time = `${today.getHours()}:${('0' + today.getMinutes()).slice(-2)}:${today.getSeconds()}`
        return `${time} PST on ${date}`
    }

    async function onSubmit(e) {
        e.preventDefault()

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newForm = { ...form }

        await fetch("https://techlayoffs.fyi/api/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newForm),
        })
            .catch(error => {
                window.alert("Something went wrong. Check your connection.", error)
                return
            })

        setForm({ text: "", time: "", company: "", })
        navigate("/")
    }


    return (
        <div className="mx-auto my-auto max-w-2xl py-10">
            <form onSubmit={onSubmit}>
                <div className="mb-6">
                    <h3 className="mb-4 font-semibold text-gray-900">Message</h3>
                    <textarea maxLength={500} onChange={(e) => updateForm({ text: e.target.value })} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..." required></textarea>
                    <p className="mt-2 text-sm text-gray-500 text-right">Used <span className="font-medium text-blue-600 hover:underline">{form.text.length}/500</span> Characters</p>
                </div>
                <div className="mb-6">
                    <h3 className="mb-4 font-semibold text-gray-900">Company</h3>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                            <div className="flex items-center">
                                <button type="button" className="flex items-center w-full justify-center" onClick={(e) => updateForm({ company: "Facebook" })}>
                                    <img width="15" height="15" alt="pic" className="py-3" src="https://i.imgur.com/DkJIkWQ.png"></img>
                                    <label className="py-3 ml-2 text-sm font-medium text-gray-900">Facebook</label>
                                </button>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                            <div className="flex items-center">
                                <button type="button" className="flex items-center w-full justify-center" onClick={(e) => updateForm({ company: "Apple" })}>
                                    <img width="15" height="15" alt="pic" className="py-3" src="https://i.imgur.com/LozYxmm.png"></img>
                                    <label className="py-3 ml-2 text-sm font-medium text-gray-900">Apple</label>
                                </button>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                            <div className="flex items-center">
                                <button type="button" className="flex items-center w-full justify-center" onClick={(e) => updateForm({ company: "Amazon" })}>
                                    <img width="15" height="15" alt="pic" className="py-3" src="https://i.imgur.com/SEZpYZP.png"></img>
                                    <label className="py-3 ml-2 text-sm font-medium text-gray-900">Amazon</label>
                                </button>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                            <div className="flex items-center">
                                <button type="button" className="flex items-center w-full justify-center" onClick={(e) => updateForm({ company: "Microsoft" })}>
                                    <img width="15" height="15" alt="pic" className="py-3" src="https://i.imgur.com/tc6VO28.png"></img>
                                    <label className="py-3 ml-2 text-sm font-medium text-gray-900">Microsoft</label>
                                </button>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center">
                                <button type="button" className="flex items-center w-full justify-center" onClick={(e) => updateForm({ company: "Google" })}>
                                    <img width="15" height="15" alt="pic" className="py-3" src="https://i.imgur.com/8KhVFYA.png"></img>
                                    <label className="py-3 ml-2 text-sm font-medium text-gray-900">Google</label>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <p id="helper-text-explanation" className="mb-2 text-sm text-gray-500">Don't see your company?</p>
                    <input maxLength={30} onChange={(e) => updateForm({ company: e.target.value })} value={form.company} id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter it here" required />
                    <p className="mt-2 text-sm text-gray-500 text-right">Used <span className="font-medium text-blue-600 hover:underline">{form.company.length}/30</span> Characters</p>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => updateForm({ time: getTime() })} type="submit" className="text-white bg-indigo-600 hover:bg-indigo-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center justify-center">Submit</button>
                </div>
            </form >
        </div >
    )
}

