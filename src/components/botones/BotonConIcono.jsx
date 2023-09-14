import { TouchableOpacity } from "react-native";
import IconOutline from "../icons/IconOutline";

const BotonConIcono = ({ name, size, onPress, styleIcon, ...otrasProps }) => {
  return (
    <TouchableOpacity onPress={onPress} {...otrasProps}>
      <IconOutline size={size} name={name} style={styleIcon} />
    </TouchableOpacity>
  );
};

export default BotonConIcono;
