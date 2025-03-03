import React, { PureComponent } from 'react';
import Header from '@/widgets/common/header';
import Footer from '@/widgets/footer';
import Link from 'next/link';

class Index extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<>
			
			<Header {...this.props} />

            <div className="container d-flex flex-column justify-content-center custom-height">
                <div className="row">
                    <h1 className="text-center">Name 3 ingredients, I'll do the rest!</h1>
                </div>
                <div className="row d-flex">
                    <div className="text-end col-9">
                        <span className="">To add up to 7 ingredients</span>
                    </div>
                    <div className="col-3">
                        <Link className="custom-font-color fw-semibold" href="/plans">Tap here</Link>
                    </div>
                    
                </div>

            </div>
            
            <div className="input-group mb-3 px-4">
                <input type="text" className="form-control shadow-none border border-end-0 py-2" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="d-flex align-items-center justify-content-center">
                    <Link className="border border-start-0 rounded-1 p-1 py-2" href="mood-to-meal"><img className="" src="/assets/icon/next.svg"></img></Link>
                </div>
            </div>
			
			</>
		)
	}
}

export default Index