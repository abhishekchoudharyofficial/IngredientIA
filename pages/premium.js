import React, { PureComponent } from 'react';
import Link from 'next/link';

class Premium extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            
            <div className="">
                <Link className="text-decoration-none" href="/plans"><i class="ri-arrow-left-s-line custom-icon-size"></i></Link>
            
            </div>
            <div className="container">
                <div className="row mt-3">
                        <img className="w-75" src="/assets/logo.svg"></img> 
                </div>
                <div className="row">
                    <h5 className="mt-2 fw-semibold">Premium Plan: Beyond the Basic</h5>
                </div>
            </div>

            <div className="container mt-4">
                <div className="d-flex align-items-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Full access to an extensive library of premium recipes.</p>
                </div>

                <div className="d-flex align-items-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Up to 7 additional ingredients for greater recipe variety.</p>
                </div>

                <div className="d-flex align-items-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">5 extra customization options, including dietary preferences & cooking tools</p>
                </div>

                <div className="d-flex align-items-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Unlimited recipe saving – build your own digital cookbook!</p>
                </div>
            </div>

            <div className="container">
                <h5 className="mt-5 fw-semibold">Ready to transform your cooking? Subscribe now and unlock the best experience!</h5>
            </div>

            <div className="row mt-5 mx-4 text-center">
                <Link className="py-2 rounded-2 custom-btn" href="#">Upgrade</Link>
            </div>
            
            </>
        )
    }
}

export default Premium