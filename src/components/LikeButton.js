import React from 'react'
import { Button, Label, Icon } from 'semantic-ui-react'

function LikeButton(props) {

    const likeButton = props.likes > 0 ? (
        <Button color='teal'>
            <Icon name='heart' />
        </Button>
    ) : (
            <Button color='teal' basic>
                <Icon name='heart' />
            </Button>
        )

    return (
        <Button as='div' labelPosition='right' className="avoid-clicks">
            {likeButton}
            <Label basic color='teal' pointing='left'>
                {props.likes}
            </Label>
        </Button>
    )
}

export default LikeButton