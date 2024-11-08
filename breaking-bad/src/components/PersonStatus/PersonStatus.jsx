import "./PersonStatus.scss";

function PersonStatus({ status }) {
  return (
    <p className={status === "Alive" ? "_alive" : "_deceased"}>{status}</p>
  );
}
export default PersonStatus;
