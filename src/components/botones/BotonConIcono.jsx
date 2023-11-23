import { Text, TouchableOpacity } from "react-native";
import IconOutline from "../icons/IconOutline";
import IconFilled from "../icons/IconFilled";

const BotonConIcono = ({
  name,
  size,
  onPress,
  styleIcon,
  styleText,
  filled,
  children,
  ...otrasProps
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...otrasProps}>
      {filled
        ? <IconFilled size={size} name={name} style={styleIcon} />
        : <IconOutline size={size} name={name} style={styleIcon} />}
      {children &&
        (
          <Text style={styleText}>
            {children}
          </Text>
        )}
    </TouchableOpacity>
  );
};

export default BotonConIcono;
