import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/Button'

const Header = () => {
	return (
		<header>
			<div className="container">
				<Image src="/logo.svg" alt="logo" width={250} height={84} />
				<ul>
					<li>
						<Link href="/#agent">Поиск поставщиков</Link>
					</li>
					<li>
						<Link href="/#agent">Поставщики товаров</Link>
					</li>
					<li>
						<Link href="/#project">Наши проекты</Link>
					</li>
					<li>
						<Link href="/#about">О Нас</Link>
					</li>
				</ul>
				<Button navigate="/#form"> Рассказать о задаче</Button>
			</div>
		</header>
	)
}

export default Header
