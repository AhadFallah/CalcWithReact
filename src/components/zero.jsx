import { useState, memo } from "react";
import "../index.css";
function Zero(props) {
	return (
		<button
			className={`${props.color} rounded-full pr-20 pl-2 hover:bg-red-500`}
			onClick={props.onClick}
			value={props.value}
		>
			<div class="flex items-center justify-center">
				<span class="w-5 h-5 flex items-center justify-center">
					{props.value}
				</span>
			</div>
		</button>
	);
}
export default memo(Zero);
