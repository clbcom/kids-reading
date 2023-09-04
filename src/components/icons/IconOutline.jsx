import Icon from "react-native-vector-icons/Ionicons";

const IconOutline = ({ name, ...other }) => {
  return <Icon name={`${name}-outline`} size={24} {...other} />;
};

export default IconOutline;
