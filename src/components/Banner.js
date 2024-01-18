import { useState, useEffect } from "react"
import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { Nav } from "react-bootstrap"

import bannerImg from "../assets/circle_1.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Developer", "Software Engineer", "Machine Learning Developer", "Data Scientist"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome To My Portfolio</span>
                        <h1>{`Hi I'm Charlie a `}<span className="wrap">{text}</span></h1>
                        <p>I am a web developer based in Seattle Washington. I have a passion for data science and love to create and learn about all aspects in computer science.</p>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('contact')}>
                            <button onClick= {() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={bannerImg} alt="Banner Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}