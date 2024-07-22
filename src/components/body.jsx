import react from "react";
import "../index.css";
import Button from "./button.jsx";
import Zero from "./zero.jsx";
export default function Body(props) {
	return (
		<div className="flex justify-center m-5">
			<div className="border-2 border-black bg-black rounded-3xl ">
				{" "}
				<p
					className=" mx-5 mb-4 mt-32 justify-center bg-black text-white text-6xl"
					dir="rtl"
				>
					0
				</p>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Button color="bg-gray-300" value="AC" />
					<Button color="bg-gray-300" value="+/-" />
					<Button color="bg-gray-300" value="%" />
					<Button color="bg-amber-500 text-white" value="/" />
				</div>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Button color="bg-zinc-600 text-white" value="7" />
					<Button color="bg-zinc-600 text-white" value="8" />
					<Button color="bg-zinc-600 text-white" value="9" />
					<Button color="bg-amber-500 text-white" value="*" />
				</div>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Button color="bg-zinc-600 text-white" value="4" />
					<Button color="bg-zinc-600 text-white" value="5" />
					<Button color="bg-zinc-600 text-white" value="6" />
					<Button color="bg-amber-500 text-white" value="+" />
				</div>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Button color="bg-zinc-600 text-white" value="1" />
					<Button color="bg-zinc-600 text-white" value="2" />
					<Button color="bg-zinc-600 text-white" value="3" />
					<Button color="bg-amber-500 text-white" value="-" />
				</div>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Zero color="bg-zinc-600 text-white" value="0" />
					<Button color="bg-zinc-600 text-white" value="." />
					<Button color="bg-amber-500 text-white" value="=" />
				</div>
			</div>{" "}
		</div>
	);
}
