import { download } from "./utils";

export const OrderedPizzasViewer = () => {
const [search, setSearch] = React.useState("");
const orders = JSON.parse(localStorage.getItem("pizzaOrders") || "[]");

const handleDownload = orders.flatMap(order =>
	order.pizzas.map(pizza => ({
	orderId: order.orderId,
	name: order.customer.Name,
	Lastname: order.customer.Lastname,
	Emailaddress: order.customer.EmailAddress,
	phoneNummber: order.customer.PhoneNumber,
	streetAddress: order.customer.StreetAddress,
	companyName: order.customer.CompanyName,
	City: order.customer.City,
	State: order.customer.State,
	Postal: order.customer.Postal,
	pizza: pizza.pizza,
	size: pizza.size,
	quantity: pizza.quantity,
	price: `${pizza.price}€`,
	confirmedAt: pizza.confirmedAt,
	}))
);

const filteredOrders = search.trim() === "" ? orders : orders.filter(order =>
	order.customer.Name.toLowerCase().includes(search.toLowerCase()) ||
	order.customer.Lastname.toLowerCase().includes(search.toLowerCase()) ||
	order.customer.EmailAddress.toLowerCase().includes(search.toLowerCase()) ||
	order.customer.PhoneNumber.toLowerCase().includes(search.toLowerCase()) ||
	order.customer.StreetAddress.toLowerCase().includes(search.toLowerCase()) ||
	order.customer.CompanyName.toLowerCase().includes(search.toLowerCase()) ||
	order.customer.City.toLowerCase().includes(search.toLowerCase()) ||
	order.customer.State.toLowerCase().includes(search.toLowerCase()) ||
	order.customer.Postal.toLowerCase().includes(search.toLowerCase())
);

return (
	<center>
	<h2 className="analyze-title">Analyze all orders</h2>
	<button className="download" onClick={(event) => download("ordersInfo.csv", handleDownload)}>Download orders info</button>
	<form className="search-form" onChange={(e) => setSearch(e.target.value)}>
		<div className="input-group">
		
			
			<input
				type="search"
				className="search-field"
				placeholder="Search by order number, location, keywords"
				value={search}
			/>
			<input
			type="submit"
			className="rstore-domain-search-button search-submit btn btn-primary"
			value="Search"
			/>
		
		</div>
	</form>
	<div className="mainDivTable">
		<table className="order-table">
		<thead>
			<tr>
			<th>Order ID</th>
			<th>Name</th>
			<th>Last Name</th>
			<th>Email Address</th>
			<th>Phone Number</th>
			<th>Street Address</th>
			<th>Company Name</th>
			<th>City</th>
			<th>State</th>
			<th>Postal</th>
			<th>Pizza</th>
			<th>Size</th>
			<th>Quantity</th>
			<th>Price</th>
			<th>Date sent</th>
			</tr>
		</thead>
		<tbody>
			{filteredOrders.map(order => (
			order.pizzas.map((pizza, index) => (
				<tr key={`${order.orderId}-${index}`} className="order-row">
				{index === 0 && (
					<>
					<td rowSpan={order.pizzas.length}>{order.orderId}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.Name}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.Lastname}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.EmailAddress}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.PhoneNumber}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.StreetAddress}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.CompanyName}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.City}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.State}</td>
					<td rowSpan={order.pizzas.length}>{order.customer.Postal}</td>
					</>
				)}
				<td>{pizza.pizza}</td>
				<td>{pizza.size}</td>
				<td>{pizza.quantity}</td>
				<td>{pizza.price}€</td>
				<td>{pizza.confirmedAt}</td>
				</tr>
			))
			))}
		</tbody>
		</table>
	</div>
	</center>
);
};
