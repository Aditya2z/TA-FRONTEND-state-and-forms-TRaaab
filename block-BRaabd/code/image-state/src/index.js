import "./styles/style.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "",
        }
    }

    handleClick = (event) => {
        const sportName = event.target.innerText.toLowerCase();
        const jpegSrc = `/assets/${sportName}.jpeg`;
        const jpgSrc = `/assets/${sportName}.jpg`;
        const pngSrc = `/assets/${sportName}.png`;

        // Check for the existence of image types in order of preference: JPEG, JPG, PNG
        const src = new Image();
        src.src = jpegSrc;

        src.onload = () => {
            this.setState({
                src: jpegSrc,
            });
        };

        src.onerror = () => {
            src.src = jpgSrc;

            src.onload = () => {
                this.setState({
                    src: jpgSrc,
                });
            };

            src.onerror = () => {
                this.setState({
                    src: pngSrc,
                });
            };
        };
    }

    render() {
        return (
            <main>
                <div className="flex">
                <button onClick={this.handleClick}>Cricket</button>
                <button onClick={this.handleClick}>Basketball</button>
                <button onClick={this.handleClick}>Laptop</button>
                <button onClick={this.handleClick}>Phone</button>
                <button onClick={this.handleClick}>PUBG</button>
                <button onClick={this.handleClick}>SHOW-IMAGE</button>
                <button onClick={this.handleClick}>Tiger</button>
                </div>
                <img src={this.state.src} alt={this.state.src.split("/")[2]} />
            </main>
        );
    }
}

root.render(<App />);