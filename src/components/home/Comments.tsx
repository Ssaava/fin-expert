import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { comments } from "@/assets/data";
import CarouselDots from "../common/CarouselDots";
import Autoplay from "embla-carousel-autoplay";
export default function Comments() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {comments.map(({ id, title, name, comment, image }) => (
            <CarouselItem key={id}>
              <div className="mx-auto flex flex-col gap-6 max-w-[50rem]">
                <p className="text-white text-center">{comment}</p>
                <div className="flex items-center gap-4 justify-center">
                  <Avatar className="size-14">
                    <AvatarImage src={image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-extrabold">{name}</h3>
                    <p className="text-white/80">{title}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <CarouselDots
        totalDots={comments.length}
        current={current}
        onDotClick={handleDotClick}
      />
    </>
  );
}
