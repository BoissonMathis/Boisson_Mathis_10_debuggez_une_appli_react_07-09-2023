import { findByText, fireEvent, getByTestId, getByText, queryAllByTestId, queryByTestId, queryByText, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      // await screen.findByText("Merci pour votre message");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />)
    const container = document.querySelector('#EventsContainer');
    const title = getByText(container, 'Nos réalisations');
    const PDG = screen.getByText('Samira');
    // const eventsList = queryAllByTestId(container, 'card-image-testid');

    expect(container).toBeInTheDocument(screen);
    expect(title).toBeInTheDocument(container);
    // expect(container.queryByText("Samira")).not.toBeInTheDocument(container);
    // expect(screen.queryByText("modal content")).not.toBeInTheDocument();
    
    // expect(eventsList.length).toBeGreaterThan(1);
  })
  it("a list a people is displayed", () => {
    
    render(<Home />);
    const container = document.querySelector('#PeoplesContainer');
    const peoples = queryAllByTestId(container, 'card-image-testid');
    const PDG = screen.getByText('Samira');
    expect(peoples.length).toEqual(6);
    expect(PDG).toBeInTheDocument(container);
    
  })
  it("a footer is displayed", async () => {
    // to implement tester la presence des rubrique notre dernière presta, contactez nous et logo 77events
    render(<Home />);
    const container = document.querySelector('#footer');
    // const eventsContainer = document.querySelector('#EventsContainer');
    const lastPrestaTitle = queryByText(container,'Notre derniére prestation');
    const contactTitle = queryByText(container, 'Contactez-nous');
    const descriptionLogo = queryByTestId(container, 'logo-testid');

    expect(lastPrestaTitle).toBeInTheDocument();
    expect(contactTitle).toBeInTheDocument();
    expect(descriptionLogo).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", async () => {
    // to implement tester la présence d'une image la div last event + l'image doit correspondre a l'event le plus recent de la data
    render(<Home />);
    const container = document.querySelector('#footer');
    const titleLastPresta = queryByText(container,'Notre derniére prestation');
    
    expect(titleLastPresta).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    // mock la data 
  })
});