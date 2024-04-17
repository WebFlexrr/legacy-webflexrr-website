import { getAllPosts } from "@/lib/getPosts";
import SocialCarouselSwiper from "./SocialCarouselSwiper";

const SocialCarousel = (): JSX.Element => {
  const posts = getAllPosts();
  return <SocialCarouselSwiper posts={posts} />;
};

export default SocialCarousel;
