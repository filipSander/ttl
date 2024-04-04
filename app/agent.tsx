import Shild from '@/shared/ui/icons/shild'
import Star from '@/shared/ui/icons/star'
import Image from 'next/image'
import React from 'react'

const Agent = () => {
	return (
		<section id="agent" className="agent">
			<div className="container">
				<div className="head">
					<h3>Преимущества импорта через агентский договор</h3>
				</div>
				<div className="wrap">
					<Image src="/agent.png" alt="agent" width={810} height={500} />
					<div className="blocks">
						<div className="block">
							<Shild />
							<span>
								Мы прикладываем к каждому отчёту копии всех первичных документов.
							</span>
						</div>
						<div className="block accent">
							<strong>Агент для международных закупок</strong>
							<span>
								Использование агента по договору для международных закупок - оптимальное
								решение. Агент берет на себя хлопоты и риски, обеспечивая безопасность и
								эффективность. Вы сохраняете деловые контакты и партнерские отношения.
								Не беспокойтесь о сложностях при импорте, доверьте задачу агенту.
								Получите консультацию и надежную защиту товара. Возврат НДС возможен.
								Наша финансовая прозрачность и отчетность помогут вам контролировать
								расходы.
							</span>
						</div>
						<div className="block">
							<Star />
							<span>
								Чтобы узнать подробности возврата НДС, обратитесь к моему блогу.
							</span>
						</div>
					</div>
				</div>
				<p className="hint-text">
					Мы полностью включаем все свои расходы,включая вознаграждение, в
					себестоимость.Таким образом, вы можете быть уверены,что у нас нет скрытых
					комиссий илидополнительных платежей.
				</p>
				<div className="agent-text"> Текст договора # </div>
			</div>
		</section>
	)
}

export default Agent
