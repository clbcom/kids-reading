import { Link } from "react-router-native";
import IconOutline from "../icons/IconOutline";
import IconFilled from "../icons/IconFilled";
import { Colores } from "../../constantes";

const LinkBotonConIcono = ({
  to,
  name,
  size,
  styleIcon,
  filled,
  ...otrasProps
}) => {
  return (
    <Link underlayColor={`${Colores.verdeMedio}cc`} to={to} {...otrasProps}>
      {filled
        ? <IconFilled size={size} name={name} style={styleIcon} />
        : <IconOutline size={size} name={name} style={styleIcon} />}
    </Link>
  );
};

export default LinkBotonConIcono;
