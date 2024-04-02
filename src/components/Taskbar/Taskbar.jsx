import "../Taskbar/taskbar.css";
import winKey from "/src/assets/icons/w11-100.png";
import fileExplorer from "/src/assets/icons/fe-100.png";
import vsCode from "/src/assets/icons/vsc-100.png";
import mEdge from "/src/assets/icons/edge-100.png";


const Taskbar = () => {
    return(
        <>
            <div className="taskbar--container">
                <div className="leftBox">
                    <p>b1</p>
                </div>
                <div className="centerBox">
                    <img id="taskIcons" src={winKey} alt="desc" />
                    <img id="taskIcons" src={fileExplorer} alt="desc" />
                    <img id="taskIcons" src={vsCode} alt="desc" />
                    <img id="taskIcons" src={mEdge} alt="desc" />
                </div>
                <div className="rightBox">
                    <p>b3</p>
                </div>
            </div>
        </>
    )
}

export default Taskbar;