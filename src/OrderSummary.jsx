

export const OrdersSummary = (props) => {
	const { selectedItems, goEditing, goConfirming, orderID} = props;
	

	const gobackToTheForm=()=>{
		goEditing();
	};
	
	const confirm =()=>{
		goConfirming();
	};
	
	
	const viewingPrice=()=> {
		let deliveryCost = selectedItems.length? 2.50 : 0;
		
		let pizzaCost=0;
		for(let order of selectedItems) {
			let price = parseFloat(order[order.selectedSize]);
			pizzaCost= pizzaCost+price*order.selectedQuantity;
		}
		
		return pizzaCost + deliveryCost;
	};
	
	const formatPrice = (price)=>
		new Intl.NumberFormat ('de', {style:'currency', currency:'EUR'}).format(price);
		
	return (
		<div className="mainBox">
			<div className="box">
				<h3 style={{color:"dodgerblue", textAlign:"left"}}>Your order ID is: {orderID}</h3>
				<h3><u>Your order's summary</u></h3>
				<br/>
				{selectedItems.map((order, index) => (
					<p key={index}>
						{index + 1}- {order.title},{order.selectedSize}, Quantity: {order.selectedQuantity}
					</p>
					
				))}
				
				<p style={{
					fontFamily:"cursive",
					
				}}>
					💰 Total price: {formatPrice(viewingPrice())}</p>
				<center>
					<button onClick={gobackToTheForm} className="edit">&#128395; edit your inputs</button>
					<button onClick={confirm} className="confirm">Confirm and submit</button>
				</center>
			</div>
		</div>
	);
};
