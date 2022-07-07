import React from 'react'
import Logo from './logo'
import '../styles/contact.scss'

const Contact: React.FC = () => {
	return (
		<div className='contact-container'>
			<div className='contact'>
				<div className='contact__logo'>
					<Logo width={30} height={30} />
				</div>
				<h2 className='contact__title'>Contact Us</h2>
				<div className='contact__form'>
					<form className='form' action='/'>
						<div className='form__textfield'>
							<input type='text' name='companyName' placeholder='Company name' required />
						</div>
						<div className='form__textfield form__textfield-email'>
							<input type='text' name='email' placeholder='Your E-mail' required />
						</div>
						<textarea className='form__textarea' typeof='text' placeholder='Additional Information' maxLength={128}></textarea>
						<button type='submit' className='form__submit-btn'>Submit</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
