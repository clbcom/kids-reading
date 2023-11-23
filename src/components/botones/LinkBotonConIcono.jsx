import { Link } from "react-router-native";
import { Text, View } from "react-native";
import IconOutline from "../icons/IconOutline";
import IconFilled from "../icons/IconFilled";
import { Colores } from "../../constantes";

const LinkBotonConIcono = ({
  to,
  name,
  size,
  style,
  styleIcon,
  styleText,
  filled,
  children,
  ...otrasProps
}) => {
  return (
    <Link
      underlayColor={`${Colores.verdeMedio}cc`}
      style={style}
      to={to}
      {...otrasProps}
    >
      <View style={{ flexDirection: "row" }}>
        {filled
          ? <IconFilled size={size} name={name} style={styleIcon} />
          : <IconOutline size={size} name={name} style={styleIcon} />}
        {children && (
          <Text style={styleText}>
            {children}
          </Text>
        )}
      </View>
    </Link>
  );
};

export default LinkBotonConIcono;
