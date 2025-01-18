"use client";
import Masonry from "react-masonry-css";

const images = [
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",
];
export default function PostsGrid() {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <Masonry
          breakpointCols={{
            default: 4,
            860: 3,
            500: 2,
          }}
          className="flex -ml-4 "
          columnClassName="pl-4"
        >
          {images.map((item, key) => (
            <div
              key={key}
              className="mb-4 "
            >
              <img
                src={item}
                alt=""
              />
            </div>
          ))}
        </Masonry>
      </div>

    </>
  );
}
