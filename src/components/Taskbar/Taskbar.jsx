import "../Taskbar/taskbar.css";
import winKey from "/src/assets/icons/w11-100.png";
import fileExplorer from "/src/assets/icons/fe-100.png";
import vsCode from "/src/assets/icons/vsc-100.png";
import VisStudio from "/src/assets/icons/vs.png";
import Arc from "/src/assets/icons/arc.svg";
import Discord from "/src/assets/icons/discord.png";
import Unreal from "/src/assets/icons/unreal.png";
import WinTerm from "/src/assets/icons/wt.png";
import Figma from "/src/assets/icons/figma-100.png";
import AffD from "/src/assets/icons/designer-100.png";
import Blender from "/src/assets/icons/blender.png";
import Davinci from "/src/assets/icons/davinci.png";

const Taskbar = () => {
  return (
    <>
      <div className="taskbar--container">
        <div className="leftBox">
          {/* Space holder */}
        </div>
        <div className="centerBox">
          <img id="taskIcons" src={winKey} alt="desc" />
          <img id="taskIcons" src={fileExplorer} alt="desc" />
          <img id="taskIcons" src={Blender} alt="desc" />
          <img id="taskIcons" src={vsCode} alt="desc" />
          <img id="taskIcons" src={Arc} alt="desc" />
          <img id="taskIcons" src={VisStudio} alt="desc" />
          <img id="taskIcons" src={Discord} alt="desc" />
          <img id="taskIcons" src={Davinci} alt="desc" />
          <img id="taskIcons" src={Unreal} alt="desc" />
          <img id="taskIcons" src={Figma} alt="desc" />
          <img id="taskIcons" src={WinTerm} alt="desc" />
          <img id="taskIcons" src={AffD} alt="desc" />
        </div>
        <div className="rightBox">
          <div id="lang" className="lang--container">
            <span>ENG</span>
          </div>
          <div id="timeAndDate" className="time--date--container">
            <span>00:00 PM</span>
            <span>12/25/2024</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
