import { VscStarFull } from "react-icons/vsc";

function Ranking({ rankingNumber}) {
  const star = [1, 2, 3, 4, 5];
  
  return (
    <div className="ranking_container">
      {star.map((number) => {
        if (rankingNumber >= number) {
          return <VscStarFull style={{ color: "#FF6060" }} className="star" key={number}/>;
        } else {
          return <VscStarFull style={{ color: "#E3E3E3" }} className="star" key={number}/>;
        }
      })}
    </div>
  );
}

export default Ranking;
