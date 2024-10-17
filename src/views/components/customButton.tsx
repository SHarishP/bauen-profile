"useClient";
import { CustomButtonProps } from "../types";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} ${textStyles}`}
      onClick={handleClick}
    >
      {title}
      {/* <span className={`flex-1 ${textStyles}`}>{title}</span> */}
    </button>
  );
}
