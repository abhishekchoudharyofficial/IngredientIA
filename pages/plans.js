import React, { PureComponent } from 'react';
import Link from 'next/link';
import Header from '@/widgets/common/header2';

class Plans extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            
            <Header {...this.props} />
            
            <div className="container mt-4">
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Access to premium recipes tailored to your taste and dietary preferences.</p>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Unlock 5 extra customization features, including health preferences and cooking tools.</p>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Add up to 7 additional ingredients for more personalized meal options.</p>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-3">
                    <img className="" src="/assets/icon/checkbox.svg"></img>
                    <p className="ps-3 mb-0">Save and organize your favorite recipes for easy access anytime.</p>
                </div>
            </div>

            <div className="container">
                <h5 className="mt-5 fw-semibold">Choose a plan that works for you and take your cooking to the next level!</h5>
            </div>

            <div className="container d-flex flex-column align-items-center mt-5">
                <Link className="custom-font-color fw-semibold" href="/basic">Basic Plan <i class="ri-arrow-right-s-line"></i></Link>
                <Link className="custom-font-color fw-semibold mt-2" href="/premium">Premium Plan <i class="ri-arrow-right-s-line"></i></Link> 
            </div>
            </>
        )
    }
}

export default Plans