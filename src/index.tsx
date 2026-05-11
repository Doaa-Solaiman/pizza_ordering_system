import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { Welcome } from "./Logo";
import { Menu } from "./Menu";
import Cardcomponent from "./CardComponent";
import SideBar from "../SideBarNav";
import { Form } from "./Form";
import { OrdersSummary } from "./OrderSummary";
import { Successfully } from "./successfully";

import { OrderManagement } from "./OrderManagement";
import { OrderedPizzasViewer } from "./OrderedPizzasViewer";
import { Kitchen } from "../target/Kitchen";
import { InputEdit } from "./inputEdit";

interface Order {
	orderId;
	pizzas: PizzaOrder[]; // list/array, each element is PizzaOrder
	customer; // object of type Customer)
}

interface PizzaOrder {
	pizza: string;
	quantity?: number;
	size: "Small" | "Medium" | "Large";
	price: number;
}


function App() {
	const[selectedItems, setSelectedItems] = React.useState([]);
	const[orderID, setOrderID] = React.useState(Math.floor(Math.random()*100)+1);
	const[page, setPage] = React.useState("");
	const[formFields, setFormFields]=React.useState({
		Name: "",
		Lastname: "",
		EmailAddress: "",
		PhoneNumber: "",
		StreetAddress: "",
		CompanyName: "",
		City: "",
		State: "",
		Postal: "",
	});
	
	
	/*function sortingOrder(element) {
		console.log("toSaveOrder", element);
		setPage("summary");
	
		const dataFromLocalStorage = localStorage.getItem("orderSubmitted");
		let listOrder = [];
		if (dataFromLocalStorage) {
			listOrder = json.parse(dataFromLocalStorage);
			console.log("listOrder", listOrder)
		}
	
	}*/
	

	
	const handleCheckout = () => {
		setPage("checkout");
	};
	
	const handleFormSubmit = (orderDetails) => {
		//Test the code
		if (!Array.isArray(selectedItems)) {
			console.error("That is not Array");
			return;
		}
	
		setSelectedItems(selectedItems);
		setPage("summary");
	};
	
	const handleFormCancel = () => {
		setPage("");
	};
	
	
	const gobackToTheForm =()=>{
		setPage("")
	};
	
	
	const confirm=()=>{
		
		const currentDate = new Date();
		const formattedDate = currentDate.toISOString();
		setPage("confirm");
		
		/*
		Orders (list/array, each element is of type Order)
		
		Order
		- orderId
		- pizzas (list/array, each element is PizzaOrder)
		- customer (object of type Customer)
		
		PizzaOrder
		- pizza: string
		- quantity: number
		- size: "Small" | "Medium" | "Large"
		- price: number
		
		Customer
		- Name
		- LastName
		- ...
		
		*/
		
		let order = {
			orderId: orderID,
			pizzas: selectedItems.map(p => {
				return {
					pizza: p.title,
					quantity: p.selectedQuantity,
					size: p.selectedSize,
					price: p[p.selectedSize],
					confirmedAt: formattedDate,
				};
			}),
			customer: formFields,
			
		};
		
		let orders = JSON.parse(localStorage.getItem("pizzaOrders") || "[]");
		orders.push(order);
		
		
		localStorage.setItem("pizzaOrders",JSON.stringify(orders));
		
		setOrderID(Math.floor(Math.random()*100)+1);
	};
	
		
	
	
	
	
	// I want to reset everything after confirming.
	const backToTheMainPage=()=>{
		setPage("");
		setSelectedItems([]);
		setFormFields({
			Name:"",
			Lastname:"",
			EmailAddress:"",
			PhoneNumber:"",
			StreetAddress:"",
			CompanyName:"",
			City:"",
			State:"",
			Postal:"",
		});
	};
	
	
	const viewCardComponent = (group) =>
		group.map((element) => (
			<div className="card" key={element.id} style={{ width: "25%" }}>
				<Cardcomponent
					item={element}
					addToCart={(selectedSize) => {
						const newSelectedItem = { ...element }; // Makes a copy of the selected pizza element
						// Add information about the selected size to it
						newSelectedItem.selectedSize = selectedSize;
						newSelectedItem.selectedQuantity = 1;
						setSelectedItems([...selectedItems, newSelectedItem]);
					}}
				/>
			</div>
		));
		
		const menuEntries = [
			{id:1, button: "edit input", title: "1-pizza Tanno: ", Desc: "pasta with mozzarella cheesered onion and pepper", Small:5.60, Medium:6.50, Large:7.80, img: 'pizza-tanno.webp', changePhoto:"change photo"},
			{id:2, button: "edit input", title: "2-Pizza Salami: ", Desc: "salami, onions, cheese and seasonings.", Small:5.40, Medium:6.20, Large:7.40, img: 'pizza-salami.jpg', changePhoto:"change photo"},
			{id:3, button: "edit input", title: "3-Pizza Cheese: ", Desc: "Parmesan, fontina, mozzarella and feta cheese.", Small:7.50, Medium:9.40, Large:10.20, img: 'pizza-cheese.webp', changePhoto:"change photo"},
			{id:4, button: "edit input", title: "4-Pizza Margherita: ", Desc: "tomato, fresh mozzarella, basil leaves and pepper.", Small:6.50, Medium:7.00, Large:9.50, img: 'pizza-margherita.jpg', changePhoto:"change photo"},
			{id:5, button: "edit input", title: "5-pizza Olives: ", Desc: "tomato sauce, fresh mozzarella,fresh balck olives.", Small:5.00, Medium:6.30, Large:8.50, img: 'pizza-olives.webp', changePhoto:"change photo"},
			{id:6, button: "edit input", title: "6-Pizza Sauce: ", Desc: "tomato sauce, Ketchup,fresh vegetables.", Small:6.20, Medium:8.40, Large:9.50, img: 'pizza-sauce.webp', changePhoto:"change photo"}
		];
		
		if (location.hash=="#office")
			return(
				<div>
					<OrderManagement
						menuEntries={menuEntries}
					/>
					
					<OrderedPizzasViewer/>
				</div>
			)
			
			if (location.hash=="#kitchen")
				return <Kitchen/>
			
			if (location.hash=="#edit")
				return<InputEdit/>
	
	return (
		<div className="page">
			<div className="header">
				<Welcome />
			</div>
			<div className="content">
				{page == "" && (
					<>
						<div className="menu">{viewCardComponent(Menu)}</div>
						<div className="sidebar">
						<SideBar
							selectedItems={selectedItems}
							setSelectedItems={setSelectedItems}
							onCheckout={handleCheckout}
						/>
						</div>
					</>
				)}
				{page == "checkout" && (
					<Form onSubmit={handleFormSubmit} onGoBack={handleFormCancel} formFields={formFields} setFormFields={setFormFields}/>
				)}
				{page === "summary" && (
					<OrdersSummary
					selectedItems={selectedItems || []}
					goEditing={gobackToTheForm}
					goConfirming={confirm}
					orderID={orderID}
					/>
				)}
				
				{page === "confirm" && (
					<Successfully mainPage={backToTheMainPage}/>)}
			</div>
					{menuEntries}
		</div>
	);
}

window.onload = () => ReactDOM.render(<App />, document.getElementById("app"));
