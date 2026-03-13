import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import '../styles/carousel.scss'

interface ContextValue {
	embla: EmblaCarouselType | undefined
	selectedIndex: number
}

interface Props {
	children: React.ReactNode
}

export const EmblaContext = React.createContext<ContextValue>({
	embla: undefined,
	selectedIndex: -1
})

const autoPlayOptions = { delay: 8000 }

const Carousel: React.FC<Props> = ({ children }) => {
	const [viewportRef, emblaApi] = useEmblaCarousel({ align: 'center' }, [Autoplay(autoPlayOptions)])
	const [selectedIndex, setSelectedIndex] = useState<number>(0)
	const sliderRef = useRef<HTMLDivElement>(null)

	const handleSelect = useCallback(() => {
		if (emblaApi) {
			setSelectedIndex(emblaApi.selectedScrollSnap())
		}
	}, [emblaApi])

	const handleMouseDown = useCallback(() => {
		const { current: elEmblaSlider } = sliderRef
		if (elEmblaSlider) {
			elEmblaSlider.style.cursor = 'grabbing'
		}
	}, [])

	const handleMouseUp = useCallback(() => {
		const { current: elEmblaSlider } = sliderRef
		if (elEmblaSlider) {
			elEmblaSlider.style.cursor = 'grab'
		}
	}, [])

	useEffect(() => {
		const { current: elSlider } = sliderRef
		if (elSlider) {
			elSlider.addEventListener('mouseup', handleMouseUp)
			elSlider.addEventListener('mousedown', handleMouseDown)
		}

		if (emblaApi) {
			handleSelect()
			emblaApi.on('select', handleSelect)
		}

		return () => {
			if (elSlider) {
				elSlider.removeEventListener('mouseup', handleMouseUp)
				elSlider.removeEventListener('mousedown', handleMouseDown)
			}

			if (emblaApi) {
				emblaApi.off('select', handleSelect)
			}
		}
	}, [emblaApi, handleMouseDown, handleMouseUp, handleSelect])

	return (
		<EmblaContext.Provider value={{ embla: emblaApi, selectedIndex }}>
			<div ref={viewportRef} className="embla">
				<div ref={sliderRef} className='embla-slider'>
					{children}
				</div>
			</div>
		</EmblaContext.Provider>
	)
}

export default Carousel
