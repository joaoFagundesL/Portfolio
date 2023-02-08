let botoes = document.querySelector('#botoes-lista');

botoes.addEventListener('click', (e) => {
	removerBg();

	let botao = e.target;
	const projetos = document.querySelector('#projetos');
	const about = document.querySelector('#sobre')
	const skills = document.querySelector('#skills');

	if (botao.textContent == 'Projects') {
		botao.classList.add('bg-terminal');
		about.classList.remove('bg-terminal');
		skills.classList.add('hidden');
		projetos.classList.remove('hidden');
		about.classList.add('hidden');
	}

	else if (botao.textContent == 'About') {
		botao.classList.add('bg-terminal');
		skills.classList.add('hidden');
		about.classList.remove('hidden');
		projetos.classList.add('hidden');
	}

	else if (botao.textContent == 'Terminal') {
		skills.classList.remove('hidden');
		botao.classList.add('bg-terminal');
		about.classList.add('hidden');
		projetos.classList.add('hidden');

		document.querySelector('input').focus();
	}
});

function removerBg() {
	let botoesArr = document.querySelectorAll('#botoes-lista li');
	botoesArr.forEach((botao) => {
		botao.classList.remove('bg-terminal');
	});
}

const skills = document.querySelector("#skills-container");
function clear() {
	skills.innerHTML = "";
}


function help() {
	const commands = [ // Here are all the commands I need
		{ name: 'education', description: '→ my education' },
		{ name: 'about', description: '→ a little bit about me' },
		{ name: 'skills', description: '→ what about take a look at my skills?' },
		{ name: 'projects', description: '→ see about my projects' },
		{ name: 'socials', description: '→ check out all my social accounts' },
		{ name: 'help', description: '→ if you are struggling to use this' },
		{ name: 'clear', description: '→ clear the terminal' },
		{ name: 'email', description: '→ here you can check my email' },
		{ name: 'whatsapp', description: '→ send me a message' },
		{ name: 'cowsay', description: '→ here is an advice/quote, im sure you will like it' },
	];

	let divContainer = document.createElement('div');

	// Instead of writing each class add, I can do this way. It's like passing an array of classes
	divContainer.classList.add(...['flex', 'flex-col', 'gap-4', 'sm:gap-0', 'mb-6']);

	const commandList = commands.map(({ name, description }) => { // I could use "commands.map((e) => )". But I would have to use "e.name", "e.description".
		return ` 
        <div class="flex flex-col sm:grid grid-cols-1 sm:grid-cols-new1">
            <span class="text-rose-500"> <span class="text-green-400">➤</span> ${name}</span>
            <span class="col-start-2 text-white">${description}</span>
        </div>
        `;
	}).join(''); // I'm joining because I'm using the innerHTML. This way is much more easy, because I don't have to create each element and append. I do at once

	divContainer.innerHTML = commandList;
	skills.appendChild(divContainer);

	return divContainer;
}

function errorMessage(command) {
	let err = document.createElement('p');
	err.textContent = `Command '${command}' not found`;
	err.classList.add(...['text-white', 'mb-4']);
	return err;
}

function socials() {
	const socials = [
		{ name: 'GitHub', link: 'https://github.com/joaoFagundesL' },
		{ name: 'Linkedin', link: 'https://www.linkedin.com/in/joao-fagundes-5b6657222/' },
	];

	let divContainerSocials = document.createElement('div');
	divContainerSocials.classList.add(...['flex', 'flex-col', 'gap-4', 'sm:gap-0', 'mb-6']);

	const socialList = socials.map(({ name, link }) => {
		return `
            <ul >
                <li class="flex flex-col sm:grid grid-cols-1 sm:grid-cols-new1">
                    <p class="text-rose-500">* ${name}</p>
                    <a class="text-white underline" target="_blank" href="${link}">${link}</a>
                </li>
            </ul>
        `
	}).join('');

	divContainerSocials.innerHTML = socialList;
	skills.appendChild(divContainerSocials);
}

function education() {
	const education = [
		{ title: 'Bacharelado em Ciência da Computação', description: 'Universidade Tecnológica Federal do Paraná | Ponta Grossa', time: '2020 ~ 2024' },
		{ title: 'English Course', description: 'Reis Vergara Idiomas', time: '2019 ~ present' },
	];

	let divContainerEducation = document.createElement('div');

	education.map(({ title, description, time }) => {
		const info = `
            <h1 class="font-bold text-white"> <span class="text-green-400">➤</span> ${title}</h1>
            <p class="text-white">${description}</p>
            <p class="text-white">${time}</p>
        `

		let divInfo = document.createElement('div');
		divInfo.classList.add(...['mb-6']);

		divInfo.innerHTML = info;
		divContainerEducation.appendChild(divInfo);
	});

	skills.appendChild(divContainerEducation);
}

async function cowsay() {
	let quote = await getQuote();

	let divContainerCow = document.createElement('div');

	let cow = `

< ${quote.content} "${quote.author}" >
       \\
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
    `;

	let lines = cow.split('\n');
	for (let line of lines) {
		let pre = document.createElement('pre');
		pre.textContent = line;
		pre.classList.add(...['text-green-200', 'whitespace-pre-wrap']);

		divContainerCow.appendChild(pre);
	}
	skills.appendChild(divContainerCow)
}

async function getQuote() {
	const url = `https://api.quotable.io/random`;
	const response = await fetch(url);

	if (response.status != 200) {
		console.err('error');
	}

	const data = await response.json();
	return data;
}

function skillsTerminal() {
	const skillsList = [
		{ name: 'HTML, CSS, SCSS, Tailwind, JavaScript, API' },
		{ name: 'Java, JPA, Hibernate, Maven' },
		{ name: 'MySQL' },
		{ name: 'C' },
		{ name: 'Git, GitHub' },
		{ name: 'English C1 Level', link: 'https://www.efset.org/cert/2MSi24' }
	];

	const p = `<p class="text-white mb-6">Here are my skills. But you can also check my projects using them</p>`

	const divContainerSkills = document.createElement('div');
	divContainerSkills.classList.add(...['mb-6']);

	const divInternal = document.createElement('div');

	const skillsObj = skillsList.map(({ name, link }) => {
		return `
             <ul class="flex flex-col sm:flex-row sm:justify-between">
                <li class="text-white"><span class="text-rose-500">→ </span> ${name}</li>
                ${link ? `<li><a class="underline text-white" target="_blank" href="${link}">EF SET Certificate</a></li>` : ''}
            </ul>
        `
	}).join('');

	divContainerSkills.innerHTML = p;
	divInternal.innerHTML = skillsObj;

	divInternal.classList.add(...['pl-4']);

	divContainerSkills.appendChild(divInternal);
	skills.appendChild(divContainerSkills);
}

function whats() {
	const phoneNumber = '11985608304';
	const message = 'Hi!';
	let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	window.open(url, '_blank');
}

function about() {
	const span = `<span class="text-rose-500">* <span class="text-white">joao fagundes</span> <span class="text-rose-500">*</span> </span>`
	const p = `<p class="text-white mt-4">I'm a computer science student at utfpr seeking for an entry-level position as a front-end developer. </p>`

	let divAbout = document.createElement('div');
	divAbout.innerHTML = span + p;
	divAbout.classList.add('mb-4');
	skills.appendChild(divAbout);
}

function email() {
	const spanTitle = `<p class=" mb-4 text-white">please send me a message</p>`
	const spanContent = `<span class="text-white"><span class="text-rose-500">→ </span>joao.230702@alunos.utfpr.edu.br</span>`

	let divContainerEmail = document.createElement('div');
	divContainerEmail.innerHTML = spanTitle + spanContent;
	divContainerEmail.classList.add('mb-4');
	window.location.href = "mailto:joao.230702@alunos.utfpr.edu.br";

	skills.appendChild(divContainerEmail);
}

function projects() {
	const projects = [
		{
			name: 'RESTCountriesAPI',
			preview: 'https://responsive-restc-ountry-api.vercel.app/',
		},
		{
			name: 'English Web Dictionary',
			preview: 'https://web-english-dictionary.vercel.app/'
		},

		{
			name: 'News Homepage',
			preview: 'https://challenge-grid-front-end.vercel.app/',
		},

		{
			name: 'Snippet Landing Page (SASS)',
			preview: 'https://snippet-code.netlify.app/',
		},

		{
			name: 'Commune Website (ReactJS)',
			preview: 'https://commune-web.netlify.app/'
		},

		{
			name: 'OptimusTech',
			preview: 'https://7-days-of-code-htmlcss.vercel.app/',
		},

		{
			name: 'Product preview card',
			preview: 'https://front-end-mentor-product-view-card.vercel.app/',
		},

		{
			name: 'College Management System (Java)',
			preview: 'https://github.com/joaoFagundesL/SchoolManagementSystem',
		},

		{
			name: 'Linux Binary Tree (C)',
			preview: 'https://www.onlinegdb.com/9rselzoj7',

		},
	];

	const divProjectContainer = document.createElement('div');
	divProjectContainer.classList.add('mb-4');

	projects.map(({ name, preview }) => {
		const info = `
            <h1 class="font-bold text-white">${name}</h1>
            <span class="text-rose-500">→ <span class="text-white"> <a target="_blank" href="${preview}" class="">Preview</a></span></span>
        `

		let divProject = document.createElement('div');
		divProject.classList.add(...['flex', 'flex-col', 'sm:grid', 'grid-cols-1', 'sm:grid-cols-new1']);
		divProject.innerHTML = info;
		divProjectContainer.appendChild(divProject);
		skills.appendChild(divProjectContainer);
	});
}

let span = `<span class="text-green-400">✓ <span class="text-terminalFont font-semibold">root@linux-os</span><span class="text-white"> $ </span>`
function createInput(message) {
	const inputContainer = document.createElement("div");
	inputContainer.setAttribute("id", "input-container");

	skills.appendChild(inputContainer);

	inputContainer.innerHTML = message;

	const input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("id", "skills-input");
	inputContainer.appendChild(input);

	input.classList.add(...['border-none', 'bg-body', 'outline-none', 'text-white']);
	input.focus();

	input.addEventListener("keydown", async (event) => {
		if (event.key === "Enter") {
			const value = input.value;

			if (value == 'help' || value == 'Help') {
				let div = help();
				inputContainer.append(div);
			}

			else if (value == 'clear' || value == 'Clear') {
				clear();
			}

			else if (value == 'education' || value == 'Education') {
				education();
			}

			else if (value == 'socials' || value == 'Socials') {
				socials();
			}

			else if (value == 'cowsay' || value == 'Cowsay') {
				await cowsay(); // Here I'm waiting for the 'cowsay()' function. When it is done, I can continue with the code. If I remove the 'await', it will create another input even if the data is not fetched yet
			}

			else if (value == 'about' || value == 'About') {
				about();
			}

			else if (value == 'skills' || value == 'Skills') {
				skillsTerminal();
			}

			else if (value == 'email' || value == 'Email') {
				email();
			}

			else if (value == 'whatsapp' || value == 'Whatsapp') {
				whats();
			}

			else if (value == 'projects' || value == 'Projects') {
				projects();
			}

			else {
				let err = errorMessage(input.value);
				inputContainer.appendChild(err);
			}

			input.disabled = true;
			createInput(span);

			window.scrollTo(0, document.body.scrollHeight);
		}
	});
}

createInput(span);