import IconRetroReact from "../../assets/icon/icon-retro-react.webp";

export default function RetroNav() {
  return (
    <div
      className="absolute right-1 top-1 cursor-help hover:scale-125"
      title="React Component"
    >
      <img src={IconRetroReact.src} width="36" height="36" alt="React" />
    </div>
  );
}
