import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './HomeSlider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slides } from './Slides';

const HomeSlider = () => {
	return (
		<div>

			<Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop stopOnHover >
				{
					Slides.map((slide, index) => (
						<div key={index} className='Carousel__images'>
							<img src={slide.imageUrl} />
							<p className="legend">{slide.legend}</p>
						</div>
					))
				}



			</Carousel>
		</div>
	)
}

export default HomeSlider;
