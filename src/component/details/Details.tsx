import React from "react";
import { Game } from "../../helper/MethodGet";
import words from "../../wordsvariable/WORDS";

type TGame = {
  game: Game | undefined;
};

const Details: React.FC<TGame> = ({ game }) => {
  if (!game) return null;

  return (
    <div className="left_req_container">
      <details>
        <summary className="det_sum">System Requirements</summary>
        <div className="left_req_container_sum">
          <div className="left_req_box">
            <span className="det_sum_el">
              {words.OPERATING_SYSTEM} - {game.os}
            </span>
            <span className="det_sum_el">
              {words.MIN_PROCESSOR} - {game.minProcessor}
            </span>
            <span className="det_sum_el">
              Рек.процессор - {game.maxProcessor}
            </span>
            <span className="det_sum_el">
              {words.MIN_RAM} - {game.minRam}
            </span>
            <span className="det_sum_el">
              {words.MAX_RAM} - {game.maxRam}
            </span>
            <span className="det_sum_el">
              {words.DRIVERS} - {game.directX}
            </span>
            <span className="det_sum_el">
              {words.LAN} - {game.lan}
            </span>
            <span className="det_sum_el">
              {words.MEMORY} - {game.memory}
            </span>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Details;
