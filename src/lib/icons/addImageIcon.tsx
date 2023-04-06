import { IconProps } from "./menuIcon";

export default function AddImageIcon({
  width,
  height,
  color,
  style,
}: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`w-${width} h-${height} ${color} ${style}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z" />
      <path d="M8 11l-3 4h11l-4-6-3 4z" />
      <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
    </svg>
  );
}
