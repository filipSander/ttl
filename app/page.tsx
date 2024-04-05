import Form from '@/shared/ui/form/Form'
import BoxIcon from '@/shared/ui/icons/box'
import Phone from '@/shared/ui/icons/phone'
import Image from 'next/image'
import Screen from './homeScreenComponents/screen'
import About from './homeScreenComponents/about'
import Agent from './homeScreenComponents/agent'
import Project from './homeScreenComponents/project'

const HomePage = () => {
	return (
		<>
			<Screen />
			<section className="form-section">
				<div className="container">
					<div className="head accent">
						<h3>Узнать о наших услугах</h3> <BoxIcon />
					</div>

					<div className="wrapper">
						<Form />

						<div className="info">
							<div className="wrap">
								<h5>Также вы можете написать нам в соц. сетях</h5>
								<span>
									Задайте вопросы или расскажите о своих задачах в анкете или через
									удобную для вас соц. сеть и мы свяжемся с вами и обсудим запрос.
								</span>
								<ul>
									<li>
										<Phone />
										<a href="tel:">
											8 (800) 555-35-35 <br /> Name
										</a>
									</li>
									<li>
										<Phone />
										<a href="tel:">
											8 (800) 555-35-35 <br /> Name
										</a>
									</li>
								</ul>
								<a href="mialto:">
									<Image src="/email.png" alt="email" width={250} height={250} />
								</a>
							</div>
							<Image
								className="img"
								src="/info.png"
								alt="info"
								width={400}
								height={830}
							/>
						</div>
					</div>
				</div>
			</section>
			<About />
			<Agent />
			<Project />
		</>
	)
}

export default HomePage
