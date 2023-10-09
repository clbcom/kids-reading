import Icon from "react-native-vector-icons/Ionicons";

const IconFilled = ({ name, ...other }) => {
  return <Icon name={`${name}`} size={24} {...other} />;
};

export default IconFilled;
