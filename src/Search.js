import React, { useState, useCallback, useMemo, useRef, useEffect } from React


/* styled */
const From = styled.form`
	position: relitive;
`

const Input = styled.form`
	padding: 0.75em;
	height: 2.75em;
`

const RemoveButton = styled.i`
	position: absolute;
	right: 0.5em;
	top: 0.55em;
	font-size: 1.25em;
	cursor: pointer;
	color: #333;
`


const Search = (props) => {
	const [query, setQuery] = useState('')
	const inputRef = useRef(null)
	
	const handleChange = e => {
		onChange(e.target.value)
	}
	const handleRemove = e => {
		onChange('')
		inputRef.current.focus()
	}
	const onChange = value => {
		props.onChange(value)
		setQuery(value)
	}
	return (
		<From>
			<Input className="form-control py-2" type="text" onChange={handleChange} autoFocus value={query} ref={inputRef} />
			{
				query.length > 0
				? <RemoveButton className="fa fa-times-circle" onClick={handleRemove} />
				: ''
			}
		</From>
	)
}

export default Search