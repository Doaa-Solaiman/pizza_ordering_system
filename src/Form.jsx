

export const Form = (props) => {
	const { onSubmit, onGoBack, formFields, setFormFields } = props;
	const[inputs,setInputs] = React.useState(formFields);

	
	const handleSubmit =(event)=>{
		event.preventDefault();
		console.log(inputs);
		onSubmit(inputs);

	};
	
	
	const handleFormCancel =()=>{
		onGoBack();
		
	};

	return (
		<div className="biggerFormContainer">
			<div className="smallerFormContainer">
				<button onClick={handleFormCancel} className="close">X</button>
				<h5>Please fill this form out to continue your order!</h5>

				<form
					onSubmit={handleSubmit}
					
				>
				
					<div className="firstPart">
					
						<label>Name</label>
						<input
							type="name"
							value={inputs.Name}
							onChange={(event) => {
								//const newFormInput = { ...inputs};
								//newFormInput.Name = event.target.value;
								//setInputs(newFormInput)
								setInputs({ ...inputs, Name: event.target.value });
								setFormFields({...inputs, Name: event.target.value})
							}}
						/>

						<label>Last Name</label>
						<input
							type="text"
							value={inputs.Lastname}
							onChange={(event) => {
								setInputs({ ...inputs, Lastname: event.target.value});
								setFormFields({...inputs,Lastname: event.target.value})
							}}
						/>
					</div>

					<div className="secondPart">
						<label>email address</label>
						<input
							type="email"
							value={inputs.EmailAddress}
							onChange={(event) => {
								setInputs({ ...inputs, EmailAddress: event.target.value });
								setFormFields({...inputs, EmailAddress: event.target.value})
							}}
						/>

						<label>Phone number</label>
						<input
							type="number"
							value={inputs.PhoneNumber}
							onChange={(event) => {
								setInputs({ ...inputs, PhoneNumber: event.target.value });
								setFormFields({...inputs, PhoneNumber: event.target.value})
							}}
						/>
					</div>

					<p style={{marginBottom: "10px", color:"gray"}}>
							Delivery address
					</p>

					<div className="thirdPart">
						<label>Street address</label>
						<input
							type="name"
							value={inputs.StreetAddress}
							onChange={(event) => {
								setInputs({ ...inputs, StreetAddress: event.target.value });
								setFormFields({...inputs, StreetAddress: event.target.value})
							}}
						/>

						<input
							type="name"
							value={inputs.CompanyName}
							placeholder="Copmany name (optional)"
							onChange={(event) => {
								setInputs({ ...inputs, CompanyName: event.target.value });
								setFormFields({...inputs,CompanyName: event.target.value})
							}}
						/>
					</div>

					<div className="forthPart">
						<label>City</label>
						<input
							type="name"
							value={inputs.City}
							onChange={(event) => {
								setInputs({ ...inputs, City: event.target.value });
								setFormFields({...inputs, City: event.target.value})
							}}
						/>

						<label>State/Province</label>
						<input
							type="name"
							value={inputs.State}
							onChange={(event) => {
								setInputs({ ...inputs, State: event.target.value });
								setFormFields({...inputs, State: event.target.value})
							}}
						/>
					</div>

					<label>Postal/ Zip code</label>
					<input
						type="number"
						value={inputs.Postal}
						onChange={(event) => {
							setInputs({ ...inputs, Postal: event.target.value });
							setFormFields({...inputs, Postal: event.target.value})
						}}
					/>

					<button onClick={handleSubmit} className="formButton">Continue</button>
				</form>
			</div>
		</div>
	);
};
