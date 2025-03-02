import Link from 'next/link'
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
            
            <div class="input-group rounded-3 mb-3">
                <input type="text" class="form-control" placeholder="Enter Ingredients here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <Link href="/slide2">Button</Link>
            </div>
            
            </>
        )
    }
}

export default Footer