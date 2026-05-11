export const OrderManagement =({ menuEntries }) => {
	let imagePath = "../images/new/";
	let openDialog = (selectedEntry) => { setSelectedEntry(selectedEntry); setDialogOpen(true); }
	let closeDialog = () => { setDialogOpen(false); setSelectedEntry(null); };
	let [dialogOpen, setDialogOpen] = React.useState(false);
	let [selectedEntry, setSelectedEntry] = React.useState(null);
	let saveEntry = (entry) => {
		
	};
	let deleteEntry = (entry) => {
		
	};
	
	return(
	
		<div className="mainBody">
			<div className="pageBody">
				<h1 style={{color:"rgb(27, 161, 226)"}}>Dashboard management</h1>
				<div className="whiteBody">
					<table style={{width:"100%"}}>
						<tr>
							<th style={{width:"10%"}}></th>
							<th style={{width:"70%"}}></th>
							<th style={{padding:"10px"}}>Small</th>
							<th style={{padding:"10px"}}>Medium</th>
							<th style={{padding:"10px"}}>Large</th>
							<th></th>
							<th></th>
						</tr>
						{menuEntries.map(entry =>
							<tr>
								<td><button className="editInput" onClick={e => openDialog(entry)}>{entry.button}</button></td>
								<td style={{textAlign:"left"}}><span style={{fontSize:"19px", color:"rgb(27, 161, 226)", }}>{entry.title}</span><br/>{entry.Desc}</td>
								<td>{entry.Small}€</td>
								<td>{entry.Medium}€</td>
								<td>{entry.Large}€</td>
								<td><img src={imagePath + entry.img} style={{ width: "90px"}} /></td>
								<td style={{width:"10%"}}><button className="editPhoto">{entry.changePhoto}</button></td>
							</tr>
						)}
					</table>
				</div>
			</div>
			<dialog open={dialogOpen}>
				<div>Edit {selectedEntry ? selectedEntry.title : ""}</div>
				<button onClick={e => {saveEntry(entry);closeDialog();}} >Save</button>
				<button onClick={e => {deleteEntry(entry); closeDialog();}} >Delete article</button>
			</dialog>
		</div>
	
	)
}
