import getAllPosts from "@/lib/getPosts";
import SocialCarouselSwiper from "./SocialCarouselSwiper";

const SocialCarousel = async (): Promise<JSX.Element> => {
  const posts = await getAllPosts();
  return <SocialCarouselSwiper posts={posts} />;
};

export default SocialCarousel;
