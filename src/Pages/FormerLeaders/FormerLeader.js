import './FormerLeader.css'
import React from 'react'

const FormerLeader = ({startYear,endYear,president,vicePresident}) => {
	return (
		<div className='formerleader'>
			<h1>{startYear} - {endYear}</h1>
			<div className='formerleader__exec'>
				<div className='formerleader__pres'>
					<h2>{president}</h2>
					<h4>President</h4>
				</div>

				<div className='formerleader__vp'>
					<h2>{vicePresident}</h2>
					<h4>Vice-President</h4>
				</div>
			</div>
		</div>
	)
}

export default FormerLeader
