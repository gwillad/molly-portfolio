export type Image = { loc: string, fname: string };

export type Content = string | Image;

export class Project {
	id: number;
	name: string;
	arrangedContent: Content[];
	repImage: Image;
}