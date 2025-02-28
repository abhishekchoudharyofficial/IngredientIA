import React, { PureComponent } from 'react'
import Header from '@/widgets/common/header'
import Footer from '@/widgets/footer'

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
      <div className="container d-flex flex-column justify-content-center  align-items-center custom-height gap-4">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center custom-heading">Let's cook something amazing</h2>
                    </div>
                </div>
                <div className="row w-">
                    <div className="col d-flex justify-content-center gap-3 flex-wrap">
                        <span className="text-center rounded-3 h-auto custom-bg-color">Salad with Tomato, Cucumber, Lettuce</span>
                        <span className="text-center rounded-3 h-auto custom-bg-color">Lunch with Cabbage, Potato, Onion</span>
                        <span className="text-center rounded-3 h-auto custom-bg-color">Noodles with Pepper, Soy Sauce, Garlic</span>
                    </div>
                </div>
      </div>
      <Footer {...this.props} />
      </>
    )
  }
}

export default Index