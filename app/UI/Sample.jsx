import Link from "next/link";

import classes from './sample.module.css';

export default function Sample({ data }) {
	return (
		<div>
			<Link className={classes.sample} href={`/projects/${data.id}`}>
				<div className={classes.sampleBG}>
					<img
						src={`https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/projects/p${data.id}-1.webp`}
						alt={data.title || 'تصویر پروژه'}
						loading='lazy'
						fetchPriority='low'
						className={classes.img}
					/>
				</div>

				<div className={classes.sampleData}>
					<p>{data.title}</p>
					{/* <div>
						<span>{data.likes}</span>
						<LikeButton data={data} />
					</div> */}
				</div>

				<p>{ data.description.length > 100 ? data.description.slice(0, 100) + ' ...' : data.description.slice(0, 100) }</p>
			</Link>
		</div>
	);
}