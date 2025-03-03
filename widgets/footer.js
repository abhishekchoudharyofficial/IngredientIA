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
            
            <div className="input-group mb-3 px-4">
                <input type="text" className="form-control shadow-none border border-end-0" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="d-flex align-items-center justify-content-center">
                    <Link className="border border-start-0 rounded-1 p-1" href="#"><img className="" src="/assets/icon/next.svg"></img></Link>
                </div>
            </div>
            
            </>
        )
    }
}

export default Footer