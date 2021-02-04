import './Partners.css';
import React from 'react'

const Partners = () => {
	return (
		<div className = 'Partners'>
			<h3>Meet our parners and friends</h3>
			<div className='parters__box'>
				<ul className='Partners__box-logoList'>
					<li>
						<a href='http://moe-liberia.org/' target='_blank'>
							<img className='partners_lg' src='/assets/imgs/moe.png' alt='moe' />
						</a>
					</li>
					<li>
						<a href='http://www.mofa.gov.lr/public2/index.php' target='_blank'>
							<img className='partners_lg' src='/assets/imgs/mofa.png' alt='mofa' />
						</a>
					</li>
					<li>
						<a href='https://www.amci.ma/' target='_blank'>
							<img className='partners_lg' src='/assets/imgs/amci.png' alt='amci' />
						</a>
					</li>
					<li>
						<a href='https://cesam-centrale.ma/amci/bourse-search?fbclid=IwAR0JQv54UCKitHnemOpN8n1MZkwG0IQVy_7vU7KCjLBSHkBMqBKPEg3vLg8' target='_blank'>
							<img className='partners_lg' src='/assets/imgs/cesam.jpg' alt='CESAM' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Partners
