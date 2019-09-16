arr.forEach((folder => {
	console.log("-"+folder.name + " " + " (" +folder.size +")")
	folder.children.map((child) => {
	console.log("  --"+child.name + " " + " (" +child.size +")")
    if (child.children === undefined) {

	} else {
		child.children.map((x)=> console.log("    ---" + x.name + "" + " ("+x.size+")"))
	}

})


}))