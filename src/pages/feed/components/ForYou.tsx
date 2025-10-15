import PlainHorizontalNavigations from "../../../components/ui/PlainHorizontalNavigation";
import PostCardDesktop from "../../../components/PostCardDesktop";
import PostCardMobile from "../../../components/PostCardMobile";
import React from "react";


const ForYou: React.FC = () => {
    const navs = [
        { title:"For you", url:'/', current:true },
        { title:"Featured", url:'/?feed=featured', current:false }
    ]

    const publications = [
        {
        title:"SpaceX delivers four astronauts to the International Space Station",
        summary:"U.S., Russian and Japanese astronauts pulled up",
        timestamp:"Aug 8, 2025",
        likes:323,
        comments:95,
        savedByClient:true,
        image:"/falcon9.webp",
        slug:"SpaceX-delivers-four",
        author:{ username:"@elonmusk", fullname:"Elon Musk", pp:"elon.webp" }
        },
        {
        title:"SpaceX delivers four astronauts to the International Space Station",
        summary:"U.S., Russian and Japanese astronauts pulled up",
        timestamp:"Aug 8, 2025",
        likes:323,
        comments:95,
        savedByClient:false,
        image:"/falcon9.webp",
        slug:"SpaceX-delivers-four",
        author:{ username:"@elonmusk", fullname:"Elon Musk", pp:"elon.webp" }
        },
        {
        title:"SpaceX delivers four astronauts to the International Space Station",
        summary:"U.S., Russian and Japanese astronauts pulled up",
        timestamp:"Aug 8, 2025",
        likes:323,
        comments:95,
        savedByClient:true,
        image:"/falcon9.webp",
        slug:"SpaceX-delivers-four",
        author:{ username:"@elonmusk", fullname:"Elon Musk", pp:"elon.webp" }
        },
        {
        title:"SpaceX delivers four astronauts to the International Space Station",
        summary:"U.S., Russian and Japanese astronauts pulled up",
        timestamp:"Aug 8, 2025",
        likes:323,
        comments:95,
        savedByClient:false,
        image:"/falcon9.webp",
        slug:"SpaceX-delivers-four",
        author:{ username:"@elonmusk", fullname:"Elon Musk", pp:"elon.webp" }
        },
        {
        title:"SpaceX delivers four astronauts to the International Space Station",
        summary:"U.S., Russian and Japanese astronauts pulled up",
        timestamp:"Aug 8, 2025",
        likes:323,
        comments:95,
        savedByClient:true,
        image:"/falcon9.webp",
        slug:"SpaceX-delivers-four",
        author:{ username:"@elonmusk", fullname:"Elon Musk", pp:"elon.webp" }
        },
        {
        title:"SpaceX delivers four astronauts to the International Space Station",
        summary:"U.S., Russian and Japanese astronauts pulled up",
        timestamp:"Aug 8, 2025",
        likes:323,
        comments:95,
        savedByClient:false,
        image:"/falcon9.webp",
        slug:"SpaceX-delivers-four",
        author:{ username:"@elonmusk", fullname:"Elon Musk", pp:"elon.webp" }
        },
        {
        title:"SpaceX delivers four astronauts to the International Space Station",
        summary:"U.S., Russian and Japanese astronauts pulled up",
        timestamp:"Aug 8, 2025",
        likes:323,
        comments:95,
        savedByClient:true,
        image:"/falcon9.webp",
        slug:"SpaceX-delivers-four",
        author:{ username:"@elonmusk", fullname:"Elon Musk", pp:"elon.webp" }
        },
        {
        title:"SpaceX delivers four astronauts to the International Space Station",
        summary:"U.S., Russian and Japanese astronauts pulled up",
        timestamp:"Aug 8, 2025",
        likes:323,
        comments:95,
        savedByClient:false,
        image:"/falcon9.webp",
        slug:"SpaceX-delivers-four",
        author:{ username:"@elonmusk", fullname:"Elon Musk", pp:"elon.webp" }
        }
    ]

    return (
        <div className="w-full">
            <PlainHorizontalNavigations className="md:mx-0 mx-[4%]"  navs={navs}/>
            { publications.map( ( { timestamp, title, comments, savedByClient, summary, likes, image, slug, author }, index ) => {
                return (
                <div key={`post-card-${index}`}>
                    <PostCardDesktop author={author} slug={slug} savedByClient={savedByClient} summary={summary} likes={likes} image={image}  title={title} comments={comments} timestamp={timestamp} />
                    <PostCardMobile author={author} slug={slug} savedByClient={savedByClient} summary={summary} likes={likes} image={image}  title={title} comments={comments} timestamp={timestamp} />
                </div>
                )
            })}
        </div>
    );
};

export default ForYou;