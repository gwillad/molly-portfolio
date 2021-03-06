import { Project, Image } from "../../app/project";
import { About, Resume } from "../../app/about";

const lorem: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const PROJECTS: Project[] = [
	{ 
		id: 11, 
		name: "Lobby Redesign", 
		subname: "Flad Architects",
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "Lobby_redesign_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "Lobby_redesign.jpg"}, 
	},
	{ 
		id: 12, 
		name: "MKS", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "MKS-1_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "MKS-1.jpg"}, 
	},
	{ 
		id: 13,
		name: "C3", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "C3_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "C3.jpg"}, 
	},	
	{ 
		id: 14, 
		name: "GSL", 
		arrangedContent: [
			"Content coming soon..."
		],		
		repImage: {loc: "assets/images/projects-tiles/", fname: "GSL_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "GSL.jpg"}, 
	},
	{ 
		id: 15, 
		name: "ESC", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "ESC_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "ESC.jpg"}, 
	},
	{ 
		id: 16, 
		name: "Master Plan", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "Master-Plan_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "Master-Plan.jpg"}, 
	},
	{ 
		id: 17, 
		name: "Final Project", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "Final-Project_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "Final-Project.jpg"}, 
	},
	{ 
		id: 18, 
		name: "Arcology", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "Arcology_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "Arcology.jpg"}, 
	},
	{ 
		id: 19, 
		name: "Folded Plane", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "Folded-Plane_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "Folded-Plane.jpg"}, 
	},
	{ 
		id: 20, 
		name: "Migrant Housing", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "Migrant-Housing_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "Migrant-Housing.jpg"}, 
	},
	{ 
		id: 21, 
		name: "Cafe Design", 
		arrangedContent: [
			"Content coming soon..."
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "Cafe-Design_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "Cafe-Design.jpg"}, 
	},	
	{ 
		id: 22, 
		name: "Intersect", 
		arrangedContent: [
			"Content coming soon...",
			"In the mean time, enjoy this representation of what the site is capable of:",
			{loc: "assets/images/splash/", fname: "slider-01.jpg"},
			{loc: "assets/images/splash/", fname: "slider-02.jpg"},
			"We can display text: \n" + lorem + lorem + lorem,  
			{loc: "assets/images/splash/", fname: "slider-03.jpg"},
			"and we can display several images together",
			[
				{loc: "assets/images/splash/", fname: "slider-04.jpg"},
				{loc: "assets/images/splash/", fname: "slider-05.jpg"},
				{loc: "assets/images/splash/", fname: "slider-06.jpg"},
				{loc: "assets/images/splash/", fname: "slider-07.jpg"},
				{loc: "assets/images/splash/", fname: "slider-08.jpg"},
				{loc: "assets/images/splash/", fname: "slider-09.jpg"},
				{loc: "assets/images/splash/", fname: "slider-10.jpg"},
			],
		],
		repImage: {loc: "assets/images/projects-tiles/", fname: "Intersect_bw.jpg"}, 
		repHoverImage: {loc: "assets/images/projects-tiles/", fname: "Intersect.jpg"}, 
	},
];

export const ABOUT: About = {
	photo: { loc: 'assets/images/', fname: "mollyphoto.jpg" },
	blurbs: ["i am great", "you probably wanna hire me", "ill let you know if that's possible", lorem + lorem + lorem + lorem],
};

export const RESUME: Resume = {
	scan: { loc: 'assets/images/', fname: "resume.png" },
};

export const SPLASH: Image[] = [
	{loc: "assets/images/splash/", fname: "slider-01.jpg"},
	{loc: "assets/images/splash/", fname: "slider-02.jpg"},
	{loc: "assets/images/splash/", fname: "slider-03.jpg"},
	{loc: "assets/images/splash/", fname: "slider-04.jpg"},
	{loc: "assets/images/splash/", fname: "slider-05.jpg"},
	{loc: "assets/images/splash/", fname: "slider-06.jpg"},
	{loc: "assets/images/splash/", fname: "slider-07.jpg"},
	{loc: "assets/images/splash/", fname: "slider-08.jpg"},
	{loc: "assets/images/splash/", fname: "slider-09.jpg"},
	{loc: "assets/images/splash/", fname: "slider-10.jpg"},
]
