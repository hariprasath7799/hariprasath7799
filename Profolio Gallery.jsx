import React, { Component } from "react";

class Portfoliogallery extends Component {

    state = {
        getAllPortfolio: [
            {
                id: 1,
                name: "Project 1",
                category: "Devices"
            },
            {
                id: 2,
                name: "Project 2",
                category: "Accessories"
            },
            {
                id: 3,
                name: "Project 3",
                category: "Devices"
            },
            {
                id: 4,
                name: "Project 4",
                category: "Tools"
            },
            {
                id: 5,
                name: "Project 5",
                category: "Fruits"
            },
        ],
        portfolio: [],

        categories: ["All", "Devices", "Accessories", "Tools", "Fruits", "Shoes"],
        selectedCategory: "All",
    };
    filterItems = (e, category) => {
        e.preventDefault();
    
        if (category === "All") {
          this.setState({
            selectedCategory: category,
            portfolio: this.state.getAllPortfolio,
          });
        } else {
          this.setState({
            selectedCategory: category,
            portfolio: this.state.getAllPortfolio.filter(
              (item) => item.category === category
            ),
          });
        }
      };
    render() {
        const portfolioItems = this.state.portfolio.map((item) => (
            <div className="work" key={item.id}>
                <h3>{item.name}</h3>
                <span>{item.category}</span>
            </div>
        ));

        const categoriesList = this.state.categories.map((cat) => (
            <a
                href="#"
                className={cat === this.state.selectedCat ? "active" : ""}
                onClick={(e) => this.filterItems(e, cat)}
            >
                {cat}
            </a>
        ));
        return (
            <div className="Portfolio">
                <div className="all-content">
                    <section>
                        <h3>Portfolio</h3>
                        <div className="categories">{categoriesList}</div>
                    </section>
                    <div className="works">
                        <div className="row">{portfolioItems}</div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Portfoliogallery;