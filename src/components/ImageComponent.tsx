import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

interface ImageComponentProps {
   imgSrc: string;
   blurHashStr: string;
}

function ImageComponent({ imgSrc, blurHashStr }: ImageComponentProps) {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageLoaded(true);
		};
		img.src = imgSrc;
	}, [imgSrc]);

	return <>{!imageLoaded ? <Blurhash hash={blurHashStr} width={"100%"} height={"100%"} resolutionX={32} resolutionY={32} punch={1} /> : <img loading="lazy" className={` w-full h-full mr-[5px] object-cover`} src={imgSrc} alt="img" />}</>;
}

export default ImageComponent;
