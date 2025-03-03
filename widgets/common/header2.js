import React, { PureComponent } from 'react';
import Link from 'next/link';

class Header2 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            
            <div className="">
                <Link className="text-decoration-none" href="/ingredients2"><i class="ri-arrow-left-s-line custom-icon-size"></i></Link>
            
            </div>
            <div className="container">
                <div className="row mt-3">
                        <img className="w-75" src="/assets/logo.svg"></img> 
                </div>
                <div className="row">
                    <h5 className="mt-2 fw-semibold">Unlock More Delicious Possibilities!</h5>
                </div>
            </div>

            </>
        )
    }
}

export default Header2