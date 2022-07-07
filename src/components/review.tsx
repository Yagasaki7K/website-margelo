import React from 'react'
import '../styles/review.scss'

interface Props {
	by: string
	content: string
}

const Review: React.FC<Props> = ({ by, content }) => {
	return (
		<div className='review'>
			<div className='review__content'>
				{content}
			</div>
			<span className='review__by'>{by}</span>
		</div>
	)
}

export default Review
