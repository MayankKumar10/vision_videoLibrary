import { useState } from 'react'

export const ToggleHook = () => {
  const [toggle, setToggle] = useState({
		type: "password",
		class: "fa-eye-slash",
	});
	const toggler = () => {
		toggle.type === "password"
			? setToggle({ type: "text", class: "fa-eye" })
			: setToggle({ type: "password", class: "fa-eye-slash" });
	};

	return [toggle, toggler];
};

