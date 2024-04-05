import Layers from '@/shared/ui/icons/layers'
import Image from 'next/image'
import React from 'react'

const Project = () => {
	return (
		<section id="project" className="project">
			<div className="container">
				<div className="head">
					<h3>наши проекты</h3> <Layers />
				</div>
				<div className="wrap">
					<div className="list-item">
						<Image src="/item.png" alt="image" width={810} height={500} />
						<div className="text">
							<p>Lorem ipsum dolor sit amet</p>
							<strong>Lorem ipsum dolor sit amet</strong>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</span>
						</div>
						<div className="data">
							<p>Октябрь</p>
							<span>29.02, 4.03</span>
						</div>
					</div>
					<div className="list-item">
						<Image src="/item.png" alt="image" width={810} height={500} />
						<div className="text">
							<p>Lorem ipsum dolor sit amet</p>
							<strong>Lorem ipsum dolor sit amet</strong>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</span>
						</div>
						<div className="data">
							<p>Октябрь</p>
							<span>29.02, 4.03</span>
						</div>
					</div>
					<div className="list-item">
						<Image src="/item.png" alt="image" width={810} height={500} />
						<div className="text">
							<p>Lorem ipsum dolor sit amet</p>
							<strong>Lorem ipsum dolor sit amet</strong>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</span>
						</div>
						<div className="data">
							<p>Октябрь</p>
							<span>29.02, 4.03</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Project
