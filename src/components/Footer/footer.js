import EventCard from "../EventCard";
import Logo from "../Logo";
import Icon from "../Icon";
import { useData } from "../../contexts/DataContext";

const Footer = () => {
    const {data} = useData();
    const last = data?.events.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  )[0];
    return (
    <footer className="row" data-testid="footer-testid">
        <div className="col presta">
            <h3>Notre derniére prestation</h3>
            <EventCard
            imageSrc={last?.cover}
            title={last?.title}
            date={new Date(last?.date)}
            small
            label="boom"
            />
        </div>
        <div className="col contact">
            <h3>Contactez-nous</h3>
            <address>45 avenue de la République, 75000 Paris</address>
            <div>01 23 45 67 89</div>
            <div>contact@77events.com</div>
            <div>
            <a href="#twitch">
                <Icon name="twitch" />
            </a>
            <a href="#facebook">
                <Icon name="facebook" />
            </a>
            <a href="#twitter">
                <Icon name="twitter" />
            </a>
            <a href="#youtube">
                <Icon name="youtube" />
            </a>
            </div>
        </div>
        <div className="col description">
            <Logo size="large" />
            <p>
            Une agence événementielle propose des prestations de service
            spécialisées dans la conception et l&apos;organisation de divers événements
            tels que des événements festifs, des manifestations sportives et
            culturelles, des événements professionnels
            </p>
        </div>
    </footer>
    )
}

export default Footer;