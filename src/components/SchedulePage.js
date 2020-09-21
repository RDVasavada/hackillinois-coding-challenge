import React from 'react'
import {Typography} from "@material-ui/core"
import Header from "./Header"
import ScheduleCard from "./ScheduleCard"

const sortEvents = (events) => {
    const eventsByDay = new Map()

    events.forEach((event) => {
        const date = new Date(event.startTime * 1000).toLocaleDateString('en-US')

        if (eventsByDay.has(date)) {
            eventsByDay.get(date).push(event)
        } else {
            eventsByDay.set(date, [event])
        }
    });

    const eventsArray = []

    eventsByDay.forEach((value, key) => {
        const timeslots = new Map()

        value.forEach((event) => {
            if (timeslots.has(event.startTime)) {
                timeslots.get(event.startTime).push(event)
            } else {
                timeslots.set(event.startTime, [event])
            }
        })

        const timeslotArray = []

        timeslots.forEach((v, k) => {
            timeslotArray.push({
                time: k,
                events: v
            })
        })

        timeslotArray.sort((a, b) => a.time - b.time)

        eventsArray.push({
            date: key,
            timeslots: timeslotArray
        })
    })

    eventsArray.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

    return eventsArray
}

function SchedulePage() {
    const [events, setEvents] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.hackillinois.org/event/', {method: 'GET'}).then((response) => response.json()).then((response) => {
            setEvents(sortEvents(response.events));
        })
    }, [])

    return (
        <>
            <Header />
            <main className="schedule">
                <Typography variant={"h3"} className="schedule__header">Schedule</Typography>
                {events.map((day) => (
                        <ScheduleCard day={day} />
                    )
                )}
            </main>
        </>
    )
}

export default SchedulePage
