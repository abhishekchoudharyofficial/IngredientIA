import React, { PureComponent } from 'react';
import Link from 'next/link';
import Header from '@/widgets/common/header';

class Slide2 extends PureComponent {
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
                <div className="container">
                    <h2 className="text-center">Let's Match Your Mood to Your Meal!</h2>
                    <p className="text-center text-dark">Based on your ingredients, these are your best matches!</p>
                </div>

                <div className="container d-flex flex-column gap-2">
                    <div className="row d-flex justify-content-between custom-bg-color shadow-sm bg-white rounded py-2">
                        <div className="col">
                            <h6 className="text-dark mb-0">Garlic Carrot Stir-Fry</h6>
                            <div className="">
                                <img src="/assets/icon/clock.svg"></img>
                                <span className="text-dark custom-font-size">  Takes 10-15 minutes</span>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <Link href="/reciepe4"><img src="/assets/icon/next.svg"/></Link>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between custom-bg-color shadow-sm bg-white rounded py-2">
                        <div className="col">
                            <h6 className="text-dark mb-0">Onion-Carrot Soup</h6>
                            <div className="">
                                <img src="/assets/icon/clock.svg"></img>
                                <span className="text-dark custom-font-size">  Takes 20-30 minutes</span>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <Link href="#"><img src="/assets/icon/next.svg"/></Link>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between custom-bg-color shadow-sm bg-white rounded py-2">
                        <div className="col">
                            <h6 className="text-dark mb-0">Garlic Butter Carrots</h6>
                            <div className="">
                                <img src="/assets/icon/clock.svg"></img>
                                <span className="text-dark custom-font-size">  Takes 10-15 minutes</span>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <Link href="#"><img src="/assets/icon/next.svg"/></Link>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between custom-bg-color shadow-sm bg-white rounded py-2">
                        <div className="col">
                            <h6 className="text-dark mb-0">Carrot-Onion Rice</h6>
                            <div className="">
                                <img src="/assets/icon/clock.svg"></img>
                                <span className="text-dark custom-font-size">  Takes 25-30 minutes</span>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <Link href="#"><img src="/assets/icon/next.svg"/></Link>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="container text-center mt-4">
                <Link className="" href="/mood-to-meal">Try Something Esle</Link>
            </div>

            
            
            
            </>
        )
    }
}

export default Slide2