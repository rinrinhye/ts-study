const sayHello = () => {
	return "hi";
};

import { init, exit } from "./myPackage";

init({ url: "tr" });
exit(2);
