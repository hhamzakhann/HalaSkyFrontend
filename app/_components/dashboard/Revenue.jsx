import Image from "next/image";
import { spartanFont } from "../../font";

export default function Revenue({ icon, title, number }) {
	return (
		<div className="flex gap-x-3">
				{icon ? (
					<div className="w-14 h-14 rounded-full flex items-center justify-center border border-white">
					<Image src={icon} />
					</div>
				) : (
					<div className="w-14 h-14 bg-slate-400 rounded-full mx-auto"></div>
				)}
				<div>
					<h2 className="font-light text-sm">{title}</h2>
					<p className="font-semibold text-2xl">{number}</p>
				</div>
		</div>

	);
}
