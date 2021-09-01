const residentButton = document.querySelector("#resident");

const getAllResidents = () => {
	console.log("jayme");
	axios
		.get("https://swapi.dev/api/planets/?search=Alderaan")
		.then((res) => {
			console.log(res.data);
			const resData = res.data.results[0].residents;
			for (let i = 0; i < resData.length; i++) {
				axios.get(resData[i]).then((response) => {
					let newParagraph = document.createElement("h2");
					newParagraph.textContent = response.data.name;
					document.body.appendChild(newParagraph);
				});
			}
		})
		.catch((err) => console.log(err));
};

residentButton.addEventListener("click", getAllResidents);
