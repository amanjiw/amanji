const Header = () => {
	return (
		<div className="flex items-center h-20  capitalize sticky top-0 w-full bg-base-10 backdrop-blur-md ">
			<ul className="flex gap-14 text-lg w-full">
				<li className="flex-1">
					<span className="cursor-pointer text-2xl font-bold ">
						amanji
					</span>
				</li>
				<li className="hover:text-primary cursor-pointer">home</li>
				<li className="hover:text-primary cursor-pointer">about me</li>
				<li className="hovez`r:text-primary cursor-pointer">contact</li>
			</ul>
		</div>
	);
};

export default Header;
