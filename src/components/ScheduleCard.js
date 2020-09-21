import React from 'react'
import {Typography} from "@material-ui/core"
import AppearingElement from "./AppearingElement"

function ScheduleCard(props) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return (
        <section className="schedule__card">
            <AppearingElement threshold={"1.0"}>
                <Typography variant={"h4"}
                            className="schedule__card__title">
                    {`${days[new Date(Date.parse(props.day.date)).getDay()].toUpperCase()} ${props.day.date}`}
                </Typography>
            </AppearingElement>
            {props.day.timeslots.map((timeslot) => (timeslot.events.map((event, index) => {
                const date = new Date(event.startTime * 1000)
                const hours = date.getHours()
                const minutes = date.getMinutes()

                return (
                    <div className="schedule__card__timeslot">
                        <div className="schedule__card__timeslot__event">
                            <Typography variant={"h6"}
                                        className="schedule__card__timeslot__event__time">
                                {index === 0 &&
                                `${hours % 12 === 0 ? 12 : hours % 12}:${minutes === 0 ? '00' : minutes} ${hours > 12 ? 'PM' : 'AM'}`
                                }
                            </Typography>
                            <div className="schedule__card__timeslot__event__info">
                                <Typography variant={"h6"}
                                            className="schedule__card__timeslot__event__title">
                                    {event.name}
                                </Typography>
                                <Typography variant={"subtitle1"}>
                                    {event.description}
                                </Typography>
                            </div>
                        </div>
                        {index === timeslot.events.length - 1 &&
                        <div className="schedule__card__timeslot__line"/>
                        }
                    </div>
                )
            })))}
        </section>
    )
}

export default ScheduleCard
