'use client';

import { updateProject } from "@/lib/apiProjects";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function LikeButton({data}) {
	const [isLiked, setIsLiked] = useState(false);

	function handleLike(e) {
		e.stopPropagation();

		updateProject({
			obj: {
				...data,
				likes: isLiked ? +data.likes - 1 : +data.likes + 1,
			},
			id: data.id,
		});
		setIsLiked(prev => !prev);
	}

	return (
		<button
			onClick={handleLike}
		>{ isLiked ? <FaHeart style={{width: '20px', fill: 'var(--color-primary)'}} /> : <FaRegHeart style={{width: '20px', fill: 'var(--color-primary)'}} /> }</button>
	);
}