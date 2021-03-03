import React, { useState, useCallback, useMemo, useRef, useEffect } from React
import styled from 'styled-components'

const Title = styled.div`
	
`

const TitleBar = (props) => {
	return (
		<div className="jumbotron">
			<h1>
				{props.title}
				<br />
				<small>쇼핑몰 검색 | {props.query}</small>
			</h1>
		</div>
	)
}


export default TitleBar