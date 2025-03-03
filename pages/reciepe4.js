import React, { PureComponent } from 'react';
import Link from 'next/link';
import Header from '@/widgets/common/header';

class Reciepe4 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            
            <Header {...this.props} />

            <div className="container d-flex justify-content-between align-items-center mt-4">
                <h6 className="mb-0">Instructions</h6>
                <div className="d-flex align-items-center">
                    <img src="/assets/icon/clock.svg"/>
                    <span className="text-dark custom-font-size ps-1"> Takes 10-15 minutes</span>
                </div>
            </div>

            <div className="container mt-3">
                <div className="container custom-bg-color">
                    <div className="d-flex">
                        <span className="custom-point text-center">1</span>
                        <span className="text-dark ps-2 fw-medium">Prepare the Ingredients</span>
                    </div>
                    <ul className="pt-2">
                        <li className="custom-para lh-sm">Wash and peel the carrots, then slice them into thin strips.</li>
                        <li className="custom-para lh-sm">Peel and thinly slice the onion. Mince the garlic cloves.</li>
                    </ul>
                </div>

                <div className="container custom-bg-color">
                    <div className="d-flex">
                        <span className="custom-point text-center">2</span>
                        <span className="text-dark ps-2 fw-medium">Heat the Pan</span>
                    </div>
                    <ul className="pt-2">
                        <li className="custom-para lh-sm">Heat a wok or large frying pan over a medium head. Add the olive oil.</li>
                    </ul>
                </div>

                <div className="container custom-bg-color">
                    <div className="d-flex">
                        <span className="custom-point text-center">3</span>
                        <span className="text-dark ps-2 fw-medium">Cook the Garlic and Onion</span>
                    </div>
                    <ul className="pt-2">
                        <li className="custom-para lh-sm">Heat a wok Add the minced garlic and sliced onions to the pan. Sauté for 2–3 minutes until the garlic is fragrant and the onions are soft.or large frying pan over medium heat. Add the olive oil.</li>
                    </ul>
                </div>

                <div className="container custom-bg-color">
                    <div className="d-flex">
                        <span className="custom-point text-center">4</span>
                        <span className="text-dark ps-2 fw-medium">Season the Dish</span>
                    </div>
                    <ul className="pt-2">
                        <li className="custom-para lh-sm">Add the soy sauce, salt, black pepper, and honey (if using). Toss everything well to coat the carrots and onions in the sauce.</li>
                    </ul>
                </div>

                <div className="container custom-bg-color">
                    <div className="d-flex">
                        <span className="custom-point text-center">5</span>
                        <span className="text-dark ps-2 fw-medium">Cook until Tender</span>
                    </div>
                    <ul className="pt-2">
                        <li className="custom-para lh-sm">Continue stir-frying for another 2–3 minutes until the carrots are tender but still have a slight crunch.</li>
                    </ul>
                </div>

                <div className="container custom-bg-color">
                    <div className="d-flex">
                        <span className="custom-point text-center">6</span>
                        <span className="text-dark ps-2 fw-medium">Garnish and Serve</span>
                    </div>
                    <ul className="pt-2">
                        <li className="custom-para lh-sm">Sprinkle sesame seeds on top (optional) and give it a final toss. Serve immediately as a side dish or over steamed rice for a simple meal.</li>
                    </ul>
                </div>
            </div>

            <div className="container mt-4">
                <span className="text-dark">Cooking Tips:</span>
                <ul className="">
                    <li className="text-dark">You can add a splash of lemon juice for a tangy kick.</li>
                    <li className="text-dark">For a spicy version, add red chilli flakes or sliced green chillies while sauteing the garlic.</li>
                    <li className="text-dark">To make it more filling, toss in some cooked tofu or chicken strips.</li>
                </ul>
            </div>

            <div className="container text-center mt-4">
                <Link className="" href="/mood-to-meal">Find Another Dish</Link>
            </div>

            <div className="container text-center mt-4">
                <Link className="" href="/ingredients2">Go to ingredients.js</Link>
            </div>
            
            </>
        )
    }
}

export default Reciepe4