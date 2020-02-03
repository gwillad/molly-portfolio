import { Project, Image } from "../../app/project";
import { About, Resume } from "../../app/about";

const lorem: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const PROJECTS: Project[] = [
	{ 
		id: 11, 
		name: "Industry Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "inl-1.jpg"}, 
	},
	{ 
		id: 12, 
		name: "Academic Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "pnnl-1.jpg"}, 
			"one" + lorem,
			{loc: "assets/images/", fname: "pnnl-2.jpg"}, 
			"two" + lorem + lorem,
			{loc: "assets/images/", fname: "pnnl-3.jpg"},
			"two" + lorem+ lorem, 
			{loc: "assets/images/", fname: "pnnl-4.jpg"}, 
			"three" + lorem+ lorem+ lorem,
			{loc: "assets/images/", fname: "pnnl-5.jpg"}, 
			"four" + lorem+ lorem+ lorem+ lorem,
			{loc: "assets/images/", fname: "pnnl-6.jpg"}, 
			"five" + lorem+ lorem+ lorem+ lorem+ lorem,
		],
		repImage: {loc: "assets/images/", fname: "pnnl-5.jpg"}, 
	},
	{ 
		id: 13,
		name: "Thesis Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "jax-1.jpg"}, 
			"one" + lorem,
			{loc: "assets/images/", fname: "jax-2.jpg"}, 
			"two" + lorem + lorem,
			{loc: "assets/images/", fname: "jax-3.jpg"},
			"two" + lorem+ lorem, 
			{loc: "assets/images/", fname: "jax-4.jpg"}, 
			"three" + lorem+ lorem+ lorem,
		],
		repImage: {loc: "assets/images/", fname: "jax-4.jpg"}, 
	},	
	{ 
		id: 14, 
		name: "are Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "inl-1.jpg"}, 
	},	
	{ 
		id: 15, 
		name: "are Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "pnnl-1.jpg"}, 
	},	
	{ 
		id: 16, 
		name: "are Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "jax-1.jpg"}, 
	},	
	{ 
		id: 17, 
		name: "are Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "inl-1.jpg"}, 
	},	
	{ 
		id: 18, 
		name: "are Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "pnnl-1.jpg"}, 
	},	
	{ 
		id: 19, 
		name: "are Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "jax-1.jpg"}, 
	},	
	{ 
		id: 20, 
		name: "are Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "inl-1.jpg"}, 
	},	
	{ 
		id: 21, 
		name: "are Project", 
		arrangedContent: [
			{loc: "assets/images/", fname: "inl-1.jpg"}, 
			"one blurb", 
			{loc: "assets/images/", fname: "inl-2.jpg"}, 
			"another blurb", 
			"a third blurb that's a bit longer." + lorem + lorem + lorem, 
			{loc: "assets/images/", fname: "inl-3.jpg"}, 
			"a fourth blurb"
		],
		repImage: {loc: "assets/images/", fname: "pnnl-1.jpg"}, 
	}
];

export const ABOUT: About = {
	photo: { loc: 'assets/images/', fname: "mollyphoto.jpg" },
	blurbs: ["i am great", "you probably wanna hire me", "ill let you know if that's possible", lorem + lorem + lorem + lorem],
};

export const RESUME: Resume = {
	scan: { loc: 'assets/images/', fname: "resume.png" },
};

export const SPLASH: Image[] = [
	{loc: "assets/images/", fname: "inl-1.jpg", class: "hidden"},
	{loc: "assets/images/", fname: "inl-2.jpg", class: "hidden"},
	{loc: "assets/images/", fname: "pnnl-1.jpg", class: "hidden"},
	{loc: "assets/images/", fname: "pnnl-2.jpg", class: "hidden"},
	{loc: "assets/images/", fname: "jax-2.jpg", class: "hidden"},
]
