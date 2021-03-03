import React, { useState, useCallback, useMemo, useRef, useEffect } from React
import styled from 'styled-components'

const ListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 1em 0;
`


const Products = (props) => {
	return (
		<ListWrapper>
			{ props.products.map(v => <Product value={v} key={v.id+'_'+v.title}/>) }
		</ListWrapper>
	)
}


export default Products