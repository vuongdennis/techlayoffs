import React, { useEffect, useState } from "react"

const Record = (props) => (
    <div className="mx-auto max-w-2xl py-4 px-8 bg-white rounded-lg my-auto mb-6">
        <div className="flow-root">
            <p className="text-xl font-medium text-indigo-600 float-left">{props.record.company}</p>
            <p className="float-right text-gray-600 font-medium">{props.record.time}</p>
        </div>
        <div>
            <p className="text-gray-600 break-all">{props.record.text}</p>
        </div>

    </div>
)

var postCounter = 0

export default function RecordList() {
    const [records, setRecords] = useState([])

    // This method fetches the records from the database.
    async function getRecords() {
        const response = await fetch(`https://techlayoffs.fyi/api/record/${postCounter}`);

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const records = await response.json();
        postCounter += 10
        setRecords((oldRecords) => [...oldRecords, ...records])
    }



    useEffect(() => {
        // Handle automatic loading
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight
            const windowHeight = window.innerHeight
            const top = e.target.documentElement.scrollTop
            if (top + windowHeight === scrollHeight) {
                getRecords()
            }
        }

        getRecords();
        window.addEventListener("scroll", handleScroll)

        return;
    }, []);

    function recordList() {
        return records.map(record => {
            return (
                <Record
                    record={record}
                    key={record._id}
                />
            )
        })
    }

    return (
        <div className="py-10">
            {recordList()}
        </div>
    )
}

