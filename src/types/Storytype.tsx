export type StoryType = {
    author: {
        author_url: string,
        avatar: string, // author pic
        has_notifications: boolean,
        name: string, // author name
        is_active: boolean,
        id: number
    };
    title: string
    thumbnail: {
        desktop: string, // picture for post
        featured: null,
        images: {
            featured: null,
            large: string,
            medium: string,
            small: string
        }
        location: string,
        raw: string,
        raw_desktop: string,
        raw_feature: null,
        type: string
    };
    id: number
    date: string
}