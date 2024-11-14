import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgessBar = ({ percentage = 0 }) => {
  return (
    <div className="w-20 h-20">
      <CircularProgressbar
        styles={buildStyles({
          textColor: "white",
          textSize: "1.9rem",
          trailColor: "white",
        })}
        strokeWidth={6}
        value={percentage}
        text={`${percentage}%`}
      />
    </div>
  );
};

export default CircularProgessBar;
