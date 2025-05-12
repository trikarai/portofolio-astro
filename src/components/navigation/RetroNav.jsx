const menu = [
  { name: "Home", route: "#top" },
  { name: "About Me", route: "#about" },
  { name: "Experience", route: "#experiences" },
  { name: "Portofolio", route: "#projects" },
  { name: "Contact", route: "#contact" },
];

import IconReact from "../icon/IconReact";

export default function RetroNav() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <IconReact />
        <nav className="bg-yellow-100 text-black font-mono border-b-4 border-yellow-500 shadow-md px-6 py-4">
          <ul className="flex space-x-6 text-lg">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.route}
                  className="hover:underline hover:text-blue-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
