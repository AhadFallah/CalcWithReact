import { useState, memo } from "react";
import "../index.css";
function Button(props) {
	return (
		<button
			className={`${props.color} rounded-full p-3 hover:bg-red-500`}
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
export default memo(Button);
