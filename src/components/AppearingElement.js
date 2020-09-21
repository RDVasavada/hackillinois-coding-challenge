import React from 'react'

function AppearingElement(props) {
    const [visible, setVisible] = React.useState(true)
    const [hasAppeared, setHasAppeared] = React.useState(false)
    const domRef = React.useRef()

    const config = {
        threshold: props.threshold || (props.variant === 'zoom-down' ? 1.0 : 0.80)
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                setVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setHasAppeared(true)
                }
            });
        }, config)

        const ref = domRef.current
        observer.observe(ref)

        return () => observer.unobserve(ref)
    })

    return (
        <div
            className={`appearing-element ${visible || hasAppeared ? 'visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    )
}

export default AppearingElement