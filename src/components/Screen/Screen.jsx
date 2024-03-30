import "../Screen/screen.css";
import Taskbar from "../Taskbar/Taskbar";
import Viewport from "../Viewport/Viewport";

const Screen = () => {
    return(
        <>
            <div className="screen--container">
                <Viewport />
                <Taskbar />
            </div>
        </>
    )
}

export default Screen;