export function Logo({ size = 25 }: { size?: number }) {
  return (
    <span
      className="grid place-items-center rounded-[7px]"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(150deg, var(--color-brand), #8a6bf0)",
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size * 0.56, height: size * 0.56 }}>
        <path
          d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"
          fill="#0b0d12"
          fillOpacity=".25"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2.3" fill="#fff" />
      </svg>
    </span>
  );
}
