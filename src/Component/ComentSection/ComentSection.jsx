import React, { useState } from "react"

const CommentSection = (props) => {

    const [rating, setRating] = useState(0);
    const comments = [
        {
            id: 1,
            name: "SS",
            avatar: "/assets/images/coment2.jpeg", // Replace with actual avatar
            comment: "What brand of chicken fingers do you use?",
            date: "04/14/22 @ 6:40 PM",
            replies: [
                {
                    id: 11,
                    name: "KRISTA @ PINCH OF YUM",
                    avatar: "/assets/images/comment1.jpeg", // Replace with actual avatar
                    comment: "We like to use Aldi crispy chicken strips!",
                    date: "04/15/22 @ 5:05 PM"
                }
            ]
        },
        {
            id: 2,
            name: "DNN",
            avatar: "/assets/images/coment2.jpeg",
            comment: `This is the first time in life I’ve ever heard of a food source called “mint sauce.” 
                      I must admit that the crispy chicken bowl with sliced cucumber, grated cheese, 
                      sliced red onions, what looks like parsley, and mint sauce looks absolutely delicious. 😊`,
            date: "04/16/22 @ 7:51 AM",
            replies: []
        },
        {
            id: 3,
            name: "SARAH",
            avatar: "/assets/images/comment1.jpeg",
            comment: `This was sooo good!!! I’ve done it with both salmon and chicken and both really delicious.`,
            date: "02/17/25 @ 5:51 PM",
            rating: 5 // Star rating
        }
    ];
    return (
        <div>
            <div className="max-w-6xl mx-auto p-6 mt-8">
                {/* Grid Layout with Left and Right Sections */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Side - Content */}
                    <div className="md:col-span-2">
                        <div className="bg-gray-100 p-6 border border-gray-300 ">
                            <h3 className="font-bold text-lg mb-4">LEAVE A COMMENT</h3>

                            {/* Name Input */}
                            <label className="block text-customPurple font-bold text-sm mb-1">NAME *</label>
                            <input type="text" className="w-full border border-gray-300 p-2 mb-3" />

                            {/* Email Input */}
                            <label className="block text-customPurple font-bold text-sm mb-1">EMAIL *</label>
                            <input type="email" className="w-full border border-gray-300 p-2 mb-3" />

                            {/* Website Input */}
                            <label className="block text-customPurple font-bold text-sm mb-1">WEBSITE</label>
                            <input type="text" className="w-full border border-gray-300 p-2 mb-3" />

                            {/* Comment Textarea */}
                            <label className="block text-customPurple font-bold text-sm mb-1">COMMENT *</label>
                            <textarea className="w-full border border-gray-300 p-2 h-24 mb-3"></textarea>

                            {/* Rating Section */}
                            <p className="italic  text-sm mb-2">Recipe rating</p>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`cursor-pointer text-xl ${index < rating ? "text-yellow-500" : "text-gray-400"}`}
                                        onClick={() => setRating(index + 1)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-2 mb-4">
                                <input type="checkbox" id="subscribe" className="mt-1" />
                                <label htmlFor="subscribe" className="text-sm">
                                    <span className="font-bold text-customPurple">SIGN ME UP FOR RECIPES, PLEASE!</span><br />
                                    <span className="text-customPurple">
                                        ALL THE FOOD, RIGHT TO YOUR INBOX (AND A FREE ECOOKBOOK, TOO!).
                                    </span>
                                </label>
                            </div>

                            {/* Privacy Notice */}
                            <p className="text-xs text-gray-500 mb-4">
                                Your email address will not be published. Required fields are marked *
                            </p>

                            {/* Submit Button */}
                            <button className="bg-customPurple text-white px-4 py-2 font-bold">
                                POST COMMENT
                            </button>
                        </div>
                        <div className="  pt-6 pb-6 bg-white ">
                            <h3 className="font-bold text-lg mb-4">83 COMMENTS</h3>

                            {comments.map((comment) => (
                                <div key={comment.id} className="border-t border-gray-300 pt-4 mb-4">
                                    {/* User Avatar & Name */}
                                    <div className="flex items-start gap-4">
                                        <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <p className="font-bold text-sm ">{comment.name}</p>
                                                {comment.rating && (
                                                    <div className="flex items-center  text-yellow-500">
                                                        <span className="text-xs font-bold text-gray-500 mr-2">RECIPE RATING</span>
                                                        {[...Array(comment.rating)].map((_, index) => (
                                                            <span key={index}>★</span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-700 text-sm mt-4">{comment.comment}</p>
                                            <p className="text-xs text-gray-500 mt-1">{comment.date}</p>
                                            <button className="text-customPurple font-bold text-xs mt-1">REPLY</button>



                                            {/* Replies - Add Safe Check */}
                                            {(comment.replies?.length || 0) > 0 && (
                                                <div className="ml-10 mt-4  pl-4">
                                                    {comment.replies.map((reply) => (
                                                        <div key={reply.id} className="flex items-start gap-4 mt-2">
                                                            <img src={reply.avatar} alt={reply.name} className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <p className="font-bold text-sm">{reply.name}</p>
                                                                <p className="text-gray-700 text-sm">{reply.comment}</p>
                                                                <p className="text-xs text-gray-500 mt-1">{reply.date}</p>
                                                                <button className="text-customPurple font-bold text-xs mt-1">REPLY</button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CommentSection;
