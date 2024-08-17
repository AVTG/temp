import { NavLink } from "react-router-dom";
import "./style.css"; // Ensure this imports your custom CSS

export const SportsElement = (props) => {
  return (
    <NavLink
      to={`/sports/${props.currElement.id}`}
      className="relative flex flex-col gap-[1.5rem] items-center justify-center"
    >
      <figure className="snip1566 relative w-[200px] h-[200px] group">
        {/* Main Image */}
        <div className="overflow-hidden rounded-full relative">
          <img
            className="object-cover w-[200px] h-[200px] rounded-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            alt="Ellipse"
            src={props.currElement.image}
          />
        </div>

        {/* Black Fade */}
        <figcaption className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 rounded-full bg-black/90 group-hover:opacity-100">
          {/* Optionally, you can add an icon or other content here */}
        </figcaption>

        {/* Overlay Container */}
        <div className="overlay-container">
          <img
            className="overlay-image"
            alt="Overlay"
            src={props.currElement.overlayImg} // New image
          />
        </div>
      </figure>

      {/* Sports Name */}
      <div className="[font-family:'Inter-SemiBold',Helvetica] text-black text-[1.65rem] tracking-[-2.2px] leading-[normal]">
        {props.currElement.sportsName}
      </div>
    </NavLink>
  );
};
