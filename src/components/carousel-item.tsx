import React, { useContext, useEffect } from 'react'
import { EmblaContext } from './carousel'
import '../styles/carousel.scss'

interface Props {
	index: number
	children: React.ReactElement
}

const CarouselItem: React.FC<Props> = ({ index, children }) => {
	const { embla: emblaApi, selectedIndex } = useContext(EmblaContext)
	const isActive = index === selectedIndex

	function gotoReview() {
		if (emblaApi) {
			emblaApi.scrollTo(index)
		}
	}

	useEffect(() => {
	}, [selectedIndex])

	return (
		<div onClick={gotoReview} className={`${isActive ? 'active' : ''} embla-slider__item`}>
			{children}
		</div>
	)
}

export default CarouselItem
