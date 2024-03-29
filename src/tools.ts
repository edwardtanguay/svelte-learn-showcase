export const getEmployees = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			const response = await fetch(
				"https://edwardtanguay.vercel.app/share/employees.json"
			);
			if (response.ok) {
				const employees = response.json();
				resolve(employees);
			} else {
				reject("Error fetching data.");
			}
		}, 2000);
	});
};
