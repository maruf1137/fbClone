import React from 'react';
import Image from 'next/image';
import fbLogo from '../img/Facebook-logo.png';
import { BeakerIcon } from '@heroicons/react/solid';

const header = () => {
	return (
		<div>
			{/* <h1>header</h1> */}

			{/* left */}
			<div className="flex items-center">
				<Image src={fbLogo} width={40} height={40} layout="fixed" />
				<div className="flex">
					{/* <BeakerIcon className="h-5 w-5 text-blue-500" /> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>

					<input type="text" placeholder="Search Facebook" />
				</div>
			</div>
			{/* center */}
			{/* right */}
		</div>
	);
};

export default header;
