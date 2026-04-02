"use client"
import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";

const BlogCard = () => {
    const router = useRouter()
    return (
        <div className="max-w-[421px] max-h-[364px] h-auto w-full rounded-xl border border-button-primary px-10">
            <div className="mt-[-99px]">
                <div

                    className="relative h-[258px] aspect-[358/50] w-full max-w-[358px]"
                >
                    <Image
                        src={PUBLIC_IMAGES.TrainingImg1}
                        alt="Body"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="flex flex-col gap-5 justify-center items-center">

                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <h4 className="text-lg 2xl:text-2xl text-foreground leading-6 2xl:leading-8">Understanding Body Imbalance</h4>
                        <p className="text-sm 2xl:text-base leading-5 2xl:leading-7 text-secondary">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center mt-5 mb-[-24px]">
                <Button onClick={() => router.push("/blog-details")}  className="h-12 2xl:h-14 cursor-pointer text-sm 2xl:text-base text-espresso-brown bg-gainsboro hover:bg-button-primary hover:text-white hover:border-none max-w-40" rounded="full">View Details</Button>
            </div>
        </div>
    )
};

export default BlogCard;