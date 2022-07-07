import React from 'react'
import Logo from './logo'
import '../styles/footer.scss'

const Footer: React.FC = () => {
	return (
		<div className='footer'>
			<div className='footer__item footer__item-logo'>
				<Logo width={18} height={18} />
			</div>
			<a href='/' className='footer__item'>Kalify Inc</a>
			<a href='/' className='footer__item footer__item-longtext'>Privacy Policy</a>
			<a href='/' className='footer__item'>Github</a>
			<a href='/' className='footer__item'>Twitter</a>
		</div>
	)
}

export default Footer
