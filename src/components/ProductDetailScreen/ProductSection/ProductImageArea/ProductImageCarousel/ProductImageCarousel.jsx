import React from 'react'
import { useEffect, useCallback } from 'react'


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const ProductImageCarousel = ({ setSelectedIndex, images, api, setApi }) => {
    // const [count, setCount] = React.useState(0)

    const onSelect = useCallback(() => {
        if (!api) return;
        setSelectedIndex(api.selectedScrollSnap());
    }, [api]);

    useEffect(() => {
        if (!api) return;
        api.on('select', onSelect);
        onSelect();
    }, [api, onSelect]);

    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                {
                    images.map((image, index) => (<CarouselItem className={"flex items-center justify-center"}><img src={image.image} key={index} alt="Burger Image" /></CarouselItem>))
                }
            </CarouselContent>
            <CarouselPrevious className={"hidden md:flex"} />
            <CarouselNext className={"hidden md:flex"} />
        </Carousel>
    )
}

export default ProductImageCarousel