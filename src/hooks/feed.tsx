import { useState, useEffect } from "react"
import { API_URL } from "../constants"
import { StoryType } from "../types/Storytype"

const useFeed = (page: number) => {
    const [feed, setFeeds] = useState<Array<any>>([])
    const [isLoading, setisLoading] = useState(false)
    const [timeStamp, setTimeStamp] = useState("1999-01-01")
    let url = `${API_URL}?page=${page}`

    // useEffect(function, watchVariables)
    useEffect(() => {
        setisLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setFeeds(prevFeed => [...prevFeed, ...res])

                // If on first page, get timestamp of the first post for loading future new posts
                if (page === 1) {
                    setTimeStamp(res[0].date)
                }
            })
            .catch(err => console.log(err))
            .finally(() => setisLoading(false))
    }, [url])

    // Hold state for latest post timeStamp
    // Initialize as 1999 so that when we fetch page 1, we take the timestamp of the first post, save that
    useEffect(() => {
        if (feed.length > 0) {
            const interval = setInterval(() => {

                // fetch from the first page
                fetch(`${API_URL}?page=1`)
                    .then(response => response.json())
                    .then(res => {

                        // filter out posts that are less than the timestamp
                        const newPosts = res.filter((post: StoryType) => post.date > timeStamp)

                        // if there are any left, prepend them to our feed and update timeStamp
                        if (newPosts.length > 0) {
                            setFeeds(prevFeed => [...newPosts, ...prevFeed])

                            // Use the first one bc its the most recent
                            setTimeStamp(newPosts[0].date)
                        }
                    })
            }, 10000)
            return () => {
                clearInterval(interval);
            }
        }
    }, [feed, timeStamp, setFeeds, setTimeStamp])

    // SetInterval, fetch page1 every 10 seconds and if any post is newer than that time stamp,
    // prepend those on the feed

    return { feed, isLoading }
}

export default useFeed