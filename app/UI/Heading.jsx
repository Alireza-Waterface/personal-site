

export default function Heading({ type = '', size = 1, className = '', children }) {
	if(type == 'h1')
		return <h1 style={{ fontSize: `${size}rem` }} className={className}>{children}</h1>;
	if(type == 'h2')
		return <h2 style={{ fontSize: `${size}rem` }} className={className}>{children}</h2>;
	if(type == 'h3')
		return <h3 style={{ fontSize: `${size}rem` }} className={className}>{children}</h3>;
	if(type == 'h4')
		return <h4 style={{ fontSize: `${size}rem` }} className={className}>{children}</h4>;
	return;
}