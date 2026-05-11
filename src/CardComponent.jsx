export default function Cardcomponent(props) {
	let item = props.item;
	const [quantity, setQuantity] = React.useState(0);

	const handleAddToCart = (size) => {
		setQuantity(quantity + 1);
		props.addToCart({ title: props.title, size, quantity: quantity + 1 });
	};

//	let formatPrice = price => new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(price);

//	let formatPrice = price => {
//		return new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(price);
//	}

	let formatPrice = function(price) {
		return new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(price);
	}

//	function formatPrice(price) {
//		return new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(price);
//	}

	let imagePath = "../images/new/";

	return <div>
		<img src={imagePath + item.img} alt={item.title} style={{ width: '100%', height: '220px' }} />
		<h3>{item.title}</h3>
		<p style={{ color: 'gray' }}>{item.description}</p>
		<p>Small: {formatPrice(item.Small)}</p>
		<p>Medium: {formatPrice(item.Medium)}</p>
		<p>Large: {formatPrice(item.Large)}</p>
		<p style={{fontSize:'20px', color: 'gray'}}>Add to basket</p>
		<center>
			<button className="blueButton" onClick={() => props.addToCart("Small","size",1)}>Small</button>
			<button className="blueButton" onClick={() => props.addToCart("Medium", "size",1)}>Medium</button>
			<button className="blueButton" onClick={() => props.addToCart("Large", "size",1)}>Large</button>
		</center>
	</div>
}
