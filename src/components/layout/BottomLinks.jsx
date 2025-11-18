import { links } from "@/constants/links.js";

function BottomLinks({ className }) {
  return (
    <div className={`flex flex-col gap-3 ${className} mix-blend-difference`}>
      {links.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            onClick={()=> window.open(item.link) }
            className="px-3 py-3 text-white bg-black hoverable text-xl hover:scale-150 duration-300"
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}

export default BottomLinks;
