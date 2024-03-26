function createDom(root) {

	if(typeof root === 'string')
	{
		return document.createTextNode(root);
	}

	const element = document.createElement(root.type);

	if(root.attributes && typeof root.attributes === 'object')
	{
		for(const [attrName, attrValue] of Object.entries(root.attributes))
		{
			element.setAttribute(attrName, attrValue);
		}
	}

	if(typeof root === 'string')
	{
		element.textContent = root;
	}

	if(root.children && Array.isArray(root.children))
	{
		for(const child of root.children)
			{
				const childNode = createDom(child);
				element.appendChild(childNode);
			}
	}
	return element;
}

module.exports=createDom
