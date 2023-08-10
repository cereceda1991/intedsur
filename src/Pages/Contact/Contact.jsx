import ContactCards from "../../components/ContactCards/ContactCards"
import ContactUs from "../../components/ContactUs/ContactUs "
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="about__container">
                <h1>Contáctanos</h1>
            </div>
            <ContactUs />
            <div className="container_cards">
            <ContactCards />
            </div>

        </>
    )
}

export default Contact