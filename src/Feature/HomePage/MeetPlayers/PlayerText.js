import React from "react";
import Tags from "./../../../utills/Tags/Tags";

function PlayerText() {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Tags background="#0e1731" size="100px" color="#ffffff">
          Meet
        </Tags>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Tags background="#0e1731" size="100px" color="#ffffff">
          {" "}
          The
        </Tags>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Tags background="#0e1731" size="100px" color="#ffffff">
          {" "}
          Players
        </Tags>
      </div>
      <div>
        <Tags
          background="#ffffff"
          size="27px"
          color="#0e1731"
          link={true}
          LinkTo={`/the_team`}
        >
          Show me All Of'em
        </Tags>
      </div>
    </div>
  );
}

export default PlayerText;
