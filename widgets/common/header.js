import React, { PureComponent } from 'react';
import Link from 'next/link';

class Header extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<>
			
			<div className="d-flex justify-content-between bg-body container-fluid sticky-top border-bottom p-2">	
					<div className="col-3"><Link href="#"><img src="/assets/icon/menu.svg"></img></Link></div>
					<div className="col-6 text-center"><Link href="#"><img src="/assets/logo.svg"></img></Link></div>
					<div className="col-3 text-end"><Link href="#"><img src="/assets/icon/saved-reciepies.svg"></img></Link></div>
				</div>
			</>
		)
	}
}

export default Header