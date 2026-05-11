export const InputEdit = ()=> {
	return(
		<div>
			<div className="mainbodyEdit">
				<div className="formEdit">
					<h3 style={{fontSize:"25px", marginBottom:"15px", textAlign:"center", color:"gray", textDecoration:"underLine"}}>edit pizza Salami</h3>
					<p>Order's Name</p>
					<input type="name"/>
					
					<p>Description</p>
					<textarea></textarea>
					
					<p style={{fontSize:"20px", marginBottom:"15px", textAlign:"center", color:"gray"}}>Size & Price</p>
						<div className="radio-group">
							<input type="radio" id="Small" name="size" value="Small"/>
							<label htmlFor="Small">Small</label>
							<input style={{width:"50px", height:"30px", alignItems:"center"}}  className="radioInput" type="name"/>
						</div>
							<div className="radio-group">
							<input type="radio" id="Medium" name="size" value="Medium"/>
							<label htmlFor="Medium">Medium</label>
							<input style={{width:"50px", height:"30px", alignItems:"center"}} className="radioInput" type="name"/>
						</div>
							<div className="radio-group">
							<input type="radio" id="Large" name="size" value="Large"/>
							<label htmlFor="Large">Large</label>
							<input style={{width:"50px", height:"30px", alignItems:"center"}} className="radioInput" type="name"/>
						</div>
					<button className="save">Save</button>
					<button className="deleteArticle">Delete Article</button>
				</div>
			</div>
		</div>
	)
	
}
