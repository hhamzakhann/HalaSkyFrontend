

import Image from "next/image";
import { spartanFont } from "../../font";

export default function CountCard({ icon, title, number }) {
	return (
		
		<div className={`shadow-md px-12 py-8 rounded-xl grid justify-center gap-3 ${spartanFont.className}`}>
			{icon ? (
				<div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto">
					<Image src={icon} />
				</div>
			) : (
				<div className="w-14 h-14 bg-slate-400 rounded-full mx-auto"></div>
			)}

			<div className="space-y-1 mx-auto text-center">
				<h2 className="font-light text-sm">{title}</h2>
				<p className="font-semibold text-3xl">{number}</p>
			</div>
		</div>
	);
}
