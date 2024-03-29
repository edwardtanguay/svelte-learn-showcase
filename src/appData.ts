import axios from "axios";
import { type Employee, type Skill } from "./types";

export const getEmployees = async () => {
	return new Promise<Employee[]>((resolve, reject) => {
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
		}, 0); // change to 1000 = 1 second, etc.
	});
};

export const getSkills = async () => {
	return new Promise<Skill[]>((resolve) => {
		(async () => {
			resolve(
				(
					await axios.get(
						"https://edwardtanguay.vercel.app/share/skills.json"
					)
				).data
			);
		})();
	});
};
