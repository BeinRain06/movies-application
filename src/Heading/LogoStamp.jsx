import "./LogoStamp.css";

export const LogoStamp = (props) => {
  return (
    <div className="head_title">
      <h2 className="section_title">{props.head}</h2>
    </div>
  );
};
