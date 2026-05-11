export function download(filename, dataOrder) {
	const csvContent = convertToCSV(dataOrder);
	const blob = new Blob([csvContent], {type:'text/csv;charset=utf-8;'});
	
	let element = document.createElement('a');
	if(element.download !==undefined){
		const url = URL.createObjectURL(blob);
		element.setAttribute('href', url);
		element.setAttribute('download', filename);
		
		element.style.display = 'none';
		document.body.appendChild(element);
		
		element.click();
		
		document.body.removeChild(element);
	}
}

function convertToCSV(dataOrder){
	const header = Object.keys(dataOrder[0]).join(';') + '\n';
	const rows = dataOrder.map(row=> Object.values(row).join(';') + '\n');
	return header + rows.join('');
}
