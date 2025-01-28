'use client';

import classes from './tabSelector.module.css';

export default function TabSelector({children}) {
	const removeAttrfromAll = (targetClassName = '') => document.querySelectorAll(`.${targetClassName}`)?.forEach(el => { el.removeAttribute('data-style') });

	function handleTabChange(e) {
		e.stopPropagation();
		const tab = e.target.closest('.tab');
		
		if(!tab) return;
		
		const target = tab?.dataset?.tab;	

		removeAttrfromAll('tab', 'active');
		tab?.setAttribute('data-style', 'active');

		removeAttrfromAll('content', 'active');
		document.querySelectorAll('.content').forEach(content => {
			if(content.dataset.name == target) content.setAttribute('data-style', 'active');
		});
	}

	return (
		<div className={classes.tabSelector} onClick={handleTabChange}>{children}</div>
	);
}