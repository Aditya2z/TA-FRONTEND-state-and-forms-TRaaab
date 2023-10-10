import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeCategory: "ALL",
    }
  }

  handleClick = (event) => {
    this.setState({
        activeCategory: event.target.innerText,
    })
  }

  handleMenu = (activeCategory) => {
    if(activeCategory === "ALL") {
        return this.props.data;
    } else {
        return this.props.data.filter(item => item.category === activeCategory);
    }
  }

  render() {
    var uniqueCategories = [
      ...new Set(this.props.data.map((item) => item.category)),
    ];
    var activeCategory = this.handleMenu(this.state.activeCategory);
    return (
      <main className="menu">
        <h1>Our menu</h1>
        <ul className="nav-items">
          <button onClick={this.handleClick}>ALL</button>
          {uniqueCategories.map((category) => {
            return <button onClick={this.handleClick} key={category}>{category}</button>;
          })}
        </ul>
        <section className="menu-items">
          {activeCategory.map((item) => {
            return (
              <div className="menu-item" key={item.id}>
                <img src={item.img} alt={item.title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{item.title}</h4>
                    <h4 className="price">{item.price}</h4>
                  </header>
                  <p className="item-text">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}

export default App;
