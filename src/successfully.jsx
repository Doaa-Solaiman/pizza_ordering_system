export const Successfully =({mainPage})=>{
	
	
	const backToTheMainPage=()=>{
		mainPage();
	}
	
	return(
		<div className="styles">
		
			<p>Your order was successfully received!</p>
			<br/>
			<p className="timeEstimated">Kindly note, the estimated preparation time for your order is
				approximately 45 minutes.</p>
			<button className="ok" onClick={backToTheMainPage}>OK</button>
		
		</div>
	)
}
