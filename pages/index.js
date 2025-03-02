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
			
			<div className="container d-flex justify-content-center align-items-center vh-100">
				<div className="container">
					<div className="row">
						
							<h2 className="text-center">Let's cook something amazing</h2>
						
					</div>
					<div className="d-flex flex-column align-items-center">
          <div className="d-flex mb-3 gap-3">
            <div className="custom-bg-color p-3 mr-2">
              <p className="text-center mb-0">Salad with Tomato,<br />Cucumber, Lettuce</p>
            </div>
            <div className="custom-bg-color p-3">
              <p className="text-center mb-0">Lunch with Cabbage,<br />Potato, Onion</p>
            </div>
          </div>
          <div className="custom-bg-color p-3">
            <p className="text-center mb-0">Noodles with Pepper,<br />Soy Sauce, Garlic</p>
          </div>
        </div>
				</div>
			</div>

			<Link href="/mood-to-meal">Next page</Link>
			
			</>
		)
	}
}

export default Index