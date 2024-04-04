'use client'
import Button from '@/shared/ui/button/Button'
import Arrow from '@/shared/ui/icons/arrow'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Screen = () => {
	const router = useRouter()
	return (
		<section className="screen">
			<div className="container">
				<div className="screen-wrap">
					<div className="screen-hint">Оптимальное решение</div>
					<div className="title">
						<h1>
							<div id="curved-corner"></div>
							Оптимизируйте <br />
							<strong>
								<div id="curved-corner"></div>
								логистику с нами
								<div className="rotate" id="curved-corner"></div>
							</strong>
							<br />
							это просто
							<div className="rotate" id="curved-corner"></div>
						</h1>
					</div>
					<p className="separator"></p>
					<span className="subtitle">
						Надежные услуги для вашего <br />
						импорта и экспорта: таможенное <br />
						оформление, логистика, проверка <br />
						контрагентов. Высокое качество <br />
						и профессионализм - гарантированы! <br />
					</span>

					<Button onClick={() => router.push('/#about')} className="screen-button">
						Больше информации о нас
						<p>
							<Arrow />
						</p>
					</Button>
				</div>
				<div className="block">
					<Image src="/screen-1.jpg" alt="home" width={592} height={738} />
				</div>
				<div className="block">
					<div className="block-inner">
						<Image src="/screen-3.jpg" alt="home" width={153} height={153} />
						<Link href="#" data-title="Наши проекты" className="rounded-arrow">
							<Arrow />
						</Link>
					</div>
					<Image src="/screen-2.jpg" alt="home" width={592} height={738} />
				</div>
			</div>
		</section>
	)
}

export default Screen
