export default function NotFound() {
	return (
		<main
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '1rem',
				backgroundColor: 'var(--color-darker)',
				width: 'clamp(250px, 100%, 600px)',
				margin: '2rem auto',
				padding: '1rem',
				borderRadius: '6px',
				textAlign: 'center'
			}}
		>
			<h1>لینک معتبر نیست</h1>
			<p>این لینک یافت نشد <br /> لطفا لینک وارد شده را بررسی نمایید!</p>
		</main>
	);
}