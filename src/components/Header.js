import React from 'react'
import {Typography} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
    const [expanded, setExpanded] = React.useState(false)
    const [collapsed, setCollapsed] = React.useState(false)

    const toggleDropdown = () => {
        setCollapsed(expanded)
        setExpanded(!expanded)
    }

    React.useEffect(() => {
        const responsiveHandler = () => {
            if (window.innerWidth > 960) {
                setExpanded(false)
                setCollapsed(false)
            }
        }

        window.addEventListener("resize", responsiveHandler)

        return () => window.removeEventListener("resize", responsiveHandler)
    }, [])

    return (
        <header className={`main-header ${expanded ? "expanded" : ""} ${collapsed ? "collapsed" : ""} `}>
            <Typography variant={"h4"} className="main-header__title">HackIllinois</Typography>
            <nav className="main-header__nav">
                <ul className="main-header__nav__items">
                    {expanded &&
                    <MenuIcon onClick={toggleDropdown} className="main-header__nav__menu-icon">menu</MenuIcon>
                    }
                    <li className="main-header__nav__item main-header__nav__item--selected">
                        <a href={"/#"}>
                            <Typography variant={"h6"}>Schedule</Typography>
                        </a>
                    </li>
                    <li className="main-header__nav__item">
                        <a href={"/#"}>
                            <Typography variant={"h6"}>Maps</Typography>
                        </a>
                    </li>
                    <li className="main-header__nav__item">
                        <a href={"/#"}>
                            <Typography variant={"h6"}>Prizes</Typography>
                        </a>
                    </li>
                    <li className="main-header__nav__item">
                        <a href={"/#"}>
                            <Typography variant={"h6"}>Travel</Typography>
                        </a>
                    </li>
                    <li className="main-header__nav__item">
                        <a href={"/#"}>
                            <Typography variant={"h6"}>Mentors</Typography>
                        </a>
                    </li>
                </ul>
            </nav>
            <MenuIcon onClick={toggleDropdown} className="main-header__menu-icon">menu</MenuIcon>
        </header>
    )
}

export default Header