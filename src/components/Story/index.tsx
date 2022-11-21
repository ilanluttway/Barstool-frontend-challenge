import React from 'react'
import { StoryType } from '../../types/Storytype'
import whitePic from '../../images/whitepic.png'

interface Props {
    story: StoryType;
}

// Outer box: display-flex (horizontal orientation) -- DEFINED WIDTH AND HEIGHT
// RED --- first div for PICTURE
// this just needs padding
// YELLOW --- second for article name, avatar pic/name (flex 1 property for max hor space)
// display-flex, but flex-direction : column
// GREEN -- article name
// Flex-1 
// BLACK -- will get pushed down


const Story: React.FC<Props> = ({ story }, { key }) => {
    return (<div className="h-40 border space-x-4 flex flex-row p-4"><>

        <div className="place-content-center basis-1/3">
            <img className="h-32 w-48" src={story.thumbnail.desktop} />
        </div>

        <div className="flex flex-col flex-1 basis-2/3">
            <div className="flex-1 text-l font-bold">{story.title}</div>
            <div className="flex flex-row items-center">
                {story.author.avatar !== null ?
                    <img className="w-8 h-8 rounded-full" src={story.author.avatar} /> :
                    <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />}
                <p className="text-sm p-2"> {story.author.name} </p>


            </div>
        </div>
        <br />
    </></div>)
}

export default Story