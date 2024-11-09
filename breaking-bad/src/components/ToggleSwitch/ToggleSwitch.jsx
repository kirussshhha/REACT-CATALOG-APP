import "./ToggleSwitch.scss";

function ToggleSwitch({ onToggle }) {
  return (
    <div className="toggle-switch">
      <input 
        className="for-switch" 
        type="checkbox" 
        id="toggle"
        onChange={onToggle}
       />
      <label htmlFor="toggle" className="switch"></label>
    </div>
  );
}

export default ToggleSwitch;
