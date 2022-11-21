import { useState, useEffect } from 'react'
import React from 'react'
import StoryComponent from '../Story'
import { StoryType } from '../../types/Storytype'
import useFeed from '../../hooks/feed'

export default function FeedComponent() {
    const [page, setPage] = useState(1)
    const { feed, isLoading } = useFeed(page)
    let key = 0

    const loadMore = () => {
        // call useFeed

        setPage(pageNum => pageNum + 1)

    }

    return (
        <>
            <div className="flex flex-col space-y-4">
                {feed.map((story: StoryType) => (<StoryComponent key={story.id} story={story} />))}
            </div>
            <button className={isLoading ? "bg-gray-300 hover:bg-gray-400 text-white py-2 text-center block w-full" : "bg-red-700 hover:bg-red-800 text-white py-2 text-center block w-full"}
                onClick={loadMore}>
                {isLoading ? "Loading..." : "Load more"}
            </button>
        </>
    );
}

