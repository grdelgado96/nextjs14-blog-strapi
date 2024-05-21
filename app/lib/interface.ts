export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

export const dummyData: simpleBlogCard[] = [
  {
    title: "Exploring the Great Outdoors",
    smallDescription:
      "A guide to the most beautiful hiking trails around the world.",
    currentSlug: "exploring-the-great-outdoors",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
  {
    title: "Culinary Delights: A Journey Through Food",
    smallDescription:
      "Discovering the best cuisines and dishes from different cultures.",
    currentSlug: "culinary-delights",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
  {
    title: "Tech Innovations of 2024",
    smallDescription:
      "An overview of the most exciting technological advancements expected this year.",
    currentSlug: "tech-innovations-2024",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
  {
    title: "The Art of Minimalist Living",
    smallDescription: "How to declutter your life and embrace simplicity.",
    currentSlug: "minimalist-living",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
  {
    title: "Mindfulness and Mental Health",
    smallDescription:
      "Practices and tips for maintaining mental well-being in a fast-paced world.",
    currentSlug: "mindfulness-mental-health",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
];

export interface fullBlog {
  title: string;
  content: any;
  currentSlug: string;
  titleImage: any;
}

export const extendedDummyData: fullBlog[] = [
  {
    title: "Exploring the Great Outdoors",
    content: `
        <p>Hiking is a great way to enjoy the beauty of nature and stay fit. 
        In this article, we will explore some of the most stunning hiking trails around the world, 
        from the rugged mountains of Patagonia to the serene forests of Japan.</p>
        <h2>Top Trails to Explore</h2>
        <ul>
          <li>Torres del Paine, Chile</li>
          <li>Mount Fuji, Japan</li>
          <li>Grand Canyon, USA</li>
        </ul>
      `,
    currentSlug: "exploring-the-great-outdoors",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
  {
    title: "Culinary Delights: A Journey Through Food",
    content: `
        <p>Food is a universal language that brings people together. 
        In this journey through culinary delights, we will taste the rich flavors of different cultures 
        and discover what makes their cuisines unique.</p>
        <h2>Highlights of Global Cuisine</h2>
        <ul>
          <li>Italian Pasta and Pizza</li>
          <li>Japanese Sushi and Ramen</li>
          <li>Mexican Tacos and Mole</li>
        </ul>
      `,
    currentSlug: "culinary-delights",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
  {
    title: "Tech Innovations of 2024",
    content: `
        <p>Technology is advancing at a rapid pace, and 2024 is set to be a year of significant breakthroughs. 
        From artificial intelligence to renewable energy, we will explore the most exciting innovations 
        that are expected to shape our future.</p>
        <h2>Key Innovations to Watch</h2>
        <ul>
          <li>Advanced AI and Machine Learning</li>
          <li>Quantum Computing</li>
          <li>Next-Generation Renewable Energy Sources</li>
        </ul>
      `,
    currentSlug: "tech-innovations-2024",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
  {
    title: "The Art of Minimalist Living",
    content: `
        <p>Minimalism is more than just a trend; it's a lifestyle that promotes simplicity and intentionality. 
        In this article, we will explore the principles of minimalist living and how you can apply them 
        to declutter your life and find joy in simplicity.</p>
        <h2>Principles of Minimalism</h2>
        <ul>
          <li>Declutter and Organize</li>
          <li>Focus on Quality over Quantity</li>
          <li>Embrace Intentional Living</li>
        </ul>
      `,
    currentSlug: "minimalist-living",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
  {
    title: "Mindfulness and Mental Health",
    content: `
        <p>In today's fast-paced world, it's more important than ever to take care of our mental health. 
        This article will provide you with practical tips and practices for incorporating mindfulness 
        into your daily routine to improve your mental well-being.</p>
        <h2>Mindfulness Practices</h2>
        <ul>
          <li>Meditation Techniques</li>
          <li>Breathing Exercises</li>
          <li>Mindful Journaling</li>
        </ul>
      `,
    currentSlug: "mindfulness-mental-health",
    titleImage:
      "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_1280.jpg",
  },
];
