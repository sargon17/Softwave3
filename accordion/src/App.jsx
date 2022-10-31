import { useState } from "react";

import AccordionBlock from "./Components/AccordionBlock";
import AccordionElement from "./Components/AccordionElement";

import "./scss/main.scss";

import MobileCover from "./assets/illustration-woman-online-mobile.svg";
import MobileCoverBG from "./assets/bg-pattern-mobile.svg";

function App() {
  const [accordion, setAccordion] = useState([
    {
      id: 1,
      title: "How many team members can I invite?",
      paragraph:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 2,
      title: "What is the maximum file upload size?",
      paragraph:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 3,
      title: "How do I reset my password?",
      paragraph:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 4,
      title: "Can I cancel my subscription?",
      paragraph:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 5,
      title: "Do you provide additional support?",
      paragraph:
        "No more than 2GB. All files in your account must fit your allotted storage space. No more than 2GB. All files in your account must fit your allotted storage space.No more than 2GB. All files in your account must fit your allotted storage space.No more than 2GB. All files in your account must fit your allotted storage space.No more than 2GB. All files in your account must fit your allotted storage space.No more than 2GB. All files in your account must fit your allotted storage space.No more than 2GB. All files in your account must fit your allotted storage space.",
    },
  ]);

  const [active, setActive] = useState(0);

  const toggleAccordion = (id) => {
    if (active === id) {
      setActive(0);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card__cover">
          <img src={MobileCover} alt="Mobile Cover" className="main-cover" />
          <img src={MobileCoverBG} alt="Mobile Cover BG" />
        </div>
        <div className="card__content">
          <h1 className="card__title">FAQ</h1>
          <AccordionBlock>
            {accordion.map((item) => {
              return (
                <AccordionElement
                  title={item.title}
                  paragraph={item.paragraph}
                  active={active === item.id ? true : false}
                  key={item.id}
                  onClick={() => toggleAccordion(item.id)}
                />
              );
            })}
          </AccordionBlock>
        </div>
      </div>
    </div>
  );
}

export default App;
