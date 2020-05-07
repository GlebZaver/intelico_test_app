import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
	const handleClick = (element) => {
		if (ref.current && !ref.current.contains(element.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	});
};

export default useOutsideClick;
