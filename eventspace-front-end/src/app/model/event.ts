export class Event {  
  id!: number;
  name!:string;
	data!:string;
	description!:string;
	img_url!:string;
	time!:string;
	location!:string;
	category!:string;
	

  constructor(id: number, name:string,data:string,description:string, img_url:string, time:string,location:string,category:string) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.description = description;
    this.img_url = img_url;
    this.time = time;
    this.location = location;
    this.category = category;
  }

  setImage(image : string): void {
    this.img_url = image;
  }
}