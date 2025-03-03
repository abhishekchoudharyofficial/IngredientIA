import React, { PureComponent } from 'react';
import Link from 'next/link';
class Basic extends PureComponent {
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
                    <h5 className="mt-2 fw-semibold">Basic Plan: A Step Above Free</h5>
                </div>
            </div>

            <div className="container mt-4">
                <div className="d-flex align-items-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Access to a curated selection of premium recipes.</p>
                </div>

                <div className="d-flex align-items-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Add up to 3 additional ingredients for more meal variety.</p>
                </div>

                <div className="d-flex align-items-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Choose 2 extra customization options for health preferences and tools.</p>
                </div>

                <div className="d-flex align-items-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Save up to 10 of your favorite recipes.</p>
                </div>
            </div>

            <div className="container">
                <h5 className="mt-5 fw-semibold">Perfect for casual home cooks looking to experiment with new flavors!</h5>
            </div>

            <div className="row mt-5 mx-4 text-center">
                <Link className="py-2 rounded-2 custom-btn" href="#">Upgrade</Link>
            </div>
            </>
        )
    }
}

export default Basic