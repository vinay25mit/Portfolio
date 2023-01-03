import React from "react";

import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">EVENTS</h1>
      {/* <div className="download-btn"> */}

      {/* </div> */}
      <div className="project-container">
      <a
          className="btn event-btn"
          href="https://drive.google.com/file/d/1Wiuct2nbAYB2ywommXIY7l9sjOl9F7UD/view?usp=share_link"
        >
          RULES
        </a>
        <a
          className="btn event-btn"
          href="https://docs.google.com/document/d/1YE6LIQM2rabqaD_gV_07FWXMQ_oFV-Pg/edit?usp=share_link&ouid=110928713683485523457&rtpof=true&sd=true
"
        >
          CONSENT
        </a>
        <a
          href="https://docs.google.com/document/d/1cJl48y2fznOCpsGHIrEoP5WvF_NCCKXy/edit?usp=share_link&ouid=110928713683485523457&rtpof=true&sd=true
"
          className="btn event-btn"
        >
          DECLERATION
        </a>
        <a
          href="https://drive.google.com/file/d/1AW2-Z94nFIWRnvIzfn1anPF6kh-cQzp4/view?usp=share_link
"
          className="btn event-btn"
        >
          RULEBOOK
        </a>
        {WorkCardData.map((val, ind) => {

          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;
