import iconUrl from "../assets/icon.png";

export interface IconProps {
  className: string;
}

export function Icon(props: IconProps) {
  return (
    <img {...props} src={iconUrl} />
  );
}
