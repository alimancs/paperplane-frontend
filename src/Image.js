import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Image({ image }) {
    <>
    <LazyLoadImage
     alt={image.alt}
     className={ image.className ? image.className : "image"}
     effect="blur"
     src={image.src}
     width={ image.width ? image.width : "100%"}
     height={ image.height ? image.height : "100%"}
     />
    </>
}