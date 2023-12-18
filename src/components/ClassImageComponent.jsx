import { Component } from "react";

class ClassImageComponent extends Component {
	render() {
		return <img src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height} />;
	}
}

export default ClassImageComponent;
