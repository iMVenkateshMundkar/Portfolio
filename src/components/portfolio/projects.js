class Project {
  constructor(
    img,
    title,
    desc,
    gitLink,
    id,
    deployLink,
    projectTech,
    features
  ) {
    this.img = `assets/${img}`;
    this.title = title;
    this.desc = desc;
    this.gitLink = gitLink;
    this.id = id;
    this.deployLink = deployLink;
    this.projectTech = projectTech;
    this.features = features;
  }
}

export const projectArr = [
  {
    ...new Project(
      "Shopping-Mart.png",
      "Shopping Mart",
      "Shopping Mart is an ecommerce platform where users can find different kinds of hair products of various brands. User can create an account and login into it. User can check orders ordered by him. User can add addresses and remove them.",
      "https://github.com/iMVenkateshMundkar/Shopping-Mart-Frontend",
      "1",
      "https://vm-shopping-mart.netlify.app/",
      ["assets/html-5.png", "assets/css.png", "assets/js.png", "assets/react.png", "assets/redux.png", "assets/mongodb.png"],
      [
        "Responsive",
        "User-friendly easy and secure purchasing system.",
        "Location-based delivery.",
        "Sign-in/Sign-up for user.",
        "Check Orders",
        "Sorting and Paggination"
      ]
    ),
  },
  
  {
    ...new Project(
      "paytmmall.png",
      "Paytm Mall Clone",
      "It was a team project.We implemented some product sorting and filtering features, We used local storage for data handling and implemented signup, login, individual product page, category-wise page, address input, cart, checkout page, etc.",
      "https://github.com/sameerah2710/PaytmMall-clone",
      "2",
      "https://suspicious-wing-0660d2.netlify.app/",
      ["assets/html-5.png", "assets/css.png", "assets/js.png"],
      [
        
      ]
    ),
  },
  {
    ...new Project(
      "fabindia.PNG",
      "FabIndia Clone",
      "FabIndia is an e-commerce platform where user can buy clothes and home garment.In it there are many category of clothes. User can add as many as products in his/her cart and buy them",
      "https:https://github.com/iMVenkateshMundkar/Fabindia-clone",
      "1",
      "https://fabindia-masai.vercel.app/",
      [
        "assets/html-5.png",
        "assets/css.png",
        "assets/js.png",
      ],
      [
        
      ]
    ),
  },

];
