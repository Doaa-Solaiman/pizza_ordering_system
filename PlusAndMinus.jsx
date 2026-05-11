

export const PlusAndMinus = (props) => {

	const buttonsformatting = {
		width: "50px",
		padding:"5px",
		borderRadius:"50%",
		textAlign: "center",
		fontSize: "16px",
		cursor:"pointer",
		fontWeight: "bold",


	}

	const num = props.selectedQuantity;
	const setNum = props.setSelectedQuantity;

	const plus = () => {
		setNum(num + 1);

	}

	const minus = () => {
		if (num > 1)
		setNum(num-1)
	}

	return (

	<div style={{width: "100px", height: "30px", padding: "7px", borderRadius:"5px", display: "flex", justifyContent: "center", alignItems:"center"}}>

		<button onClick={plus} style={buttonsformatting}>+</button>
		<span style={{textAlign:"center", width: "50px"}}>{num}</span>
		<button onClick={minus} style={buttonsformatting}>-</button>

	</div>
	)
}
