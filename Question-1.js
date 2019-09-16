var arr = [
	{
		name: 'Folder 1',
		type: 'folder',
		size: '34kb',
		children: [
			{
				name: 'Folder 11',
				type: 'folder',
				size: '14kb',
				children: [
					{
						name: 'Folder 111',
						type: 'folder',
						size: '14kb',
						children: []
					},
					{
						name: 'Folder 112',
						type: 'folder',
						size: '14kb',
						children: []
					},
					{
						name: 'file113.png',
						type: 'file',
						size: '2kb'
					}
				]
			},
			{
				name: 'Folder 12',
				type: 'folder',
				size: '14kb',
				children: []
			},
			{
				name: 'Folder 13',
				type: 'folder',
				size: '14kb',
				children: [
					{
						name: 'Folder 131',
						type: 'folder',
						size: '14kb',
						children: []
					},
					{
						name: 'Folder 132',
						type: 'folder',
						size: '14kb',
						children: []
					},
					{
						name: 'file133.png',
						type: 'file',
						size: '2kb'
					}
				]
			}
		]
	},
	{
		name: 'Folder 2',
		type: 'folder',
		size: '34kb',
		children: [
			{
				name: 'file21.png',
				type: 'file',
				size: '2kb'
			},
			{
				name: 'file22.png',
				type: 'file',
				size: '2kb'
			},
			{
				name: 'file23.png',
				type: 'file',
				size: '2kb'
			},
			{
				name: 'file24.png',
				type: 'file',
				size: '2kb'
			}
		]
	}
]


/** 
 * QUESTION 1
 **/
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


/**
 	Display result:
	
	-Folder 1 (34kb)
		--Folder 11 (14kb)
			---Folder 111 (14kb)
			---Folder 112 (14kb)
			-->file113.png
		--Folder 12 (14kb)
		--Folder 13 (14kb)
			---Folder 131 (14kb)
			---Folder 132 (14kb)
			-->file133.png (14kb)
	-folder 2 (34kb)
		->file21.png (14kb)
		->file22.png (14kb)
		->file23.png (14kb)
		->file24.png (14kb)
 */
