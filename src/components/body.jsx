import React from "react";
import { useEffect, useCallback, useState } from "react";
import { flushSync } from "react-dom";
import "../index.css";
import Button from "./button.jsx";
import Zero from "./zero.jsx";
import stringState from "../atoms/stringState.js";
import { useRecoilState } from "recoil";

export default function Body(props) {
	const [string, setString] = useRecoilState(stringState);
	const [history, setHistory] = useState([]);
	const add = (value) => {
		flushSync(() => {
			setString((perv) => [...perv, value]);
		});
	};
	const handleButtons = useCallback((e) => {
		e.preventDefault();

		add(e.target.value, string.length);
	}, []);
	const handleEqual = (e) => {
		e.preventDefault();
		var ex = string.join("");
		var resault = eval(ex);
		setHistory((perv) => [...perv, ex]);
		setString([resault]);
	};
	useEffect(() => {
		console.log(string);
	}, [string]);
	useEffect(() => {
		if (history.length > 2) {
			console.log(history);
			history.shift();
		}
	}, [history]);
	return (
		<div className="flex justify-center m-5">
			<div className="border-2 border-black bg-black rounded-3xl ">
				{" "}
				<p
					className=" mx-5 mb-4 mt-32 justify-center bg-black text-white text-sm"
					dir="rtl"
				>
					{history.map((history) => (
						<React.Fragment>
							{history}
							<br />
						</React.Fragment>
					))}
				</p>
				<p
					className=" mx-5 mb-4 mt-4 justify-center bg-black text-white text-6xl"
					dir="rtl"
				>
					{string}
				</p>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Button color="bg-gray-300" value="AC" />
					<Button color="bg-gray-300" value="+/-" />
					<Button onClick={handleButtons} color="bg-gray-300" value="%" />
					<Button
						onClick={handleButtons}
						color="bg-amber-500 text-white"
						value="/"
					/>
				</div>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="7"
					/>
					<Button
						color="bg-zinc-600 text-white"
						onClick={handleButtons}
						value="8"
					/>
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="9"
					/>
					<Button
						onClick={handleButtons}
						color="bg-amber-500 text-white"
						value="*"
					/>
				</div>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="4"
					/>
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="5"
					/>
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="6"
					/>
					<Button
						onClick={handleButtons}
						color="bg-amber-500 text-white"
						value="+"
					/>
				</div>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="1"
					/>
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="2"
					/>
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="3"
					/>
					<Button
						onClick={handleButtons}
						color="bg-amber-500 text-white"
						value="-"
					/>
				</div>
				<div className="grid grid-row-5 grid-flow-col gap-4 mx-5 my-3">
					<Zero
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="0"
					/>
					<Button
						onClick={handleButtons}
						color="bg-zinc-600 text-white"
						value="."
					/>
					<Button
						onClick={handleEqual}
						color="bg-amber-500 text-white"
						value="="
					/>
				</div>
			</div>{" "}
		</div>
	);
}
