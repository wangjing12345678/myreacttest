import React, { useEffect } from "react";
import axios from "axios";

function Comingsoon(props) {
  useEffect(() => {
    axios
      .get(
        "/ajax/comingList?ci=1&limit=1&movieIds=&token=&optimus_uuid=B0CC71C096A911EBA609453370FBFE2C59BC3AF5D61A4344A1A7C05FABCF4D21&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <div>comingsoon</div>;
}

export default Comingsoon;
