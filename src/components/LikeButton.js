import React from 'react'
import { Button, Label, Icon } from 'semantic-ui-react'

function LikeButton({ likes: { curtidas } }) {

    const likeButton = curtidas > 0 ? (
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
                {curtidas}
            </Label>
        </Button>
    )
}

export default LikeButton