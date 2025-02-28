import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            
            <div class="input-group rounded-3 mb-3 mx-4">
                <input type="text" class="form-control" placeholder="Enter Ingredients here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn" type="button" id="button-addon2">Search</button>
            </div>
            
            </>
        )
    }
}

export default Footer