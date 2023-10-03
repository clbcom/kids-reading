import { TouchableOpacity } from "react-native";
import IconOutline from "../icons/IconOutline";
import IconFilled from "../icons/IconFilled";

const BotonConIcono = ({
  name,
  size,
  onPress,
  styleIcon,
  filled,
  ...otrasProps
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...otrasProps}>
      {filled ? (
        <IconFilled size={size} name={name} style={styleIcon} />
      ) : (
        <IconOutline size={size} name={name} style={styleIcon} />
      )}
    </TouchableOpacity>
  );
};

export default BotonConIcono;
