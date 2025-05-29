interface IconProps {
  icon: string;
  height?: string | number;
  width?: string | number;
  className?: string;
}

const Icon = ({ icon, height = 24, width = 24, className }: IconProps) => {
  return <img className={className} src={icon} width={width} height={height} />;
};

export default Icon;
