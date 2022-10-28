export default function Navigation({ currentSelection, setCurrentSelection, categories }) {
	const navItems = categories.map((elem, idx) => {
		return (
			<li
				key={idx}
				onClick={() => setCurrentSelection(idx)}
				className={
					(currentSelection === idx ? "border-l-4 border-primary-600 text-primary-600 " : "text-gray-800 dark:text-light-200 ") +
					"sm:text-base text-sm px-3 py-2 cursor-pointer dark:hover:text-primary-600 hover:text-primary-600"
				}
			>
				{elem}
			</li>
		);
	});
	return <ul className="self-start w-full p-8 lg:max-w-xs rounded-xl font-secondary bg-light-100 dark:bg-dark-600">{navItems}</ul>;
}
