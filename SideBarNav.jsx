import { PlusAndMinus } from "./PlusAndMinus";

export default function SideBar(props) {
	const {selectedItems, setSelectedItems, onCheckout} = props;

	const handleDelete = (index) => {
		const updatedItems = [...selectedItems];
		updatedItems.splice(index, 1); // This is to remove the item which has that specific index.
		setSelectedItems(updatedItems); //This is update the state of the new Array.
	};

	const handleCheckout =()=>{

		onCheckout();
	};

	let deliveryCost = selectedItems.length ? 2.50 : 0;

	let pizzaCost = 0;
	for (let order of selectedItems) {
		let price = order[order.selectedSize];
		pizzaCost += price * order.selectedQuantity;
	}

	let formatPrice = price => new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(price);

	return <div className="sideBarContainer">
		<center>
			<img style={{width:"50px"}} src="https://purepng.com/public/uploads/large/purepng.com-shopping-basketshoppingcarttrolleycarriagebuggysupermarketsbasket-1421526532727qjew3.png"/>
			<br/>
			<span style={{ color: 'tomato', fontSize: "20px", marginBottom:"25px"}}>Basket</span>
		</center>

		{/*<span style={{ fontSize: '50px', color: 'black' }}>&#128722;</span> Basket*/}
		{selectedItems.map((order, index) => {
			let selectedQuantity = order.selectedQuantity;
			let setSelectedQuantity = quantity => {
				order.selectedQuantity = quantity;
				props.setSelectedItems([...selectedItems]);
			}
			return <div key={index} style={{ marginLeft: "20px", marginBottom: "10px", display: 'flex', alignItems: 'center'}}>
				<span>-</span>
				<span style={{fontSize: "17px", marginRight: "10px", width:"250px", textAlign:"left"}}>{order.title}, {order.selectedSize}</span>
				<span style={{ marginLeft: '25px', marginRight:"5px",  color: "tomate", fontSize:"17px", }}>Quantity </span>
				<PlusAndMinus selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity}/>
				<button onClick={() => handleDelete(index)}
				style={{ backgroundColor: 'white', border: 'none', marginLeft: '25px', padding: 0 }}>
					<span style={{ fontSize: '20px', color: 'black' }}><img style={{width:"30px"}} src="https://purepng.com/public/uploads/large/purepng.com-trash-cantrash-cansteelplasticdustbinrecyclebiniconclipart-14215266460572bunh.png"/></span>
				</button>
			</div>
			
		})}
		
	<div>
		<hr style={{display: "block", height: "1px", border: "0", borderTop: "1px solid #ccc", margin: "1em 0", padding: "0",}}/>
		<p className="price">Price: {formatPrice(pizzaCost)}</p>
		<p className="price">delivery costs: {formatPrice(deliveryCost)}</p>
		<p className="price">total price: {formatPrice(pizzaCost + deliveryCost)}</p>
		<button onClick={handleCheckout} className="checkOut">Check out</button>
	</div>
	</div>
}
