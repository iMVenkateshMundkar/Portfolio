class HttpLink {
  constructor(link, icon, id) {
    this.link = link;
    this.icon = `assets/${icon}`;
    this.id = id;
  }
}

export const httpLinksArray = [
  {
  	...new HttpLink("https://twitter.com/iMVenkateshM22", "twitter.png", 1),
  },
  {
    ...new HttpLink(
      "https://www.linkedin.com/in/venkatesh-mundkar-2487b91b3/",
      "linkedin-logo.png",
      2
    ),
  },
  // {
  // 	...new HttpLink(
  // 		"https://www.instagram.com/isharaman8/",
  // 		"instagram.png",
  // 		3
  // 	),
  // },
  {
    ...new HttpLink("https://github.com/iMVenkateshMundkar", "github.png", 4),
  },
  {
    ...new HttpLink("https://wa.me/7218469333", "whatsapp.png", 5),
  },
  {
    ...new HttpLink("mailto:mundkarvenkatesh@gmail.com", "email.png", 6),
  },
];
