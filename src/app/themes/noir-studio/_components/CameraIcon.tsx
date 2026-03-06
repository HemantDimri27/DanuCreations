export default function CameraIcon({ size = 32, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * (44 / 60)}
      viewBox="0 0 60 44"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity }}
      className={className}
    >
      {/* Camera body */}
      <rect x="2" y="12" width="56" height="30" rx="4" />
      {/* Viewfinder bump */}
      <path d="M21 12 L25 4 H35 L39 12" />
      {/* Outer lens ring */}
      <circle cx="30" cy="27" r="10" />
      {/* Inner lens */}
      <circle cx="30" cy="27" r="5.5" />
      {/* Flash dot */}
      <circle cx="50" cy="19" r="1.5" fill="white" stroke="none" />
    </svg>
  );
}
